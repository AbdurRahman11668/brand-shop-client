const BrandItems = () => {
  return (
    <div className="py-20">
      <div className="flex flex-wrap space-x-5 space-y-5 lg:space-x-10 items-center py-5 px-10 justify-center">
        <div className="text-center cursor-pointer">
          <img
            src="https://i.ibb.co/QDHyx8V/apple.png"
            className="w-12"
            alt=""
          />
          <h2>Apple</h2>
        </div>
        <div className="text-center cursor-pointer">
          <img
            src="https://i.ibb.co/hMrmKNM/samsung.png"
            className="w-52"
            alt=""
          />
          <div>
            <h2 className="">Samsung</h2>
          </div>
        </div>
        <div className="text-center cursor-pointer">
          <img
            src="https://i.ibb.co/FsG5Zkg/sony.png"
            className="w-44"
            alt=""
          />
          <h2>Sony</h2>
        </div>
        <div className="text-center cursor-pointer">
          <img
            src="https://i.ibb.co/n0KhM7X/xiaomi.png"
            className="w-32"
            alt=""
          />
          <h2>Xiaomi</h2>
        </div>
        <div className="text-center cursor-pointer">
          <img
            src="https://i.ibb.co/vwJhPS9/microsoft.png"
            className="w-40"
            alt=""
          />
          <h2>Microsoft</h2>
        </div>
        <div className="text-center cursor-pointer">
          <img
            src="https://i.ibb.co/rM8RsSy/google.png"
            className="w-28"
            alt=""
          />
          <h2>Google</h2>
        </div>
      </div>
    </div>
  );
};

export default BrandItems;
