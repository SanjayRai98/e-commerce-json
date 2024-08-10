import { Col, Container, Divider, Row } from 'rsuite';
import { useCart } from '../misc/cart.context';
import CheckoutCard from '../components/CheckoutCard';

const Checkout = () => {
  const cart = useCart();

  console.log(cart);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Checkout</h2>
        </Col>
      </Row>
      <Divider />
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
              />
            ))}
          </tbody>
        </table>
      </Row>
    </Container>
  );
};

export default Checkout;
