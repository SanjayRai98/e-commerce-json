import { useParams } from 'react-router-dom';

const Category = () => {
  const { categoryId } = useParams();

  return <div>Category {categoryId}</div>;
};

export default Category;
