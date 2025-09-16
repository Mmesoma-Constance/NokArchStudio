import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const navItems = [
    { label: "ABOUT US", href: "/about", hasDropdown: true },
    { label: "PROJECTS", href: "/projects" },
    { label: "SERVICES", href: "/services" },
    { label: "CONTACT US", href: "/contact" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/100 backdrop-blur-sm">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-light tracking-tight text-black">
              NokArchStudio
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  setActiveMenu(item.hasDropdown ? item.label : null)
                }
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a href={item.href} className="nav-link">
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className="w-3 h-3 ml-1 inline-block transition-transform duration-200 text-foreground"
                      style={{
                        transform:
                          activeMenu === item.label
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    ></ChevronDown>
                  )}
                </a>

                {/* Dropdown Menu for About Us */}
                {item.hasDropdown && activeMenu === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-border">
                    <div className="py-2">
                      <a
                        href="/about/studio"
                        className="block px-4 py-2 nav-link hover:bg-amber-50"
                      >
                        Our Studio
                      </a>
                      <a
                        href="/about/team"
                        className="block px-4 py-2 nav-link hover:bg-amber-50"
                      >
                        Our Team
                      </a>
                      <a
                        href="/about/philosophy"
                        className="block px-4 py-2 nav-link hover:bg-amber-50"
                      >
                        Our Philosophy
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="nav-link">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
