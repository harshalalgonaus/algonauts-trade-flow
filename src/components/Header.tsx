
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black hover:scale-105 transition-transform duration-300 cursor-pointer">
              ALGONAUTS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#cash-management" className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group">
              Cash Management
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#equity-management" className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group">
              Equity Management
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#algorithmic-trading" className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group">
              Algorithmic Trading
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#risk-management" className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group">
              Risk Management
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio-analytics" className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group">
              Portfolio Analytics
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#technology" className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group">
              Technology
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex space-x-4">
            <Button variant="outline" className="border-black text-black hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md">
              Login
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Open Account
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-[fade-in_0.3s_ease-out]">
            <nav className="flex flex-col space-y-4">
              <a href="#cash-management" className="text-gray-700 hover:text-black transition-all duration-300 hover:translate-x-2">
                Cash Management
              </a>
              <a href="#equity-management" className="text-gray-700 hover:text-black transition-all duration-300 hover:translate-x-2">
                Equity Management
              </a>
              <a href="#algorithmic-trading" className="text-gray-700 hover:text-black transition-all duration-300 hover:translate-x-2">
                Algorithmic Trading
              </a>
              <a href="#risk-management" className="text-gray-700 hover:text-black transition-all duration-300 hover:translate-x-2">
                Risk Management
              </a>
              <a href="#portfolio-analytics" className="text-gray-700 hover:text-black transition-all duration-300 hover:translate-x-2">
                Portfolio Analytics
              </a>
              <a href="#technology" className="text-gray-700 hover:text-black transition-all duration-300 hover:translate-x-2">
                Technology
              </a>
              <a href="#about" className="text-gray-700 hover:text-black transition-all duration-300 hover:translate-x-2">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-all duration-300 hover:translate-x-2">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-black text-black hover:bg-gray-50 w-fit transition-all duration-300 hover:scale-105">
                  Login
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800 w-fit transition-all duration-300 hover:scale-105">
                  Open Account
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
