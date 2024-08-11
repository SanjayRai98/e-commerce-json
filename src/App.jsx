import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import { Container, Divider, Row } from 'rsuite';
import NavLayout from './components/NavLayout';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import 'rsuite/dist/rsuite.min.css';
import { CartProvider } from './misc/cart.context';
import './styles/styles.css';
import './styles/common.css';

function App() {
  return (
    <CartProvider>
      <Container className="main-container">
        <Row className="fixed hw-100 w-80">
          <NavLayout />
        </Row>
        <Divider className="mt-10" />
        <Row>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Row>
      </Container>
    </CartProvider>
  );
}

export default App;
