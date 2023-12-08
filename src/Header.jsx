import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header className="bg-[#e2c799] rounded-b-lg p-4">
      <nav>
        {localStorage.jwt === undefined ? (
          <>
            <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
            <Link to="/products/new">New Product</Link> | <Link to="/login">Login</Link> |{" "}
            <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
            <Link to="/products/new">New Product</Link> | <LogoutLink />
          </>
        )}
      </nav>
    </header>
  );
}
