const News = () => {
  return (
    <div className="px-[75px] mb-20">
      <div className="flex">
        <div className="relative w-1/3 cursor-pointer hover:scale-105 hover:duration-700">
          <img
            src="https://i.ibb.co/0yrmczn/electro-banner1-2.webp"
            className=""
            alt=""
          />
          <div className="absolute top-10 pl-10">
            <div className="max-w-md space-y-5">
              <p className="text-xl text-gray-300">High Tech News</p>
              <h2 className="text-4xl text-white font-bold">
                Monster Beats Headphones
              </h2>
              <button className="px-4 py-1 bg-white rounded-full font-semibold text-red-600 hover:bg-red-600 hover:text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="w-[41.7%]">
          <div className="relative w-full cursor-pointer hover:scale-105 hover:duration-700">
            <img
              src="https://i.ibb.co/mzDV0s5/electro-banner3-1.webp"
              className=""
              alt=""
            />
            <div className="absolute text-start text-neutral-content top-5 left-5">
              <div className="max-w-md space-y-2">
                <p className="text-xl text-gray-300">Play The Dream</p>
                <h2 className="text-3xl text-white font-bold">
                  Apple iPhone 7
                  <br />
                  Color Red
                </h2>
              </div>
            </div>
          </div>
          <div className="relative w-full cursor-pointer hover:scale-105 hover:duration-700">
            <img
              src="https://i.ibb.co/v3rYGmQ/electro-banner3.webp"
              className=""
              alt=""
            />
            <div className="absolute text-start text-neutral-content top-5 left-5">
              <div className="space-y-2">
                <p className="text-xl text-gray-400">Minimalism Design</p>
                <h2 className="text-3xl text-white font-bold">
                  Music Makes
                  <br />
                  Feel Better
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[25%] cursor-pointer hover:scale-105 hover:duration-700">
          <img
            src="https://i.ibb.co/v1PBY6b/electro-banner.webp"
            className=""
            alt=""
          />
          <div className="absolute top-10 pl-10">
            <div className="max-w-md space-y-5">
              <p className="text-xl text-gray-200">Health & Fit</p>
              <h2 className="text-4xl text-white font-bold">
                Apple
                <br />
                iWatch Nike
                <br />
                Edition
              </h2>
              <button className="px-4 py-1 bg-white rounded-full font-semibold text-red-600 hover:bg-red-600 hover:text-white">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
