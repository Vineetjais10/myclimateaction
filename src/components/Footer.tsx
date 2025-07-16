
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-climate-dark text-white pt-10 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={scrollToTop}
            className="mb-8 p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
          
          <div className="text-sm text-white/60 text-center">
            <p>© Climate Action Competition 2025. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
