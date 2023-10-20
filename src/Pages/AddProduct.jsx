import Swal from "sweetalert2";
const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const price = form.price.value;
    const image = form.image.value;

    const newProduct = {
      name,
      brand,
      type,
      rating,
      description,
      price,
      image,
    };
    console.log(newProduct);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#f4f4f0] px-24 py-10 ">
      <div className="md:w-2/3 mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10">
          Add Product
        </h2>
        <form className="" onSubmit={handleAddProduct}>
          {/* Form name & brand name row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 mb-5 md:mb-0">
              <label className="label">
                <span className="label-text font-bold">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="Text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-bold">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* Form Description & Rating row  */}
          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2">
              <div className="form-control w-full mb-5 md:mb-0">
                <label className="label">
                  <span className="label-text font-bold">Description</span>
                </label>
                <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
              </div>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Rating</span>
              </label>
              <select
                name="rating"
                className="select select-ghost w-full max-w-xs"
              >
                <option className=" font-bold">
                  Choose the Rating you want to give this product!
                </option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
          </div>
          {/* Form type & price row  */}
          <div className="md:flex mb-8 ">
            <div className="form-control md:w-1/2 mb-5 md:mb-0">
              <label className="label">
                <span className="label-text font-bold">Type</span>
              </label>
              <select
                name="type"
                className="select select-ghost w-full max-w-xs"
              >
                <option className=" font-bold">
                  Choose the types of product you want to add!
                </option>
                <option>SmartPhone</option>
                <option>Laptop</option>
                <option>Desktop</option>
                <option>Headphones</option>
                <option>Ipad</option>
                <option>SmartWatch</option>
                <option>Smart TV</option>
              </select>
            </div>
            <div className="form-control md:w-1/2">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* form image url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* Submit Button */}
          <input
            type="submit"
            value="Add New Product"
            className="btn btn-block hover:text-red-600 text-white bg-red-600 font-semibold"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
