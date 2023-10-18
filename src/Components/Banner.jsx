import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="lg:px-20">
      <div className="hero">
        <div className="hero-content text-center lg:text-start flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/3dfwcYp/ezgif-com-webp-to-jpg-removebg.png"
            className="max-w-xl lg:max-w-3xl lg:ml-32"
          />
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold mb-5 text-red-600">WONDERFUL <br />
            PERFORMANCE</h1>
            <p className="text-md md:text-xl font-bold text-gray-400">
            Changing the way you Live and Work
          </p>
          <Link to="/addproducts">
            <button className="btn rounded-full bg-transparent border-red-600 text-red-600 px-10 mt-10 hover:bg-red-600 hover:text-white">
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
