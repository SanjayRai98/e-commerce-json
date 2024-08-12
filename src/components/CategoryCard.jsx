import { Link } from 'react-router-dom';
import { Col } from 'rsuite';

const CategoryCard = ({ id, name, description }) => {
  return (
    <Col
      as={Link}
      to={`/category/${id}`}
      xs={24}
      sm={24}
      md={24}
      lg={24}
      className="categories text-center p-lr-12"
    >
      <h3>{name}</h3>
      <p>{description}</p>
    </Col>
  );
};

export default CategoryCard;
