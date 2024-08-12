import { Link } from 'react-router-dom';
import { Avatar, Container, Header, Nav, Navbar } from 'rsuite';
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
        <Navbar appearance="default">
          <Nav>
            <Nav.Item as={Link} to="/" className="text-md b-radius-15 home-nav">
              Home
            </Nav.Item>
          </Nav>

          <Nav pullRight>
            <Nav.Item
              as={Link}
              to="/checkout"
              className="flex p-0 p-lr-12 b-radius-15"
            >
              <Icon as={FaShoppingBag} size="26px" />
              <Avatar circle color="cyan" className="cart-value">
                {computeData.quantity}
              </Avatar>
              <div className="text-md">${computeData.price} </div>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Header>
    </Container>
  );
};

export default NavLayout;
