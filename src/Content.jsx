import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductNew } from "./ProductNew";
import { Login } from "./LogIn";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./SignUp";
import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { ProductsShow } from "./ProductsShow";
import { useParams } from "react-router-dom";

export function Content() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const params = useParams();

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleShowProduct = () => {
    axios.get(`http://localhost:3000/products/${params.id}.json`).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  };

  const handleCreateProduct = (params, successCallBack) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallBack();
    });
  };

  useEffect(handleIndexProducts, []);
  useEffect(handleShowProduct);

  return (
    <div>
      <h1>Welcome!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/new" element={<ProductNew onCreateProduct={handleCreateProduct} />} />
        <Route path="/products" element={<ProductsIndex products={products} />} />
        <Route path="/products/:id" element={<ProductsShow product={product} />} />
      </Routes>
      <LogoutLink />
    </div>
  );
}
