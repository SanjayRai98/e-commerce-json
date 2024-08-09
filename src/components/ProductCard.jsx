import { Button, Divider, Row } from 'rsuite';

const ProductCard = ({
  id,
  name,
  price,
  thumbnail,
  inStock,
  currency,
  delivery,
  handleAddToCard,
}) => {
  // const [cart, setCart] = useCartUpdates();

  return (
    <Row as="li">
      <h4>{name}</h4>
      <Divider />
      <div>
        <img src={thumbnail} alt={name}></img>
      </div>
      <p>Price : {currency === 'USD' ? `$ ${price}` : `${price}`}</p>
      <p>Stock : {inStock ? 'Available' : 'Out of Stock'}</p>
      <p>Delivery to Your Location : {delivery ? 'Yes' : 'No'}</p>
      <Button appearance="primary" onClick={() => handleAddToCard(id, price)}>
        Add to Cart
      </Button>
    </Row>
  );
};

export default ProductCard;
