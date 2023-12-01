import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-[#d4fafc] p-4">
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link>
      </nav>
    </header>
  );
}
