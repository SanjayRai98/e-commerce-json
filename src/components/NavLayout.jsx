import { Link } from 'react-router-dom';
import { Container, Header, Nav, Navbar } from 'rsuite';

const NavLayout = () => {
  return (
    <Container>
      <Header>
        <Navbar appearance="inverse">
          <Nav>
            <Nav.Item>
              <Link to="/">Home</Link>
            </Nav.Item>
          </Nav>

          <Nav pullRight>
            <Nav.Item>
              <Link to="/checkout">Checkout</Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Header>
    </Container>
  );
};

export default NavLayout;
