
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if current path matches the link
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h1 className="text-law-navy font-serif text-2xl font-bold">
                <span>Sagar</span>
                <span className="text-law-gold">&</span>
                <span>Sagar</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active-nav-link' : ''}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active-nav-link' : ''}`}>
              About Us
            </Link>
            <Link to="/practice" className={`nav-link ${isActive('/practice') ? 'active-nav-link' : ''}`}>
              Practice
            </Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active-nav-link' : ''}`}>
              Services
            </Link>
            <Link to="/clients" className={`nav-link ${isActive('/clients') ? 'active-nav-link' : ''}`}>
              Our Clients
            </Link>
            <Link to="/career" className={`nav-link ${isActive('/career') ? 'active-nav-link' : ''}`}>
              Career
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active-nav-link' : ''}`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-law-navy focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-1 sm:px-6">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/') ? 'text-law-gold' : 'text-law-navy hover:text-law-gold'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/about') ? 'text-law-gold' : 'text-law-navy hover:text-law-gold'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/practice" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/practice') ? 'text-law-gold' : 'text-law-navy hover:text-law-gold'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Practice
            </Link>
            <Link 
              to="/services" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/services') ? 'text-law-gold' : 'text-law-navy hover:text-law-gold'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/clients" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/clients') ? 'text-law-gold' : 'text-law-navy hover:text-law-gold'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Our Clients
            </Link>
            <Link 
              to="/career" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/career') ? 'text-law-gold' : 'text-law-navy hover:text-law-gold'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Career
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/contact') ? 'text-law-gold' : 'text-law-navy hover:text-law-gold'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
