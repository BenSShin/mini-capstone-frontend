import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#home">Home</a> | <Link to="/products">Products</Link>
      </nav>
    </header>
  );
}
