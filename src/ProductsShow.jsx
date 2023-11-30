/* eslint-disable react/prop-types */
export function ProductsShow(props) {
  return (
    <div>
      <h1>Product Information</h1>
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Stock: {props.product.in_stock}</p>
      <p>Description: {props.product.description}</p>
      <p>Supplier ID: {props.product.supplier_id}</p>
    </div>
  );
}
