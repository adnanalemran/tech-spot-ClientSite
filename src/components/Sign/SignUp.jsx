import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-gray-200 my-5 dark:bg-gray-900 dark:text-gray-200">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form className="space-y-6">
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Your name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-xl dark:text-gray-900 dark:bg-violet-400 btn btn-primary">
            Sign Up
          </button>
        </form>
        <div className="flex justify-center space-x-4">
          <button aria-label="Sign up with Google" className="p-3 rounded-sm">
            {/* Add your Google icon SVG here */}
          </button>
          <button aria-label="Sign up with Twitter" className="p-3 rounded-sm">
            {/* Add your Twitter icon SVG here */}
          </button>
          <button aria-label="Sign up with GitHub" className="p-3 rounded-sm">
            {/* Add your GitHub icon SVG here */}
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already have an account?
          <Link
          to="/signin"
            className="underline dark:text-gray-100"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
