import { Checkbox, CheckboxGroup, Row } from 'rsuite';

const FilterCategory = ({ handleFilter, displayedProduct, totalProduct }) => {
  return (
    <div>
      FilterCategory
      <Row>
        <CheckboxGroup name="filter">
          <Checkbox value="inStock" onChange={handleFilter}>
            In Stock
          </Checkbox>
          <Checkbox value="delivery" onChange={handleFilter}>
            Can Deliver
          </Checkbox>
          <Checkbox value="expensive" onChange={handleFilter}>
            Expensive ($100+)
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
