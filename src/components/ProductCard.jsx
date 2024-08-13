import { Button, Divider, Row } from 'rsuite';
import { motion } from 'framer-motion';
import { useRef } from 'react';

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
  const productScrollRef = useRef(null);

  return (
    <div ref={productScrollRef}>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        // onViewportEnter={() => console.log('viewport enter')}
        // onViewportLeave={() => console.log('Viewport Leave')}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 1.4,
          },
        }}
        viewport={{ root: productScrollRef }}
      >
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
      </motion.div>
    </div>
  );
};

export default ProductCard;
