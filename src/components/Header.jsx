import {Link} from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">A propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;