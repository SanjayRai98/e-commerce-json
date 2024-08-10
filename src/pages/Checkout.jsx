import { Col, Container, Divider, Row } from 'rsuite';
import { useCart, useUpdateCart } from '../misc/cart.context';
import CheckoutCard from '../components/CheckoutCard';

const Checkout = () => {
  const cart = useCart();
  const setcart = useUpdateCart();

  const isCartEmpty = cart.length == 0 ? true : false;

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
        <Col>
          <h2>Checkout</h2>
        </Col>
      </Row>
      <Divider />
      {!isCartEmpty && (
        <Row>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
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
                <td colSpan="3">{`Total ${totalPrice}`}</td>
              </tr>
            </tfoot>
          </table>
        </Row>
      )}
    </Container>
  );
};

export default Checkout;
