import { Link } from 'react-router-dom';

const Nav = () => (

  <nav>
    <h2 className="logo">Bookstore CMS</h2>
    <div className="NavLinks">
      <Link to="/" className="link">BOOKS</Link>
      <Link to="/categories" className="link">CATEGORIES</Link>
    </div>
  </nav>
);
export default Nav;
