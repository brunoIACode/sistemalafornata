import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para atender você! Entre em contato conosco para fazer seu pedido, 
              tirar dúvidas ou enviar sugestões
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telefone</h3>
              <p className="text-gray-600 mb-2">(11) 99999-9999</p>
              <p className="text-sm text-gray-500">WhatsApp disponível</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">E-mail</h3>
              <p className="text-gray-600 mb-2">contato@fornodelivery.com.br</p>
              <p className="text-sm text-gray-500">Respondemos em até 2h</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Endereço</h3>
              <p className="text-gray-600 mb-2">Rua das Pizzas, 123</p>
              <p className="text-sm text-gray-500">Vila Italiana - São Paulo/SP</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Horário</h3>
              <p className="text-gray-600 mb-2">Segunda a Domingo</p>
              <p className="text-sm text-gray-500">18:00 às 23:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Envie sua Mensagem</h2>
                <p className="text-gray-600">
                  Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="pedido">Fazer Pedido</option>
                    <option value="duvida">Dúvida sobre Produto</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="elogio">Elogio</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossa Localização</h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Mapa Interativo</p>
                    <p className="text-sm">Rua das Pizzas, 123 - Vila Italiana</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Rua das Pizzas, 123 - Vila Italiana, São Paulo/SP</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Segunda a Domingo: 18:00 às 23:00</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contato Rápido</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:1199999999"
                    className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <div className="bg-green-500 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Ligar Agora</p>
                      <p className="text-sm text-gray-600">(11) 99999-9999</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <div className="bg-green-500 p-3 rounded-full mr-4">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                      <p className="text-sm text-gray-600">Atendimento rápido</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:contato@fornodelivery.com.br"
                    className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="bg-blue-500 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">E-mail</p>
                      <p className="text-sm text-gray-600">contato@fornodelivery.com.br</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600">Encontre respostas para as dúvidas mais comuns</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Qual o tempo de entrega?</h3>
              <p className="text-gray-600">Nosso tempo médio de entrega é de 30 minutos, podendo variar conforme a distância e demanda.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Vocês entregam em toda São Paulo?</h3>
              <p className="text-gray-600">Atendemos toda a região da Vila Italiana e bairros próximos. Consulte nossa área de entrega pelo telefone.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Quais formas de pagamento vocês aceitam?</h3>
              <p className="text-gray-600">Aceitamos dinheiro, cartão de débito/crédito, PIX e principais carteiras digitais.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Posso fazer pedidos personalizados?</h3>
              <p className="text-gray-600">Sim! Entre em contato conosco para pedidos especiais ou adaptações nos pratos do cardápio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;