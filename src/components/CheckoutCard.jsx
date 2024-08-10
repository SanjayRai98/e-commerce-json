import { Loader } from 'rsuite';
import products from '../database/products.json';

const CheckoutCard = props => {
  const { id, quantity, price } = props;

  const name = products.find(data => data.id === id).name;

  if (name) {
    return (
      <tr>
        <th>{name}</th>
        <th>{quantity}</th>
        <th>{price}</th>
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
