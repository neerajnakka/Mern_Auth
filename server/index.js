const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./routes/authRouters');
const app = express();
const port = 8000;
//database connect
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('mongodb successfully connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
//route all routes through /
app.use('/', router);

app.listen(port, () => {
  console.log(`listening on ${port} successfully`);
});
