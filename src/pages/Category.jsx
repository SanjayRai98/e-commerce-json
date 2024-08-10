import { useParams } from 'react-router-dom';
import products from '../database/products.json';
import { Col, Container, Row, useToaster } from 'rsuite';
import ProductCard from '../components/ProductCard';
import { displayMessage } from '../misc/helper';
import { useCart, useUpdateCart } from '../misc/cart.context';

const Category = () => {
  const { categoryId } = useParams();

  const filterCategory = products.filter(
    data => data.categoryId === categoryId
  );

  // console.log({ productsList: products, filterProduct: filterCategory });

  const cart = useCart();
  const setCart = useUpdateCart();

  const toaster = useToaster();

  console.log({ cart });

  const handleAddToCard = (id, price) => {
    const isInCart = cart.find(item => item.id === id);

    if (isInCart) {
      console.log('Inside if Statement');

      setCart(val =>
        val.map(data => {
          return data.id === id
            ? { ...data, quantity: data.quantity + 1 }
            : data;
        })
      );
    } else {
      console.log('Inside else statement');

      setCart(val => val.concat({ id, quantity: 1, price }));
    }

    toaster.push(
      displayMessage('info', `The item id is ${id} and the price is ${price}`),
      {
        placement: 'topCenter',
        duration: 4000,
      }
    );
  };

  return (
    <div>
      <h2>Category {categoryId}</h2>
      <Container>
        <Row>
          <Col as="ul">
            {filterCategory.map(data => (
              <ProductCard
                key={data.id}
                id={data.id}
                name={data.name}
                price={data.price}
                thumbnail={data.thumbnail}
                inStock={data.inStock}
                currency={data.currency}
                delivery={data.delivery}
                handleAddToCard={handleAddToCard}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
