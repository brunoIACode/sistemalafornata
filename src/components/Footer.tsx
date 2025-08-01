import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Flame } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <Flame className="w-8 h-8 mr-3" style={{ color: '#F15027' }} />
              <div>
                <h1 className="text-2xl font-bold">La Fornata</h1>
                <p className="text-sm font-semibold" style={{ color: '#F15027' }}>Culinária Italiana</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Sabores autênticos da tradição italiana. 
              Qualidade, amor e dedicação em cada prato preparado artesanalmente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full hover:opacity-80 transition-colors" style={{ backgroundColor: '#F15027' }}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:opacity-80 transition-colors" style={{ backgroundColor: '#F15027' }}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full hover:opacity-80 transition-colors" style={{ backgroundColor: '#F15027' }}>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-white transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Especialidades</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Lasanhas Artesanais
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Lasanha Bolognese
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Lasanha Quatro Queijos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Massas Frescas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Bebidas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: '#F15027' }} />
                <div>
                  <p className="text-gray-400">
                    Centro de Codo<br />
                    Codo - Maranhão/MA<br />
                    CEP: 65400-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" style={{ color: '#F15027' }} />
                <p className="text-gray-400">(98) 99999-9999</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" style={{ color: '#F15027' }} />
                <p className="text-gray-400">contato@lafornata.com.br</p>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 mt-1" style={{ color: '#F15027' }} />
                <div>
                  <p className="text-gray-400">
                    Segunda a Domingo<br />
                    18:00 às 23:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 La Fornata. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">Formas de Pagamento:</p>
              <div className="flex space-x-2">
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">VISA</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">MASTER</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs">PIX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;