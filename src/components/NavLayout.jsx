import { Link } from 'react-router-dom';
import { Container, Header, Nav, Navbar } from 'rsuite';
import { useCart } from '../misc/cart.context';
import { Icon } from '@rsuite/icons';
import { FaShoppingBag } from 'react-icons/fa';

const NavLayout = () => {
  const cart = useCart();

  const computeData = cart.reduce(
    (accumulator, currentItem) => {
      return {
        quantity: accumulator.quantity + currentItem.quantity,
        price: accumulator.price + currentItem.price * currentItem.quantity,
      };
    },
    { quantity: 0, price: 0 }
  );

  return (
    <Container>
      <Header>
        <Navbar appearance="inverse">
          <Nav>
            <Nav.Item as={Link} to="/">
              Home
            </Nav.Item>
          </Nav>

          <Nav pullRight>
            <Nav.Item as={Link} to="/checkout">
              <Icon as={FaShoppingBag} size="2em" />
              <span>{computeData.quantity}</span>
              <span>${computeData.price} </span>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Header>
    </Container>
  );
};

export default NavLayout;
