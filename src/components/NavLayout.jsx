import { Link } from 'react-router-dom';
import { Avatar, Container, Header, Nav, Navbar } from 'rsuite';
import { useCart } from '../misc/cart.context';
import { Icon } from '@rsuite/icons';
import { FaShoppingBag } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 5,
            transition: {
              type: 'spring',
              bounce: 0.4,
              duration: 0.8,
            },
          }}
          viewport={{ once: true }}
        >
          <Navbar appearance="default">
            <Nav>
              <Nav.Item
                as={Link}
                to="/"
                className="text-md b-radius-15 home-nav"
              >
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
        </motion.div>
      </Header>
    </Container>
  );
};

export default NavLayout;
