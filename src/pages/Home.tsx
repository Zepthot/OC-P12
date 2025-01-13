// import libraries
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gray-100">
      <h1>Home</h1>
      <Link
        to="/user/12"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        User 12
      </Link>
      <Link
        to="/user/18"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        User 18
      </Link>
    </div>
  );
}
