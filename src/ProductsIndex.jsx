/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function ProductsIndex(props) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline">All Products</h1>
      <div className="grid grid-cols-3">
        {props.products.map((product) => (
          <div key={product.id}>
            <p>
              {product.images.map((image) => (
                <div key={image.id}>
                  <img src={image.url} alt="card image" />
                </div>
              ))}
            </p>
            <h2>{product.name}</h2>
            <img src="" />
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to="/products/:id">More Info</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
