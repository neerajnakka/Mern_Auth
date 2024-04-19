const jwt = require('jsonwebtoken');
const user = require('../models/user');
const { hashPassword, comparePassword } = require('../helpers/auth');
const test = (req, res) => {
  res.json('Welcome !');
};
//register Endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        error: 'one or more fields are empty! Fill them',
      });
    }
    if (!name) {
      return res.json({ error: 'name is required' });
    }
    if (!email) {
      return res.json({ error: 'email is required' });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: 'password is required and should be at least 6 characters',
      });
    }
    const exist = await user.findOne({ email: email });
    if (exist) {
      return res.json({ error: 'Email already taken. Use another ' });
    }

    //bcrypt
    const hashedPassword = await hashPassword(password);

    const User = await user.create({ name, email, password: hashedPassword });
    return res.json(User);
  } catch (error) {
    console.log(error);
  }
};
//login Endpoint

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if user already exists
    const User = await user.findOne({ email: email });
    if (!User) {
      return res.json({ error: 'No user found with given email' });
    }
    //check if password match
    const match = await comparePassword(password, User.password);
    if (match) {
      //if password is matched then assign token
      // res.json('password match');
      jwt.sign(
        { email: User.email, id: User._id, name: User.name },
        process.env.SECRET_KEY,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie('token', token).json(User);
        }
      );
    }
    if (!match) {
      res.json({ error: 'Password does not match' });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, {}, (err, User) => {
      if (err) throw err;
      res.json(User);
    });
  } else {
    res.json(null);
  }
};
module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
