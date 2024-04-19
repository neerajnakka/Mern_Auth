import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quotes] = useState([
    'Why did the password win an award? Because it was outstanding in its security!',
    'What did one authentication system say to the other authentication system? Nothing, they just authenticated!',
    "Why don't developers trust cookies? Because they make up everything!",
    'How does a user build their secure account? By enabling two-factor authentication!',
    'What do you call a fake encryption method? An impostor!',
  ]);

  const [gameScore, setGameScore] = useState(0);

  const generateRandomQuote = () => {
    const newIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(newIndex);
  };

  const handleIncrementScore = () => {
    setGameScore((prevScore) => prevScore + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
        Welcome to MERN Authentication and Authorization!
      </h1>
      <div className="mb-8 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          Here's a funny quote for you:
        </p>
        <p className="text-lg italic font-medium text-center text-gray-800 dark:text-white">
          {quotes[quoteIndex]}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={generateRandomQuote}
        >
          Get Another Quote
        </button>
      </div>
      <div className="mb-8 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          Let's play a simple game:
        </p>
        <p className="text-lg italic font-medium text-center text-gray-800 dark:text-white">
          Click the button below to increase your score!
        </p>
        <p className="text-lg font-bold text-center text-gray-800 dark:text-white mt-4">
          Score: {gameScore}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
          onClick={handleIncrementScore}
        >
          Click Me!
        </button>
      </div>
      <div className="flex items-center mb-4 text-lg text-gray-600 dark:text-gray-400">
        <p>Ready to get started?</p>
        <div className="mx-4">&rarr;</div>
        <div>
          <Link
            to="/login"
            className="font-bold text-blue-500 hover:underline dark:text-blue-400"
          >
            Login
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">or</p>
          <Link
            to="/register"
            className="font-bold text-green-500 hover:underline dark:text-green-400"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
