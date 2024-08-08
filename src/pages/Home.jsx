import { Container, Row } from 'rsuite';
import CatergoryCard from '../components/CatergoryCard';
import categories from '../database/categories.json';

const Home = () => {
  return (
    <Container>
      <Row>
        {categories.map(data => (
          <CatergoryCard
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
