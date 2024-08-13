import { Checkbox, CheckboxGroup, Row } from 'rsuite';
import { motion } from 'framer-motion';

const FilterCategory = ({
  handleFilter,
  filterValue,
  displayedProduct,
  totalProduct,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{
        opacity: 1,
        x: 1,
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: 1.4,
        },
      }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <h3 className="text-center">Filter</h3>
      <Row>
        <CheckboxGroup name="filter">
          <Checkbox value="inStock" onChange={handleFilter}>
            <span className={filterValue.inStock ? 'green' : 'grey'}>
              In Stock
            </span>
          </Checkbox>
          <Checkbox value="delivery" onChange={handleFilter}>
            <span className={filterValue.delivery ? 'green' : 'grey'}>
              Can Deliver
            </span>
          </Checkbox>
          <Checkbox value="expensive" onChange={handleFilter}>
            <span className={filterValue.expensive ? 'green' : 'grey'}>
              Expensive ($100+)
            </span>
          </Checkbox>
        </CheckboxGroup>
      </Row>
      <Row>
        <div>
          Showing {displayedProduct} out of {totalProduct}
        </div>
      </Row>
    </motion.div>
  );
};

export default FilterCategory;
