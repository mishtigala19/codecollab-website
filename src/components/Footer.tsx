import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-[#831c1c] py-8 text-center text-sm text-white w-full">
        <div>
          <p className="font-serif text-lg mb-2">social media,</p>
          <p className="font-serif text-lg mb-2">etc etc..</p>
          <p className="text-xs text-[#fbeaea] mt-4">© {new Date().getFullYear()} CodeCollab. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  