import React from 'react';
import { FooterSection } from './SectionContainer';

export default function Footer() {
  return (
    <FooterSection>
      <div>
        <p className="font-serif text-lg mb-2">social media,</p>
        <p className="font-serif text-lg mb-2">
          <a
            href="https://www.instagram.com/umasscodecollab/"
            className="inline-flex items-center gap-2"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/717/717392.png"
              alt="instagram logo"
              className="w-6 h-6"
            />
            Instagram
          </a>
        </p>
        <p className="font-serif text-lg mb-2">etc etc..</p>
        <p className="text-xs text-[#fbeaea] mt-4">© {new Date().getFullYear()} CodeCollab. All rights reserved.</p>
      </div>
    </FooterSection>
  );
}
