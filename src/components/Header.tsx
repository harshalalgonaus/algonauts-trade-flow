
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-black">
              ALGONAUTS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-black transition-colors">
              About Us
            </a>
            <a href="#services" className="text-gray-700 hover:text-black transition-colors">
              Services
            </a>
            <a href="#technology" className="text-gray-700 hover:text-black transition-colors">
              Technology
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
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
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">
                About Us
              </a>
              <a href="#services" className="text-gray-700 hover:text-black transition-colors">
                Services
              </a>
              <a href="#technology" className="text-gray-700 hover:text-black transition-colors">
                Technology
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
                Contact
              </a>
              <Button className="bg-black text-white hover:bg-gray-800 w-fit">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
