
import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor Full Stack apaixonado por criar soluções inovadoras 
              e experiências digitais memoráveis.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#início" className="text-gray-400 hover:text-white transition-colors duration-200">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors duration-200">Sobre</a></li>
              <li><a href="#projetos" className="text-gray-400 hover:text-white transition-colors duration-200">Projetos</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors duration-200">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Feito com</span>
            <Heart className="text-red-500" size={16} />
            <span>por Desenvolvedor Full Stack</span>
          </p>
          <p className="text-gray-500 mt-2">© 2024 Portfolio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
