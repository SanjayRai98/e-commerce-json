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
  return (
    <Row as="li" className="product">
      <h4>{name}</h4>
      <Divider />
      <div className="img-wrapper">
        <img src={thumbnail} alt={name}></img>
      </div>
      <p>
        <span className="text-bold">Price : </span>
        <span>{currency === 'USD' ? `$ ${price}` : `${price}`}</span>
      </p>
      <p>
        <span className="text-bold">Stock : </span>
        <span className={inStock ? 'green' : 'red'}>
          {inStock ? 'Available' : 'Out of Stock'}
        </span>
      </p>
      <p className="mb-15">
        <span className="text-bold">Delivery to Your Location : </span>

        <span className={delivery ? 'green' : 'red'}>
          {delivery ? 'Yes' : 'No'}
        </span>
      </p>
      <Button
        appearance="primary"
        onClick={() => handleAddToCard(id, price, name)}
      >
        Add to Cart
      </Button>
    </Row>
  );
};

export default ProductCard;
