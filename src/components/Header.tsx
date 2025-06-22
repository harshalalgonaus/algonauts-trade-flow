
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
          <nav className="hidden lg:flex space-x-8">
            <a href="#cash-management" className="text-gray-700 hover:text-black transition-colors">
              Cash Management
            </a>
            <a href="#equity-management" className="text-gray-700 hover:text-black transition-colors">
              Equity Management
            </a>
            <a href="#algorithmic-trading" className="text-gray-700 hover:text-black transition-colors">
              Algorithmic Trading
            </a>
            <a href="#risk-management" className="text-gray-700 hover:text-black transition-colors">
              Risk Management
            </a>
            <a href="#portfolio-analytics" className="text-gray-700 hover:text-black transition-colors">
              Portfolio Analytics
            </a>
            <a href="#technology" className="text-gray-700 hover:text-black transition-colors">
              Technology
            </a>
            <a href="#about" className="text-gray-700 hover:text-black transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex space-x-4">
            <Button variant="outline" className="border-black text-black hover:bg-gray-50">
              Login
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-2">
              Open Account
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
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
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#cash-management" className="text-gray-700 hover:text-black transition-colors">
                Cash Management
              </a>
              <a href="#equity-management" className="text-gray-700 hover:text-black transition-colors">
                Equity Management
              </a>
              <a href="#algorithmic-trading" className="text-gray-700 hover:text-black transition-colors">
                Algorithmic Trading
              </a>
              <a href="#risk-management" className="text-gray-700 hover:text-black transition-colors">
                Risk Management
              </a>
              <a href="#portfolio-analytics" className="text-gray-700 hover:text-black transition-colors">
                Portfolio Analytics
              </a>
              <a href="#technology" className="text-gray-700 hover:text-black transition-colors">
                Technology
              </a>
              <a href="#about" className="text-gray-700 hover:text-black transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-black text-black hover:bg-gray-50 w-fit">
                  Login
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800 w-fit">
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
