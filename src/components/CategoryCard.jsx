import { Link } from 'react-router-dom';
import { Col } from 'rsuite';
import { motion } from 'framer-motion';

const CategoryCard = ({ id, name, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: 0.8,
        },
      }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Col
        as={Link}
        to={`/category/${id}`}
        xs={24}
        sm={24}
        md={24}
        lg={24}
        className="categories text-center p-lr-12"
      >
        <motion.div
          whileHover={{ translateY: '-20%' }}
          whileTap={{ translateY: '-20%' }}
        >
          <h3>{name}</h3>
          <p>{description}</p>
        </motion.div>
      </Col>
    </motion.div>
  );
};

export default CategoryCard;
