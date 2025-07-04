
import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 70 }
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Desenvolvimento Full Stack',
      description: 'Expertise em front-end e back-end com tecnologias modernas'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design Responsivo',
      description: 'Interfaces elegantes que funcionam em todos os dispositivos'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Performance Otimizada',
      description: 'Aplicações rápidas e otimizadas para melhor experiência'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Colaboração',
      description: 'Trabalho em equipe e comunicação eficaz em projetos'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais memoráveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Desenvolvedor Full Stack</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Com mais de 5 anos de experiência, transformo ideias em realidade digital. 
              Especializado em React, Node.js e tecnologias modernas, sempre buscando 
              as melhores práticas e soluções inovadoras.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Acredito que a tecnologia deve ser acessível e funcional, criando 
              experiências que realmente fazem a diferença na vida das pessoas.
            </p>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
