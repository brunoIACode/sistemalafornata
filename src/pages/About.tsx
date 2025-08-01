import React from 'react';
import { Award, Users, Clock, Heart, ChefHat, Star } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Giuseppe Romano",
      role: "Chef Executivo",
      image: "https://images.pexels.com/photos/1367820/pexels-photo-1367820.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "30 anos de experiência na culinária italiana tradicional"
    },
    {
      name: "Maria Benedetti",
      role: "Especialista em Massas",
      image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Mestre na arte das massas frescas artesanais"
    },
    {
      name: "Antonio Silva",
      role: "Pizzaiolo",
      image: "https://images.pexels.com/photos/1378424/pexels-photo-1378424.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Especialista em fornos a lenha e pizzas tradicionais"
    },
    {
      name: "Lucia Ferrari",
      role: "Confeiteira",
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300",
      description: "Criadora das nossas sobremesas italianas autênticas"
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Paixão pela Culinária",
      description: "Cada prato é preparado com amor e dedicação, seguindo receitas tradicionais passadas de geração em geração."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualidade Premium",
      description: "Utilizamos apenas ingredientes selecionados e de alta qualidade, importados diretamente da Itália."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Atendimento Familiar",
      description: "Tratamos cada cliente como parte da nossa família, oferecendo um atendimento caloroso e personalizado."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Tradição e Inovação",
      description: "Respeitamos as tradições culinárias italianas enquanto inovamos para atender o paladar moderno."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Uma jornada de sabores autênticos que começou há mais de 5 anos, 
              trazendo o melhor da culinária italiana para sua mesa
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                De uma Pequena Cozinha para Toda a Cidade
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  O Forno Delivery Rápido nasceu do sonho de Giuseppe Romano, um chef italiano 
                  que veio ao Brasil em busca de novos horizontes. Com receitas de família 
                  guardadas há gerações, ele decidiu compartilhar os sabores autênticos da 
                  Itália com os brasileiros.
                </p>
                <p>
                  Começamos em uma pequena cozinha no bairro da Vila Italiana, preparando 
                  pizzas e massas para os vizinhos. O boca a boca fez nossa fama crescer, 
                  e logo estávamos atendendo toda a região com nosso delivery rápido e 
                  sabores incomparáveis.
                </p>
                <p>
                  Hoje, após 5 anos de muito trabalho e dedicação, somos referência em 
                  culinária italiana na cidade, mantendo sempre o mesmo compromisso com 
                  a qualidade e o sabor que nos trouxe até aqui.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nossa cozinha"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Anos de Tradição</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">15k+</div>
                  <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam cada prato que preparamos e cada atendimento que oferecemos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os mestres da culinária que fazem a magia acontecer em nossa cozinha
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-red-600 bg-opacity-0 group-hover:bg-opacity-10 rounded-full transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15.000+</div>
              <div className="text-red-200">Pedidos Entregues</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-red-200">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30min</div>
              <div className="text-red-200">Tempo Médio de Entrega</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-red-200">Ingredientes Frescos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ChefHat className="w-16 h-16 text-red-600 mx-auto mb-8" />
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Levar até você os sabores autênticos da Itália, preparados com ingredientes 
            selecionados e o carinho de uma receita de família. Queremos que cada refeição 
            seja uma experiência memorável, que desperte sorrisos e crie momentos especiais 
            ao redor da mesa.
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
              </div>
              <p className="text-gray-600 italic">
                "Mais que um delivery, somos uma família que prepara cada prato com amor"
              </p>
              <p className="text-red-600 font-semibold mt-4">- Giuseppe Romano, Chef Executivo</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;