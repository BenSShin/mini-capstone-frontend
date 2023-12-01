/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function ProductsIndex(props) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold underline my-6 space-x-3">All Products</h1>
      <div className="md:z-20 grid grid-cols-3 gap-3 mx-3">
        {props.products.map((product) => (
          <div className="font-serif bg-[#ffd14a] rounded-md" key={product.id}>
            <div className="space-y-2 py-4">
              {product.images.map((image) => (
                <div key={image.id}>
                  <div className="flex flex-col items-center">
                    <img className="max-w-[90%] border-2 border-black rounded-md " src={image.url} alt="card image" />
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="font-mono">Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <div className="flex flex-col items-center my-4">
              <div className="max-w-[50%] text-[#f2ecbe] border-2 border-[#f2ecbe] rounded p-0.5 bg-[#c08261] hover:bg-[#f2ecbe] hover:text-[#c08261] hover:duration-200">
                <Link to="/products/:id">Product Info</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
