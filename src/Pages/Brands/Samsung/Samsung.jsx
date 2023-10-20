import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SamsungCard from "./SamsungCard";

const Samsung = () => {
  const loadedAppleData = useLoaderData();
  const [appleData, setAppleData] = useState(loadedAppleData);

  const filteredData = appleData.filter((item) => item.brand === "Samsung");
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/3zPKqwM/Samsung-Galaxy-S21-modelos.jpg"
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
            src="https://i.ibb.co/gTng5sG/Samsung-Galaxy-S21-Press-Renders-Web-Banner.jpg"
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
            src="https://i.ibb.co/TPv374w/46aa15356bfd9ccc.jpg"
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
            src="https://i.ibb.co/F577mPS/banner-r62-Tk-Ic.jpg"
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
          Samsung Products
        </h1>
        <p className="text-lg text-center text-gray-500 mb-10">
          You will get the best Samsung brand Products here
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {filteredData.map((product) => (
            <SamsungCard
              key={product._id}
              product={product}
              filteredData={filteredData}
              setAppleData={setAppleData}
            ></SamsungCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Samsung;
