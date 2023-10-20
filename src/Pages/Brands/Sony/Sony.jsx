import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SonyCard from "./SonyCard";

const Sony = () => {
    const loadedAppleData = useLoaderData();
    const [appleData, setAppleData] = useState(loadedAppleData);
  
    const filteredData = appleData.filter((item) => item.brand === "Sony");
    //   console.log(filteredData);
    return (
        <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/LPGFqXg/XZ1-Avaliable-Now-Post-1242x459px.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/8rzcQ1h/1746-Banner-A95-L-6851.webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/3MqqXxX/XA2-Ultra-banner.png"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/RpfT4Zb/1749.webp"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      
      <div className="my-10 px-10 md:px-20">
        <h1 className="text-5xl font-bold text-center mb-5 text-red-600">
          Sony Products
        </h1>
        <p className="text-lg text-center text-gray-500 mb-10">
          You will get the best Sony brand Products here
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {filteredData.map((product) => (
            <SonyCard
              key={product._id}
              product={product}
              filteredData={filteredData}
              setAppleData={setAppleData}
            ></SonyCard>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Sony;