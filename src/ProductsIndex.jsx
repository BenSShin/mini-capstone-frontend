/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function ProductsIndex(props) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline my-6">All Products</h1>
      <div className="grid grid-cols-3 space-x-3 mx-3 font-serif bg-[ffd14a]">
        {props.products.map((product) => (
          <div key={product.id}>
            <div className="space-y-2 py-4 cotent-center">
              {product.images.map((image) => (
                <div key={image.id}>
                  <img className="max-w-[90%] border-2 border-black rounded-md" src={image.url} alt="card image" />
                </div>
              ))}
            </div>
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="font-mono">Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link
              className="max-w-[50%] text-[#f2ecbe] border-2 border-[#f2ecbe] rounded p-0.5 bg-[#c08261] hover:bg-[#f2ecebe] active:bg-violet-700"
              to="/products/:id"
            >
              Product Info
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
