import { Col, Container, Divider, Row, useToaster } from 'rsuite';
import { useCart, useUpdateCart } from '../misc/cart.context';
import CheckoutCard from '../components/CheckoutCard';
import { displayMessage } from '../misc/helper';
import { motion } from 'framer-motion';

const Checkout = () => {
  const cart = useCart();
  const setcart = useUpdateCart();

  const toaster = useToaster();

  const isCartEmpty = cart.length == 0 ? true : false;

  const displayEmptyAlt = () => {
    if (isCartEmpty) {
      toaster.push(displayMessage('warning', 'Cart is Empty'), {
        placement: 'topCenter',
        duration: 5000,
      });
    }
  };

  const totalPrice = cart.reduce((accumulator, currData) => {
    return accumulator + currData.quantity * currData.price;
  }, 0);

  const handleIncreseCart = id => {
    setcart(val =>
      val.map(data => {
        return data.id === id ? { ...data, quantity: data.quantity + 1 } : data;
      })
    );
  };

  const handleDecreseCart = id => {
    const currentItem = cart.find(data => data.id === id);

    if (currentItem.quantity === 1) {
      setcart(val => val.filter(data => data.id !== id));
    } else {
      setcart(val =>
        val.map(data => {
          return data.id === id
            ? { ...data, quantity: data.quantity - 1 }
            : data;
        })
      );
    }
  };

  return (
    <Container>
      <Row>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 1,
            },
          }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-center">Checkout</h3>
        </motion.div>
      </Row>
      <Divider />
      {!isCartEmpty && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 1,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <Row className="flex mt-10">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(data => (
                  <CheckoutCard
                    key={data.id}
                    id={data.id}
                    quantity={data.quantity}
                    price={data.price}
                    handleIncreseCart={handleIncreseCart}
                    handleDecreseCart={handleDecreseCart}
                  />
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">
                    <div className="total-price rs-text-right rs-text-bold rs-text-uppercase">
                      <span className="gray">Total : </span>
                      <span>{`$${totalPrice}`}</span>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </Row>
        </motion.div>
      )}
      {isCartEmpty && (
        <Row>
          <Col className="hw-100 rs-text-center red text-lg rs-anim-bounce-in">
            {displayEmptyAlt()}
            <strong>No items in Added to Cart !</strong>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Checkout;
