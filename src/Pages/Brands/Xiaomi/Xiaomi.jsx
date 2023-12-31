import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import XiaomiCard from "./XiaomiCard";
const Xiaomi = () => {
    const loadedAppleData = useLoaderData();
    const [appleData, setAppleData] = useState(loadedAppleData);
  
    const filteredData = appleData.filter((item) => item.brand === "Xiaomi");
    //   console.log(filteredData);
    return (
        <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/k93ffVR/517b1430e7b8c0aae0fa41ba578cae57-823x269.png"
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
            src="https://i.ibb.co/zmHSKQG/20230628134559-xiaomi-brand-header-desktop.webp"
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
            src="https://i.ibb.co/qB5ddWx/d930ce57a6481a12f0589fe50a63308a-2560x800.jpg"
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
            src="https://i.ibb.co/vhvL3yB/E-Bargain.webp"
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
        Xiaomi Products
        </h1>
        <p className="text-lg text-center text-gray-500 mb-10">
          You will get the best Xiaomi brand Products here
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {filteredData.map((product) => (
            <XiaomiCard
              key={product._id}
              product={product}
              filteredData={filteredData}
              setAppleData={setAppleData}
            ></XiaomiCard>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Xiaomi;