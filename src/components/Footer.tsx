import React from 'react';
import { FooterSection } from './SectionContainer';

export default function Footer() {
  return (
    <FooterSection>
      <div>
        <p className="font-serif text-lg mb-2">social media,</p>
        <p className="font-serif text-lg mb-2">etc etc..</p>
        <p className="text-xs text-[#fbeaea] mt-4">© {new Date().getFullYear()} CodeCollab. All rights reserved.</p>
      </div>
    </FooterSection>
  );
}
