import React from 'react';
import { Link } from '@tanstack/react-router';
import { Users } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#831c1c] backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="w-full flex items-center justify-between px-6 py-2">
        {/* Logo and Title on the left */}
        <div className="flex items-center gap-3">
          <Users size={38} strokeWidth={2.5} className="text-white" />
          <span className="font-serif text-2xl font-bold text-white tracking-tight select-none">CodeCollab</span>
        </div>
        {/* Navigation links*/}
        <div className="flex items-center gap-4">
          <Link
            to="/projects"
            className="font-serif text-white text-lg px-2 py-1 transition hover:underline hover:underline-offset-4 hover:text-[#fbeaea]"
          >
            Projects
          </Link>
          <Link
            to="/members"
            className="font-serif text-white text-lg px-2 py-1 transition hover:underline hover:underline-offset-4 hover:text-[#fbeaea]"
          >
            Members
          </Link>
          <Link
            to="/join"
            className="font-serif bg-white text-[#831c1c] rounded-lg px-6 py-1.5 text-lg transition hover:bg-[#fbeaea] hover:text-[#a02c2c] shadow-sm"
          >
            Join
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
