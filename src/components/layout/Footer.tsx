
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-law-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 text-white">
              <span>Sagar</span>
              <span className="text-law-gold">&</span>
              <span>Sagar</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Delivering trusted legal counsel and representation for over two decades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-law-gold">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-law-gold">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-law-gold pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-law-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-law-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/practice" className="text-gray-300 hover:text-law-gold transition-colors">Practice Areas</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-law-gold transition-colors">Services</Link>
              </li>
            </ul>
          </div>
          
          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-law-gold pb-2 inline-block">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <a href="/practice#litigation" className="text-gray-300 hover:text-law-gold transition-colors">Litigation & General Practice</a>
              </li>
              <li>
                <a href="/practice#arbitration" className="text-gray-300 hover:text-law-gold transition-colors">Arbitration</a>
              </li>
              <li>
                <a href="/practice#corporate" className="text-gray-300 hover:text-law-gold transition-colors">Corporate & Commercial Services</a>
              </li>
              <li>
                <a href="/practice#realestate" className="text-gray-300 hover:text-law-gold transition-colors">Property & Real Estate</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-law-gold pb-2 inline-block">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-3 font-medium text-white">New Delhi Office:</p>
              <p className="mb-1">18, Hargobind Enclave,</p>
              <p className="mb-1">Bhartendu Harish Chandra Marg,</p>
              <p className="mb-3">Delhi - 110092</p>
              
              <p className="mb-2">
                <span className="font-medium text-white">Phone:</span><br />
                <a href="tel:+911147543981" className="hover:text-law-gold transition-colors">+91-11-47543981</a>
              </p>
              
              <div>
                <span className="font-medium text-white">Email:</span><br />
                <a href="mailto:info@sagarandsagar.in" className="hover:text-law-gold transition-colors block">info@sagarandsagar.in</a>
                <a href="mailto:rajiv.sagar1@gmail.com" className="hover:text-law-gold transition-colors block">rajiv.sagar1@gmail.com</a>
              </div>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Sagar & Sagar Law Offices. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
