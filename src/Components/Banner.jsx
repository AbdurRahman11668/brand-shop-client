import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:px-20 bg-[#F9F1D8] pb-10 md:pb-0">
      <div className="hero lg:pl-10">
        <div className="hero-content text-center lg:text-start flex-col pb-0 lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/3dfwcYp/ezgif-com-webp-to-jpg-removebg.png"
            className="max-w-md md:max-w-lg lg:max-w-2xl lg:ml-32"
          />
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold mb-5 text-red-600">WONDERFUL <br />
            PERFORMANCE</h1>
            <p className="text-md md:text-xl font-bold text-gray-500">
            Changing the way you Live and Work
          </p>
          <Link to="/addproducts">
            <button className="btn rounded-full font-bold bg-transparent border-red-600 text-red-600 px-10 mt-10 hover:bg-red-600 hover:text-white">
              DISCOVER NOW
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
