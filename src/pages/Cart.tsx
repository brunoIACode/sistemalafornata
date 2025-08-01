import React, { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'money'
  });

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular processamento do pedido
    alert(`Pedido realizado com sucesso! 
    
Total: R$ ${state.total.toFixed(2)}
Tempo estimado: 30-45 minutos
    
Obrigado pela preferência!`);
    
    dispatch({ type: 'CLEAR_CART' });
    setIsCheckingOut(false);
    setCustomerInfo({
      name: '',
      phone: '',
      address: '',
      paymentMethod: 'money'
    });
  };

  const deliveryFee = state.total >= 50 ? 0 : 8.90;
  const finalTotal = state.total + deliveryFee;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-8" />
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#342419' }}>Seu carrinho está vazio</h2>
            <p className="text-xl mb-8" style={{ color: '#666666' }}>
              Que tal dar uma olhada no nosso delicioso cardápio?
            </p>
            <Link 
              to="/menu"
              className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-colors inline-flex items-center"
              style={{ backgroundColor: '#F15027' }}
            >
              Ver Cardápio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isCheckingOut) {
    return (
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => setIsCheckingOut(false)}
              className="flex items-center font-semibold hover:opacity-80"
              style={{ color: '#F15027' }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Carrinho
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#342419' }}>Finalizar Pedido</h2>
              
              <form onSubmit={handleCheckout} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ '--focus-ring-color': '#F15027' } as any}
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Endereço de Entrega *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Rua, número, complemento, bairro, CEP"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                    Forma de Pagamento *
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={customerInfo.paymentMethod}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                  >
                    <option value="money">Dinheiro</option>
                    <option value="credit">Cartão de Crédito</option>
                    <option value="debit">Cartão de Débito</option>
                    <option value="pix">PIX</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-colors flex items-center justify-center"
                  style={{ backgroundColor: '#F15027' }}
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Confirmar Pedido - R$ {finalTotal.toFixed(2)}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6" style={{ color: '#342419' }}>Resumo do Pedido</h3>
              
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold" style={{ color: '#342419' }}>{item.name}</h4>
                      <p className="text-sm" style={{ color: '#666666' }}>Qtd: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold" style={{ color: '#F15027' }}>
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">R$ {state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxa de Entrega:</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? 'GRÁTIS' : `R$ ${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-3" style={{ color: '#F15027' }}>
                  <span>Total:</span>
                  <span>R$ {finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center text-green-700 mb-2">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Tempo de Entrega</span>
                </div>
                <p className="text-sm text-green-600">30-45 minutos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: '#342419' }}>Seu Carrinho</h1>
          <p style={{ color: '#666666' }}>Revise seus itens antes de finalizar o pedido</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1" style={{ color: '#342419' }}>{item.name}</h3>
                    <p className="font-bold text-lg" style={{ color: '#F15027' }}>R$ {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full text-white flex items-center justify-center hover:opacity-80 transition-colors"
                      style={{ backgroundColor: '#F15027' }}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold mb-2" style={{ color: '#342419' }}>
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="hover:opacity-80 transition-colors"
                      style={{ color: '#F15027' }}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-8">
              <h3 className="text-xl font-bold mb-6" style={{ color: '#342419' }}>Resumo do Pedido</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">R$ {state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxa de Entrega:</span>
                  <span className="font-semibold">
                    {deliveryFee === 0 ? (
                      <span className="text-green-600">GRÁTIS</span>
                    ) : (
                      `R$ ${deliveryFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                {state.total < 50 && (
                  <div className="text-sm text-gray-500 bg-yellow-50 p-3 rounded-lg">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Frete grátis acima de R$ 50,00
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold border-t pt-3" style={{ color: '#F15027' }}>
                  <span>Total:</span>
                  <span>R$ {finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-colors mb-4"
                style={{ backgroundColor: '#F15027' }}
              >
                Finalizar Pedido
              </button>

              <Link 
                to="/menu"
                className="w-full border-2 py-3 rounded-lg font-semibold hover:opacity-80 transition-colors text-center block"
                style={{ borderColor: '#F15027', color: '#F15027' }}
              >
                Continuar Comprando
              </Link>

              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#FFF5F3' }}>
                <div className="flex items-center mb-2" style={{ color: '#F15027' }}>
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Tempo de Entrega</span>
                </div>
                <p className="text-sm" style={{ color: '#F15027' }}>30-45 minutos após confirmação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;