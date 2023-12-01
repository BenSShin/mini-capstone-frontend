/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function ProductsIndex(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src="" />
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <Link to="/products/:id">More Info</Link>
        </div>
      ))}
    </div>
  );
}
