// import librairies
import React from 'react';
import { Link } from 'react-router-dom';
// import assets
import logo from '@/assets/icons/sportsee.svg';

export default function Header() {
  return (
    <header className="absolute w-full flex bg-black text-white pt-4 pb-3 px-8 justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="SportSee" />
        <span className="text-2xl text-sportSee">SportSee</span>
      </div>
      <nav className="flex w-full justify-around text-2xl font-medium">
        <Link to="/" className="hover:text-sportSee">
          Accueil
        </Link>
        <Link to="/profile" className="hover:text-sportSee">
          Profil
        </Link>
        <Link to="/settings" className="hover:text-sportSee">
          Réglage
        </Link>
        <Link to="/community" className="hover:text-sportSee">
          Communauté
        </Link>
      </nav>
    </header>
  );
}
