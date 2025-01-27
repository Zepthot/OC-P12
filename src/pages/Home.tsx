// import libraries
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center p-4">
      <h1 className="text-sportSeeDark text-3xl font-bold mb-8">Bienvenue</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full max-w-md">
        <Link
          to="/user/12"
          className="bg-sportSee hover:bg-sportSeeDark text-white font-bold py-4 px-6 rounded-lg shadow text-center transform hover:scale-105 transition"
        >
          <p className="text-lg">Utilisateur 12</p>
        </Link>
        <Link
          to="/user/18"
          className="bg-sportSee hover:bg-sportSeeDark text-white font-bold py-4 px-6 rounded-lg shadow text-center transform hover:scale-105 transition"
        >
          <p className="text-lg">Utilisateur 18</p>
        </Link>
      </div>
    </div>
  );
}
