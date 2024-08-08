import { Link } from 'react-router-dom';
import categories from './../database/categories.json';

const Home = () => {
  console.log({ categories });

  return (
    <div>
      Home
      <Link to="/category/11">Go to category page</Link>
    </div>
  );
};

export default Home;
