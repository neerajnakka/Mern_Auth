import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Link
          to="/"
          className="text-white font-bold text-xl hover:text-gray-300 transition duration-300"
        >
          Home
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
