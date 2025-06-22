import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative flex items-center justify-between py-4">
<div className="flex items-center space-x-2 z-10 cursor-pointer hover:scale-105 transition-transform duration-300">
  <img
    src="logo.jpeg"
    alt="Algonauts Logo"
    className="h-8 w-auto"
  />
  <span className="text-2xl font-bold text-black">ALGONAUTS</span>
</div>


  {/* Centered Navigation - Absolute Center */}
  <nav className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
    {[
      ['About Us', '#about'],
      ['Cash Management', '#cash-management'],
      ['Equity Management', '#equity-management'],
      ['Algorithmic Trading', '#algorithmic-trading'],
      ['Risk Management', '#risk-management'],
      ['Portfolio Analytics', '#portfolio-analytics'],
      ['Contact', '#contact']
    ].map(([name, link]) => (
      <a
        key={link}
        href={link}
        className="text-gray-700 hover:text-black text-sm transition-all duration-300 hover:scale-105 relative group text-center block"
      >
        {name}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
      </a>
    ))}
  </nav>

  {/* CTA Buttons - Right */}
  <div className="hidden lg:flex space-x-4 z-10">
    <Button
      variant="outline"
      className="border-black text-black hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
    >
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
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}
              ></span>
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

              {/* CTA Buttons in Mobile */}
              <div className="w-full flex justify-end">
                <div className="flex flex-col space-y-2 pt-4 items-end">
                  <Button variant="outline" className="border-black text-black hover:bg-gray-50 w-fit transition-all duration-300 hover:scale-105">
                    Login
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800 w-fit transition-all duration-300 hover:scale-105">
                    Open Account
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
