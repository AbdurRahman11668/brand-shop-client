import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const MyCart = () => {
    const loadedAppleData = useLoaderData();
    const [datas, setDatas] = useState(loadedAppleData)
  
    return (
        <div>
            <h1 className="text-5xl text-center my-20 text-purple-600">
          cart: {datas.length}
        </h1>
        <div className="grid md:grid-cols-2 gap-5">
          {datas.map((data) => (
            <Cart key={data._id} data={data} datas={datas} setDatas={setDatas}></Cart>
          ))}
        </div>
        </div>
    );
};

export default MyCart;