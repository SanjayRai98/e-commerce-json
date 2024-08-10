import { Checkbox, CheckboxGroup, Row } from 'rsuite';

const FilterCategory = () => {
  const handleFilter = value => {
    console.log(`The filter value is ${value}`);
  };

  return (
    <div>
      FilterCategory
      <Row>
        <CheckboxGroup name="filter">
          <Checkbox value="inStock" onChange={handleFilter}>
            In Stock
          </Checkbox>
        </CheckboxGroup>
      </Row>
    </div>
  );
};

export default FilterCategory;
