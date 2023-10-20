
import { Link } from "react-router-dom";

const BrandItems = () => {

  return (
    <div className="px-20 py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-16 flex-wrap items-center py-5 justify-center">
        <Link to="/apple">
          <div className="bg-white text-center border rounded-lg w-full h-40 md:h-48 shadow-xl px-5 lg:px-0">
            <div className="mb-5">
              <img
                src="https://i.ibb.co/QDHyx8V/apple.png"
                className="w-24 md:w-28 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Apple</h2>
            </div>
          </div>
        </Link>
        <Link to="/samsung">
          <div className="bg-white text-center border rounded-md w-full h-40 md:h-48 shadow-xl px-5 lg:px-0">
            <div className="mt-11 mb-10">
              <img
                src="https://i.ibb.co/hMrmKNM/samsung.png"
                className="w-60 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Samsung</h2>
            </div>
          </div>
        </Link>
        <Link to="/sony">
          <div className="bg-white text-center border rounded-md w-full h-40 md:h-48 shadow-xl px-5 lg:px-0">
            <div className="mt-10 mb-10">
              <img
                src="https://i.ibb.co/FsG5Zkg/sony.png"
                className="w-60 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Sony</h2>
            </div>
          </div>
        </Link>
        <Link to="/xiaomi">
          <div className="bg-white text-center border rounded-md w-full h-40 md:h-48 shadow-xl px-5 lg:px-0">
            <div className="mt-10 mb-10">
              <img
                src="https://i.ibb.co/n0KhM7X/xiaomi.png"
                className="w-44 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Xiaomi</h2>
            </div>
          </div>
        </Link>
        <Link to="/microsoft">
          <div className="bg-white text-center border rounded-md w-full h-40 md:h-48 shadow-xl px-5 lg:px-0">
            <div className="mt-12 mb-10">
              <img
                src="https://i.ibb.co/vwJhPS9/microsoft.png"
                className="w-56 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Microsoft</h2>
            </div>
          </div>
        </Link>
        <Link to="/google">
          <div className="bg-white text-center border rounded-md w-full h-40 md:h-48 shadow-xl px-5 md:px-0">
            <div className="mt-10 mb-10">
              <img
                src="https://i.ibb.co/rM8RsSy/google.png"
                className="w-40 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Google</h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BrandItems;
