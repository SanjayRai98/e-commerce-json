import { Container, Row } from 'rsuite';
import CategoryCard from '../components/CategoryCard';
import categories from '../database/categories.json';

const Home = () => {
  return (
    <Container>
      <Row className="p-lr-10">
        {categories.map(data => (
          <CategoryCard
            key={data.id}
            id={data.id}
            name={data.name}
            description={data.description}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Home;
