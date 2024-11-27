import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/fonts.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white" style={{ fontFamily: 'Coco Gothic' }}>
      <div className="max-w-[2000px] mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/hcjml9hj479-1242%3A6374?alt=media&token=62e47ce5-4302-447e-8fd6-e792aa3bfd91"
              alt="Logo"
              className="w-[50px] h-[47.37px]"
            />
          </Link>

          <div className="flex items-center space-x-6">
            {/* Hamburger Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:text-[#ce1e1e] transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-[1.5px] bg-current transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`w-full h-[1.5px] bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-[1.5px] bg-current transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </div>
            </button>

            {/* Download Button - Always Visible */}
            <Link to="/#first-section" className="flex justify-center items-center h-[45px] px-6 border border-[#A1A1AA] rounded-[30px] hover:border-[#ce1e1e] hover:text-[#ce1e1e] transition-colors">
              <span style={{ fontFamily: 'Inter' }} className="text-[#18181B] text-[19px] leading-[150%] font-light group-hover:text-[#ce1e1e] tracking-wide">
                Download now
              </span>
            </Link>

            {/* Mae AI Button */}
            <a 
              href="https://ai-mae.tookuai.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-[45px] px-6 border border-[#A1A1AA] rounded-[30px] hover:border-[#ce1e1e] transition-all duration-300 group"
            >
              <img src="/images/ai.svg" alt="AI" className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter' }} className="text-[#18181B] text-base leading-[150%] font-light ml-2 group-hover:text-[#ce1e1e]">
                Mae
              </span>
            </a>
          </div>
        </div>

        {/* Fancy Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none -z-10'
          }`}
        >
          <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex justify-between items-center h-20">
              {/* Logo in Menu */}
              <Link to="/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/hcjml9hj479-1242%3A6374?alt=media&token=62e47ce5-4302-447e-8fd6-e792aa3bfd91"
                  alt="Logo"
                  className="w-[50px] h-[47.37px]"
                />
              </Link>

              {/* Close Button */}
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:text-[#ce1e1e] transition-colors"
                  aria-label="Close menu"
                >
                  <div className="w-5 h-4 flex flex-col justify-between">
                    <span className="w-full h-[1.5px] bg-current transform rotate-45 translate-y-[7px]" />
                    <span className="w-full h-[1.5px] bg-current opacity-0" />
                    <span className="w-full h-[1.5px] bg-current transform -rotate-45 -translate-y-[7px]" />
                  </div>
                </button>

                {/* Download Button in Menu */}
                <Link to="/#first-section" className="flex justify-center items-center h-[45px] px-6 border border-[#A1A1AA] rounded-[30px] hover:border-[#ce1e1e] hover:text-[#ce1e1e] transition-colors">
                  <span style={{ fontFamily: 'Inter' }} className="text-[#18181B] text-[19px] leading-[150%] font-light group-hover:text-[#ce1e1e] tracking-wide">
                    Download now
                  </span>
                </Link>

                {/* Mae AI Button in Menu */}
                <a 
                  href="https://ai-mae.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center h-[45px] px-6 border border-[#A1A1AA] rounded-[30px] hover:border-[#ce1e1e] transition-all duration-300 group"
                >
                  <img src="/images/ai.svg" alt="AI" className="w-5 h-5" />
                  <span style={{ fontFamily: 'Inter' }} className="text-[#18181B] text-base leading-[150%] font-light ml-2 group-hover:text-[#ce1e1e]">
                    Mae
                  </span>
                </a>
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] space-y-8">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#18181B] text-2xl leading-[150%] font-light hover:text-[#ce1e1e] transition-colors"
              >
                HOME
              </Link>
              <Link 
                to="/ride" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#18181B] text-2xl leading-[150%] font-light hover:text-[#ce1e1e] transition-colors"
              >
                RIDE
              </Link>
              <Link 
                to="/partners" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#18181B] text-2xl leading-[150%] font-light tracking-[0.05px] hover:text-[#ce1e1e] transition-colors"
              >
                PARTNERS
              </Link>
              <Link 
                to="/drivers" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#18181B] text-2xl leading-[150%] font-light hover:text-[#ce1e1e] transition-colors"
              >
                PILOTS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;