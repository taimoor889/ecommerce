import React, { useState } from 'react';
import { useCart } from '../context/CardContext';

const Cart = () => {
  const { cardItems,increaseQuantity,decreaseQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative p-4 mt-4">
      {/* Cart icon */}
      <button
        onClick={toggleCart}
        className="text-xl font-bold relative"
      >
        🛒
        <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full px-1">
          {cardItems.length}
        </span>
      </button>

      {/* Conditional cart content */}
      {isOpen && (
        <div className="mt-4 p-4 bg-white border  border-zinc-300 rounded shadow-lg w-64 absolute right-0 z-10">
          {cardItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <ul className="space-y-2">
              {cardItems.map((item, idx) => (
                <li key={idx} className="flex justify-between">
                   <div>
              <h2>{item.name}</h2>
              <p className="text-sm text-gray-600">${item.price} × {item.quantity} = <strong>{(item.price*item.quantity).toFixed(2)}</strong></p>
            </div>
               <div className="flex items-center gap-2">
              <button onClick={() => decreaseQuantity(item.id)} className="px-2 bg-gray-300 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)} className="px-2 bg-gray-300 rounded">+</button>
            </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
