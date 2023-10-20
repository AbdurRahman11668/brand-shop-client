
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const SamsungCard = ({ product}) => {
    const { _id, name, brand, rating, type, description, price, image } = product;

    const ratings = 0;
    return (
        <div className="">
      <div className="">
        <div className="card-side bg-gray-100 shadow-md h-[580px] px-10 rounded-lg">
          <figure className="w-full py-5">
            <img className="w-2/3 mx-auto" src={image} alt="Movie" />
          </figure>
          <div className="flex justify-between w-full pr-5">
            <div className="space-y-2">
              <h2 className="card-title text-red-600 text-2xl font-bold">
                {name}
              </h2>
              <p className="text-xl font-semibold">{brand}</p>
              <p className="text-lg font-semibold">
                Type: <span className="text-red-700">{type}</span>
              </p>
              <div className="flex space-x-1">
                {Array.from({ length: rating }).map((_, index) => (
                  <FaStar
                    key={index}
                    color={index < ratings ? "gray" : "orange"}
                    className="text-lg"
                  />
                ))}
              </div>
              <p className="text-md font-semibold text-gray-600 pb-2">
                {description}
              </p>
              <p className="text-md font-semibold text-gray-600 pb-2">
                {price}
              </p>
              <div className="space-x-10">
                <Link to={`/samsung/${_id}`}>
                  <button className="text-lg px-5 font-semibold btn bg-red-600 text-white hover:border-red-600 hover:text-red-600">
                    Details
                  </button>
                </Link>
                <Link to={`http://localhost:5173/updateproducts/${_id}`}>
                  <button className="text-lg px-5 font-semibold btn bg-red-600 text-white hover:border-red-600 hover:text-red-600">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SamsungCard;