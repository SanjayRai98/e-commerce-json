import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
      <Link to="/category/11">Go to category page</Link>
    </div>
  );
};

export default Home;
