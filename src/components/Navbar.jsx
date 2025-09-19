import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu } from 'lucide-react';

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'ABOUT US', href: '/about', hasDropdown: true },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'SERVICES', href: '/services' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md backdrop-blur-sm">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-light tracking-tight text-foreground hover:opacity-80 transition-opacity">
              NokArchStudio
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.hasDropdown ? item.label : null)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link 
                  to={item.href} 
                  className={`nav-link font-montserrat ${
                    location.pathname === item.href ? 'text-[#1f5c89] font-medium' : 'text-gray-800'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg 
                      className="w-3 h-3 ml-1 inline-block transition-transform duration-200"
                      style={{ transform: activeMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu for About Us */}
                {item.hasDropdown && activeMenu === item.label && (
                  <div className="font-montserrat absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm shadow-lg border border-border z-50">
                    <div className="py-2">
                      <Link 
                        to="/about#studio" 
                        className={`block px-4 py-2 nav-link hover:bg-muted ${
                          location.hash === '#studio' ? 'text-[#1f5c89] font-medium' : ''
                        }`}
                      >
                        Our Studio
                      </Link>
                      <Link 
                        to="/about#team" 
                        className={`block px-4 py-2 nav-link hover:bg-muted ${
                          location.hash === '#team' ? 'text-[#1f5c89] font-medium' : ''
                        }`}
                      >
                        Team
                      </Link>
                      <Link 
                        to="/about#philosophy" 
                        className={`block px-4 py-2 nav-link hover:bg-muted ${
                          location.hash === '#philosophy' ? 'text-[#1f5c89] font-medium' : ''
                        }`}
                      >
                        Philosophy
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden font-montserrat">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-link p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`md:hidden font-montserrat transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="font-montserrat bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link 
                    to={item.href} 
                    className={`block font-montserrat nav-link text-lg py-2 ${
                      location.pathname === item.href ? 'text-[#1f5c89] font-medium' : 'text-gray-800'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="font-montserrat ml-4 mt-2 space-y-2">
                      <Link 
                        to="/about#studio" 
                        className={`block nav-link text-sm py-1 ${
                          location.hash === '#studio' ? 'text-[#1f5c89] font-medium' : 'opacity-80'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Our Studio
                      </Link>
                      <Link 
                        to="/about#team" 
                        className={`block nav-link text-sm py-1 ${
                          location.hash === '#team' ? 'text-[#1f5c89] font-medium' : 'opacity-80'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Team
                      </Link>
                      <Link 
                        to="/about#philosophy" 
                        className={`block nav-link text-sm py-1 ${
                          location.hash === '#philosophy' ? 'text-[#1f5c89] font-medium' : 'opacity-80'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Philosophy
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
