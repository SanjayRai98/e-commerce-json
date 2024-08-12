import { Button, Loader } from 'rsuite';
import products from '../database/products.json';

const CheckoutCard = props => {
  const { id, quantity, price, handleIncreseCart, handleDecreseCart } = props;

  const name = products.find(data => data.id === id).name;

  if (name) {
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td className="flex">
          <div className="quantity-container">
            <Button appearance="primary" onClick={() => handleIncreseCart(id)}>
              +
            </Button>
            <span className="p-lr-12">{quantity}</span>
            <Button appearance="primary" onClick={() => handleDecreseCart(id)}>
              -
            </Button>
          </div>
        </td>
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
