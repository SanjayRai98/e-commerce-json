import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import { Container, Divider, Row } from 'rsuite';
import NavLayout from './components/NavLayout';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';
import 'rsuite/dist/rsuite.min.css';
import { CartProvider } from './misc/cart.context';

function App() {
  return (
    <CartProvider>
      <Container>
        <Row>
          <NavLayout />
        </Row>
        <Divider />
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
