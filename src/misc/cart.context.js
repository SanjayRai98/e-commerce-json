import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
const UpdateCartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const persitedValue = localStorage.getItem('shoppingCart');

    return persitedValue ? JSON.parse(persitedValue) : [];
  });

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    console.log('in useEfect Hooks');
  }, [cart]);

  return (
    <UpdateCartContext.Provider value={setCart}>
      <CartContext.Provider value={cart}>{children}</CartContext.Provider>
    </UpdateCartContext.Provider>
  );
};

export const useUpdateCart = () => useContext(UpdateCartContext);
export const useCart = () => useContext(CartContext);
