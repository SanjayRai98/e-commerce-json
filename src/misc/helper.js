import { useEffect, useState } from 'react';
import { Message } from 'rsuite';

export const displayMessage = (type, msg) => {
  return (
    <Message showIcon type={type} closable>
      <strong>{msg}</strong>.
    </Message>
  );
};

export const useCartUpdates = () => {
  const [state, setState] = useState(() => {
    const persitedValue = localStorage.getItem('shoppingCart');

    return persitedValue ? JSON.parse(persitedValue) : [];
  });

  console.log('Inside useCartUpdates function');

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(state));
    console.log('in useEfect Hooks');
  }, [state]);

  return [state, setState];
};
