export function ProductNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1 className="px-4 py-4 t">New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="px-5">
          <div>
            Name: <input type="text" name="name" />
          </div>
          <div>
            Price: <input type="number" name="price" />
          </div>
          <div>
            Description: <input type="text" name="description" />
          </div>
          <div>
            Supplier ID: <input type="number" name="supplier_id" />
          </div>
          <div>
            Stock: <input type="number" name="in_stock" />
          </div>
          <button type="submit">Create Product</button>
        </div>
      </form>
    </div>
  );
}
