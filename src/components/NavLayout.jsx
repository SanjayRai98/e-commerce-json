import { Link } from 'react-router-dom';
import { Container, Header, Nav, Navbar } from 'rsuite';

const NavLayout = () => {
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
              Checkout
            </Nav.Item>
          </Nav>
        </Navbar>
      </Header>
    </Container>
  );
};

export default NavLayout;
