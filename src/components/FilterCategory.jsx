import { Checkbox, CheckboxGroup, Row } from 'rsuite';

const FilterCategory = ({
  handleFilter,
  filterValue,
  displayedProduct,
  totalProduct,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default FilterCategory;
