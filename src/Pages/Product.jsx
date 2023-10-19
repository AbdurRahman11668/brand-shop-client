

const AddProduct = ({ product, products, setProducts }) => {
  const { _id, name, brand_name, type, description, price, image } = product;

  return (
    <div>
      <div className="">
        <div className="card-side bg-base-100 shadow-xl h-[450px]">
          <figure className="w-full">
            <img className="w-2/3 mx-auto" src={image} alt="Movie" />
          </figure>
          <div className="flex justify-between w-full pr-5">
            <div>
              <h2 className="card-title">Name: {name}</h2>
              <p>{brand_name}</p>
              <p>{type}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
