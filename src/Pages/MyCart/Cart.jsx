const Cart = ({ data, datas, setDatas }) => {
  const { _id, name, brand, type, rating, description, price, image } = data;
  return (
    <div>
      <div className="">
        <div className="flex space-x-5">
          <div>
            <img src={image} className="w-64 rounded" alt="" />
          </div>
          <div className="space-y-1 py-3">
            <button className="px-4 py-2 rounded">{type}</button>
            <h3 className="text-black font-bold text-xl">{name}</h3>
            <p className="text-lg font-semibold">{price}</p>
            <button className="rounded px-3 py-1 text-lg font-semibold text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
