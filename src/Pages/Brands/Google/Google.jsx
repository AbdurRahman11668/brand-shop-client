import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import GoogleCard from "./GoogleCard";

const Google = () => {
  const loadedAppleData = useLoaderData();
  const [appleData, setAppleData] = useState(loadedAppleData);

  const filteredData = appleData.filter((item) => item.brand === "Google");
  //   console.log(filteredData);

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/tq7dH86/google-banner.jpg"
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
            src="https://i.ibb.co/mCyYxrD/google-pixel-4-banner.jpg"
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
            src="https://i.ibb.co/dKBFGHZ/10292020-Google-Pixel2-STORY-LEVEL-BANNER-1600x483.jpg"
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
            src="https://i.ibb.co/xh1nv0n/Balance-PIxel-5-Catbanner-1280x600px.png"
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
        Google Products
        </h1>
        <p className="text-lg text-center text-gray-500 mb-10">
          You will get the best Google brand Products here
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {filteredData.map((product) => (
            <GoogleCard
              key={product._id}
              product={product}
              filteredData={filteredData}
              setAppleData={setAppleData}
            ></GoogleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Google;
