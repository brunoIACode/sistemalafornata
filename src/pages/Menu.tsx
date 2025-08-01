import React, { useState } from 'react';
import { Star, Plus, Filter } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const { dispatch } = useCart();

  const categories = ['Todos', 'Lasanhas', 'Massas', 'Bebidas'];

  const products = [
    // Lasanhas
    {
      id: 7,
      name: "Lasanha Bolognese",
      description: "Massa fresca, molho bolognese artesanal, bechamel e queijos especiais",
      price: 28.90,
      image: "https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.9,
      category: "Lasanhas",
      popular: true
    },
    {
      id: 8,
      name: "Lasanha Quatro Queijos",
      description: "Massa fresca, molho branco e uma seleção de quatro queijos nobres",
      price: 32.90,
      image: "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      category: "Lasanhas"
    },
    {
      id: 9,
      name: "Lasanha de Frango",
      description: "Massa fresca, frango desfiado, molho branco e queijo gratinado",
      price: 29.90,
      image: "https://images.pexels.com/photos/5639451/pexels-photo-5639451.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.7,
      category: "Lasanhas"
    },
    {
      id: 10,
      name: "Lasanha Vegetariana",
      description: "Massa fresca, mix de vegetais, molho de tomate e queijos",
      price: 27.90,
      image: "https://images.pexels.com/photos/4198169/pexels-photo-4198169.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.6,
      category: "Lasanhas"
    },

    // Massas
    {
      id: 11,
      name: "Espaguete à Carbonara",
      description: "Massa al dente, bacon, ovos, parmesão e pimenta do reino",
      price: 24.90,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      category: "Massas"
    },
    {
      id: 12,
      name: "Penne ao Molho Pesto",
      description: "Penne al dente com molho pesto artesanal e parmesão",
      price: 22.90,
      image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.7,
      category: "Massas"
    },
    {
      id: 13,
      name: "Nhoque ao Sugo",
      description: "Nhoque artesanal com molho de tomate temperado e manjericão",
      price: 21.90,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.6,
      category: "Massas"
    },
    {
      id: 14,
      name: "Ravioli de Ricota",
      description: "Ravioli recheado com ricota e espinafre ao molho branco",
      price: 26.90,
      image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.8,
      category: "Massas"
    },

    // Bebidas
    {
      id: 15,
      name: "Refrigerante Lata",
      description: "Coca-Cola, Guaraná, Fanta - 350ml",
      price: 4.90,
      image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.5,
      category: "Bebidas"
    },
    {
      id: 16,
      name: "Suco Natural",
      description: "Laranja, Limão, Maracujá - 500ml",
      price: 8.90,
      image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.7,
      category: "Bebidas"
    },
    {
      id: 17,
      name: "Água Mineral",
      description: "Água mineral sem gás - 500ml",
      price: 3.90,
      image: "https://images.pexels.com/photos/327090/pexels-photo-327090.jpeg?auto=compress&cs=tinysrgb&w=500",
      rating: 4.3,
      category: "Bebidas"
    },


  ];

  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: any) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#342419' }}>Nosso Cardápio</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
            Descubra nossos sabores únicos, preparados com ingredientes frescos e receitas tradicionais
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'text-white'
                : 'bg-white hover:opacity-80'
              }`}
              style={{
                backgroundColor: selectedCategory === category ? '#F15027' : 'white',
                color: selectedCategory === category ? 'white' : '#342419'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {product.popular && (
                  <div className="absolute top-4 right-4 bg-yellow-400 px-3 py-1 rounded-full text-sm font-bold" style={{ color: '#F15027' }}>
                    Popular
                  </div>
                )}
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
                  className="w-full text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-colors duration-200 flex items-center justify-center"
                  style={{ backgroundColor: '#F15027' }}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#342419' }}>
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-500">
              Tente selecionar uma categoria diferente
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;