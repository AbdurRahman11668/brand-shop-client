const ShopMoreCard = () => {
  return (
    <div className="w-full md:flex pt-10 pb-20 px-10 md:px-5 lg:px-20 space-y-10 md:space-y-0 md:space-x-5 ">
      <div className="relative w-100% md:w-[50%] cursor-pointer">
        <img src="https://i.ibb.co/r5KHf3h/electro-banner10-jpg.webp" alt="" />
        <div className="absolute top-5 left-10 space-y-3 md:space-y-1 lg:space-y-3">
          <p className="text-md lg:text-xl font-semibold text-sky-500">NEW TECHNOLOGIES</p>
          <h3 className="text-2xl lg:text-3xl font-bold">WEBCAMS 2023</h3>
          <p className="text-md font-medium text-gray-600">Latest Products and Models</p>
          <button className="px-4 py-2 bg-sky-500 rounded-full font-semibold text-white hover:bg-white hover:text-sky-500">
            SHOP MORE
          </button>
        </div>
      </div>
      <div className="relative md:w-[50%] cursor-pointer">
        <img src="https://i.ibb.co/VCfxr8x/electro-banner11-jpg.webp" alt="" />
        <div className="absolute top-5 left-10 space-y-3 md:space-y-1 lg:space-y-3">
          <p className="text-md lg:text-xl font-semibold text-gray-300">APPLE ACCESSORIES</p>
          <h3 className="text-2xl lg:text-4xl font-bold text-white">Best Laptop</h3>
          <p className="text-md font-medium text-gray-200">Latest Products and Models</p>
          <button className="px-4 py-2 text-sky-500 rounded-full font-semibold bg-white hover:bg-sky-500 hover:text-white">
            SHOP MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopMoreCard;
