import { Link } from 'react-router-dom';
import { Col } from 'rsuite';

const CatergoryCard = ({ id, name, description }) => {
  return (
    <Col as={Link} to={`/category/${id}`} sm={24} md={12}>
      <h3>{name}</h3>
      <p>{description}</p>
    </Col>
  );
};

export default CatergoryCard;
