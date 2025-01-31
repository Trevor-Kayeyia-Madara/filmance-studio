import React from 'react';
import { footerLinks } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="px-40 py-10 bg-gray-50 max-md:px-5 max-md:py-10">
      <div className="mx-auto my-0 max-w-[960px]">
        <div className="flex flex-wrap gap-6 justify-between mb-6">
          {footerLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="text-base text-fuchsia-800"
              tabIndex={0}
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="text-base text-center text-fuchsia-800">
          © {new Date().getFullYear()} Filmance Studio
        </div>
      </div>
    </footer>
  );
};