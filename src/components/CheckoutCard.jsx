import { Button, Loader } from 'rsuite';
import products from '../database/products.json';

const CheckoutCard = props => {
  const { id, quantity, price, handleIncreseCart, handleDecreseCart } = props;

  const name = products.find(data => data.id === id).name;

  if (name) {
    return (
      <tr>
        <th>{name}</th>
        <th>{quantity}</th>
        <th>{price}</th>
        <th>
          <Button appearance="primary" onClick={() => handleIncreseCart(id)}>
            +
          </Button>
          <span>{quantity}</span>
          <Button appearance="primary" onClick={() => handleDecreseCart(id)}>
            -
          </Button>
        </th>
      </tr>
    );
  }

  return (
    <>
      <Loader />
    </>
  );
};

export default CheckoutCard;
