import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Truck, Shield, ChefHat, Heart, Award, Users, ArrowRight, Phone, Flame, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { dispatch } = useCart();

  const featuredProducts = [
    {
      id: 1,
      name: "Lasanha Bolognese",
      description: "Massa fresca, molho bolognese artesanal, bechamel e queijos especiais",
      price: 28.90,
      image: "https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      category: "Lasanha"
    },
    {
      id: 2,
      name: "Lasanha Quatro Queijos",
      description: "Massa fresca, molho branco e uma seleção de quatro queijos nobres",
      price: 32.90,
      image: "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      category: "Lasanha"
    },
    {
      id: 3,
      name: "Lasanha de Frango",
      description: "Massa fresca, frango desfiado, molho branco e queijo gratinado",
      price: 29.90,
      image: "https://images.pexels.com/photos/5639451/pexels-photo-5639451.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.7,
      category: "Lasanha"
    },
    {
      id: 4,
      name: "Lasanha Vegetariana",
      description: "Massa fresca, mix de vegetais, molho de tomate e queijos",
      price: 27.90,
      image: "https://images.pexels.com/photos/4198169/pexels-photo-4198169.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.6,
      category: "Lasanha"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      comment: "Melhor lasanha da região! Sempre fresquinha e saborosa. O delivery é super rápido!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "João Santos",
      comment: "As lasanhas são incríveis! Ingredientes de qualidade e preço justo. Recomendo!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      name: "Ana Costa",
      comment: "Atendimento excelente e lasanhas deliciosas. Virei cliente fiel da La Fornata!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full bg-gradient-to-br from-orange-50 to-white" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F15027' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Small Banner */}
              <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full text-sm font-medium" style={{ color: '#F15027' }}>
                <Flame className="w-4 h-4" style={{ color: '#F15027' }} />
                Sabor autêntico direto do nosso forno
              </div>
              
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span style={{ color: '#342419' }}>Sabores Artesanais</span>
                  <br />
                  <span style={{ color: '#F15027' }}>Com Tradição Italiana</span>
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-xl leading-relaxed max-w-2xl" style={{ color: '#666666' }}>
                Criamos nossas massas com amor e dedicação, usando técnicas tradicionais e ingredientes selecionados para uma experiência gastronômica inesquecível.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{ backgroundColor: '#F15027' }}
                >
                  Fazer Pedido Agora
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 rounded-full text-lg font-semibold hover:text-white transition-all duration-300"
                  style={{ 
                    borderColor: '#F15027', 
                    color: '#F15027'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F15027';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#F15027';
                  }}
                >
                  Ver Cardápio
                </Link>
              </div>
            </div>
            
            {/* Right Column - Features Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200 max-w-md mx-auto border-t-4" style={{ borderTopColor: '#F15027' }}>
                {/* Main Feature */}
                <div className="text-center mb-10">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F15027' }}>
                    <Heart className="w-10 h-10 text-white animate-pulse" style={{
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#F15027' }}>Nossa Paixão</h3>
                  <p className="text-gray-500 text-base">Criamos com amor e dedicação</p>
                </div>
                
                {/* Feature List */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <ChefHat className="w-6 h-6" style={{ color: '#F15027' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base" style={{ color: '#342419' }}>Feito à Mão</h4>
                      <p className="text-sm text-gray-500">Pratos frescos diariamente</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6" style={{ color: '#F15027' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base" style={{ color: '#342419' }}>Ingredientes Premium</h4>
                      <p className="text-sm text-gray-500">Selecionados com cuidado</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Flame className="w-6 h-6" style={{ color: '#F15027' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base" style={{ color: '#342419' }}>Forno Tradicional</h4>
                      <p className="text-sm text-gray-500">Sabor autêntico italiano</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ color: '#F15027' }}>
              <Star className="w-4 h-4" style={{ color: '#F15027' }} />
              Nossa História
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#342419' }}>Nossa História</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nascemos do amor pela culinária italiana e da paixão por criar pratos artesanais perfeitos
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Nossa Paixão */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4" style={{ borderTopColor: '#F15027' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F15027' }}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#F15027' }}>Nossa Paixão</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Criamos cada prato com dedicação e amor pela culinária italiana tradicional
                </p>
              </div>
              <p className="text-gray-600 text-center">
                Desde 2019, mantemos viva a tradição dos pratos artesanais italianos
              </p>
            </div>

            {/* Nosso Processo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-t-yellow-400">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8" style={{ color: '#F15027' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#F15027' }}>Nosso Processo</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Ingredientes selecionados e técnicas tradicionais para pratos perfeitos
                </p>
              </div>
              <p className="text-gray-600 text-center">
                Cada prato é preparado diariamente, garantindo frescor e sabor incomparáveis
              </p>
            </div>

            {/* Nosso Compromisso */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-t-yellow-400">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" style={{ color: '#F15027' }} />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#342419' }}>Nosso Compromisso</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Qualidade e conforto em cada prato que servimos
                </p>
              </div>
              <p className="text-gray-600 text-center">
                Buscamos proporcionar uma experiência gastronômica moderna e inovadora
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/menu"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#F15027' }}
            >
              Experimente Nossos Pratos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#342419' }}>Nossas Lasanhas Especiais</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
              Conheça nossas lasanhas artesanais mais pedidas e descubra por que somos a escolha favorita da região
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold" style={{ color: '#F15027' }}>
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#342419' }}>{product.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: '#666666' }}>{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold" style={{ color: '#F15027' }}>
                      R$ {product.price.toFixed(2)}
                    </div>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-colors duration-200"
                    style={{ backgroundColor: '#F15027' }}
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/menu"
              className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-colors inline-flex items-center"
              style={{ backgroundColor: '#F15027' }}
            >
              Ver Cardápio Completo
            </Link>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#342419' }}>O Que Nossos Clientes Dizem</h2>
            <p className="text-xl" style={{ color: '#666666' }}>Depoimentos reais de quem já provou nossos sabores</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mb-6 italic leading-relaxed" style={{ color: '#666666' }}>"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold" style={{ color: '#342419' }}>{testimonial.name}</p>
                    <p className="text-sm text-gray-500">Cliente verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#FFFEFC' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F15027' fill-opacity='0.05'%3E%3Cpath d='M40 40c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ color: '#F15027' }}>
              <Flame className="w-4 h-4" style={{ color: '#F15027' }} />
              Experimente Agora
            </div>

            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span style={{ color: '#342419' }}>Pronto para uma Experiência</span>
              <br />
              <span style={{ color: '#F15027' }}>Gastronômica Única?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#666666' }}>
              Faça seu pedido agora e receba em casa os melhores sabores da região, 
              preparados com amor e técnicas tradicionais italianas
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/menu"
                className="inline-flex items-center gap-3 text-white px-10 py-5 rounded-full text-lg font-bold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-2xl"
                style={{ backgroundColor: '#F15027' }}
              >
                <ShoppingCart className="w-5 h-5" />
                Fazer Pedido Online
              </Link>
              
              <a 
                href="tel:1199999999"
                className="inline-flex items-center gap-3 border-2 px-10 py-5 rounded-full text-lg font-bold hover:text-white hover:scale-105 transition-all duration-300"
                style={{ 
                  borderColor: '#F15027',
                  color: '#F15027'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F15027';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#F15027';
                }}
              >
                <Phone className="w-5 h-5" />
                Ligar Agora: (11) 99999-9999
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;