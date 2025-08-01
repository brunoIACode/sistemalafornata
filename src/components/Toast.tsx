import React, { useEffect } from 'react';
import { Check, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Toast = () => {
  const { state, dispatch } = useCart();
  const { notification } = state;

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        dispatch({ type: 'HIDE_NOTIFICATION' });
      }, 3000); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [notification, dispatch]);

  if (!notification) return null;

  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <Check className="w-5 h-5" />;
      case 'error':
        return <X className="w-5 h-5" />;
      default:
        return <ShoppingCart className="w-5 h-5" />;
    }
  };

  const getBackgroundColor = () => {
    switch (notification.type) {
      case 'success':
        return '#10B981'; // green-500
      case 'error':
        return '#EF4444'; // red-500
      default:
        return '#F15027'; // brand color
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div 
        className="flex items-center space-x-3 text-white px-6 py-4 rounded-lg shadow-lg max-w-md"
        style={{ backgroundColor: getBackgroundColor() }}
      >
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1">
          <p className="font-medium text-sm">{notification.message}</p>
        </div>
        <button
          onClick={() => dispatch({ type: 'HIDE_NOTIFICATION' })}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;