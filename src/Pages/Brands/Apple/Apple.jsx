import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppleCard from "./AppleCard";

const Apple = () => {
  const loadedAppleData = useLoaderData();
  const [appleData, setAppleData] = useState(loadedAppleData);

  const filteredData = appleData.filter((item) => item.brand === "Apple");
  //   console.log(filteredData);

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/F3yK5zJ/8ef726ffe903afa19aa545e23f3b9c72.png"
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
            src="https://i.ibb.co/y4zbNM8/apple-landing-page.webp"
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
            src="https://i.ibb.co/VqysjNS/one-day-apple-sale-banner.jpg"
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
            src="https://i.ibb.co/5hSw80B/ezgif-com-gif-maker.png"
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
          Apple Products
        </h1>
        <p className="text-lg text-center text-gray-500 mb-10">
          You will get the best Apple brand Products here
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {filteredData.map((product) => (
            <AppleCard
              key={product._id}
              product={product}
              filteredData={filteredData}
              setAppleData={setAppleData}
            ></AppleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apple;
