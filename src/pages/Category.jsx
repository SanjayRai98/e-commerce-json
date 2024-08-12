import { useParams } from 'react-router-dom';
import products from '../database/products.json';
import { Col, Container, Row, useToaster } from 'rsuite';
import ProductCard from '../components/ProductCard';
import { displayMessage } from '../misc/helper';
import { useCart, useUpdateCart } from '../misc/cart.context';
import FilterCategory from '../components/FilterCategory';
import { useState } from 'react';
import categories from '../database/categories.json';

const Category = () => {
  const { categoryId } = useParams();

  const currentCategory = categories.filter(data => data.id === categoryId);

  const cart = useCart();
  const setCart = useUpdateCart();

  const toaster = useToaster();

  const [originalFilterProducts] = useState(() => {
    const productData = products.filter(data => data.categoryId === categoryId);

    return productData ? productData : [];
  });

  const [filterValue, setFilterValue] = useState({
    inStock: false,
    delivery: false,
    expensive: false,
  });

  const applyFilter = () => {
    let result = originalFilterProducts;

    if (filterValue.inStock) {
      result = result.filter(data => data.inStock === true);
    }

    if (filterValue.delivery) {
      result = result.filter(data => data.delivery === true);
    }

    if (filterValue.expensive) {
      result = result.filter(data => data.price >= 100);
    }

    return result;
  };

  const filterCategory = applyFilter();

  const handleAddToCard = (id, price, name) => {
    const isInCart = cart.find(item => item.id === id);

    if (isInCart) {
      setCart(val =>
        val.map(data => {
          return data.id === id
            ? { ...data, quantity: data.quantity + 1 }
            : data;
        })
      );
    } else {
      setCart(val => val.concat({ id, quantity: 1, price }));
    }

    toaster.push(displayMessage('info', `${name} added to Cart`), {
      placement: 'topCenter',
      duration: 4000,
    });
  };

  const handleFilter = (value, isChecked) => {
    switch (value) {
      case 'inStock':
        isChecked
          ? setFilterValue(val => {
              return {
                ...val,
                inStock: (val.inStock = true),
              };
            })
          : setFilterValue(val => {
              return {
                ...val,
                inStock: (val.inStock = false),
              };
            });
        break;

      case 'delivery':
        isChecked
          ? setFilterValue(val => {
              return {
                ...val,
                delivery: (val.delivery = true),
              };
            })
          : setFilterValue(val => {
              return {
                ...val,
                delivery: (val.delivery = false),
              };
            });
        break;

      case 'expensive':
        isChecked
          ? setFilterValue(val => {
              return {
                ...val,
                expensive: (val.expensive = true),
              };
            })
          : setFilterValue(val => {
              return {
                ...val,
                expensive: (val.expensive = false),
              };
            });
        break;

      default:
        break;
    }
  };

  return (
    <Container className="p-lr-30">
      <Row>
        <Col className="filter-container">
          <FilterCategory
            handleFilter={handleFilter}
            filterValue={filterValue}
            displayedProduct={filterCategory.length}
            totalProduct={originalFilterProducts.length}
          />
        </Col>
        <Col
          as="ul"
          sm={24}
          md={16}
          lg={16}
          className="products-container text-center"
        >
          <h2 className="mb-35">{currentCategory[0].name}</h2>
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
  );
};

export default Category;
