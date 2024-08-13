import { Button, Loader } from 'rsuite';
import products from '../database/products.json';
import { motion } from 'framer-motion';

const CheckoutCard = props => {
  const { id, quantity, price, handleIncreseCart, handleDecreseCart } = props;

  const name = products.find(data => data.id === id).name;

  const animateVariant = {
    rotateClock: {
      rotate: '180deg',
    },
    rotateAntiClock: {
      rotate: '-180deg',
    },
  };

  if (name) {
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td className="flex">
          <div className="quantity-container flex">
            <motion.div
              variants={animateVariant}
              whileHover="rotateClock"
              whileTap="rotateClock"
              transition={{
                type: 'spring',
                mass: 0.6,
                duration: 0.8,
              }}
            >
              <Button
                appearance="primary"
                onClick={() => handleIncreseCart(id)}
              >
                +
              </Button>
            </motion.div>
            <span className="p-lr-12">{quantity}</span>
            <motion.div
              variants={animateVariant}
              whileHover="rotateAntiClock"
              whileTap="rotateAntiClock"
              transition={{
                type: 'spring',
                mass: 0.6,
                duration: 0.8,
              }}
            >
              <Button
                appearance="primary"
                onClick={() => handleDecreseCart(id)}
              >
                -
              </Button>
            </motion.div>
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
