import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { state } = useCart();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Flame className="w-8 h-8" style={{ color: '#F15027' }} />
            <span className="text-xl font-extrabold" style={{ color: '#F15027' }}>La Fornata</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/menu" 
              className={`font-medium transition-colors ${
                isActive('/menu') ? '' : 'hover:opacity-80'
              }`}
              style={{ color: isActive('/menu') ? '#F15027' : '#342419' }}
            >
              Cardápio
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') ? '' : 'hover:opacity-80'
              }`}
              style={{ color: isActive('/about') ? '#F15027' : '#342419' }}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive('/contact') ? '' : 'hover:opacity-80'
              }`}
              style={{ color: isActive('/contact') ? '#F15027' : '#342419' }}
            >
              Contato
            </Link>
            
            {/* Phone */}
            <div className="flex items-center" style={{ color: '#342419' }}>
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">(11) 99999-9999</span>
            </div>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative text-white p-3 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ backgroundColor: '#F15027' }}
            >
              <ShoppingCart className="w-5 h-5" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 animate-pulse"
                      style={{ color: '#F15027', borderColor: '#F15027' }}>
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2"
              style={{ color: '#342419' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/menu" 
                className={`font-medium transition-colors ${
                  isActive('/menu') ? '' : 'hover:opacity-80'
                }`}
                style={{ color: isActive('/menu') ? '#F15027' : '#342419' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Cardápio
              </Link>
              <Link 
                to="/about" 
                className={`font-medium transition-colors ${
                  isActive('/about') ? '' : 'hover:opacity-80'
                }`}
                style={{ color: isActive('/about') ? '#F15027' : '#342419' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition-colors ${
                  isActive('/contact') ? '' : 'hover:opacity-80'
                }`}
                style={{ color: isActive('/contact') ? '#F15027' : '#342419' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="flex items-center pt-2 border-t" style={{ color: '#342419' }}>
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">(11) 99999-9999</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;