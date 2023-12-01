export function ProductNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    props.onCreateProduct(params, () => event.target.reset());
  };

  return (
    <div>
      <h1 className="px-[10%] py-4 text-lg font-bold font-serif ">New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 pl-[15%]">
          <div className="my-3">
            <p>Name</p>
            <input
              className="rounded placeholder:px-px bg-slate-300 border-2 border-black"
              type="text"
              name="name"
              placeholder="  Name"
            />
          </div>
          <div className="my-3">
            <p>Price</p>
            <input
              className="rounded placeholder:px-px bg-slate-300  border-2 border-black"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="my-3">
            <p>Supplier ID</p>
            <input
              className="rounded placeholder:px-px bg-slate-300 border-2 border-black"
              type="number"
              name="supplier_id"
              placeholder="Supplier ID"
            />
          </div>
          <div className="my-3">
            <p>Stock</p>
            <input
              className="rounded placeholder:px-px bg-slate-300 border-2 border-black"
              type="number"
              name="in_stock"
              placeholder="Stock"
            />
          </div>
          <div className="my-3">
            <p>Description:</p>
            <input
              className="rounded placeholder:px-px bg-slate-300 border-2 border-black"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="w-full h-full row-start-4 mt-10">
            <button
              className="py-2 px-2 text-[#f2ecbe] border-2 border-[#f2ecbe] rounded p-0.5 bg-[#c08261] hover:bg-[#f2ecbe] hover:text-[#c08261] hover:duration-200 text-sm"
              type="submit"
            >
              Create Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
