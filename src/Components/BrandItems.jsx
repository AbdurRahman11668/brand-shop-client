
import { Link } from "react-router-dom";

const BrandItems = () => {

  return (
    <div className="px-10 md:px-20 py-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-16 flex-wrap items-center py-5 justify-center">
        <Link to="/apple">
          <div className="text-center w-full h-40 md:h-48 px-5 lg:px-0">
            <div className="mb-5">
              <img
                src="https://i.ibb.co/Jyjb5pt/apple-antitrust.jpg"
                className="w-72 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Apple</h2>
            </div>
          </div>
        </Link>
        <Link to="/samsung">
          <div className="text-center w-full h-40 md:h-48 px-5 lg:px-0">
            <div className="mb-5">
              <img
                src="https://i.ibb.co/nwBb5ZW/samsung.jpg"
                className="w-72 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Samsung</h2>
            </div>
          </div>
        </Link>
        <Link to="/sony">
          <div className="text-center w-full h-40 md:h-48 px-5 lg:px-0">
            <div className="mb-5">
              <img
                src="https://i.ibb.co/JFn5gpD/Sony-Xperia.jpg"
                className="w-72 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Sony</h2>
            </div>
          </div>
        </Link>
        <Link to="/xiaomi">
          <div className="text-center w-full h-40 md:h-48 px-5 lg:px-0">
            <div className="mb-5">
              <img
                src="https://i.ibb.co/ZBHz2hs/6135aec6a310e.jpg"
                className="w-72 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Xiaomi</h2>
            </div>
          </div>
        </Link>
        <Link to="/microsoft">
          <div className="text-center w-full h-40 md:h-48 px-5 lg:px-0">
            <div className="mb-5">
              <img
                src="https://i.ibb.co/kDqv9Wb/653253.webp"
                className="w-72 mx-auto"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg md:text-3xl font-bold">Microsoft</h2>
            </div>
          </div>
        </Link>
        <Link to="/google">
          <div className="text-center w-full h-40 md:h-48 px-5 lg:px-0">
            <div className="mb-5">
              <img
                src="https://i.ibb.co/cCWW0pN/google-stock-jpeg.webp"
                className="w-72 mx-auto"
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
