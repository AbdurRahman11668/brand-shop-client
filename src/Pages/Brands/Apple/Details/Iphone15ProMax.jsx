import { useLoaderData } from "react-router-dom";
import Iphone15ProMaxDetails from "./Iphone15ProMaxDetails";
import { useState } from "react";

const Iphone15ProMax = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "Smartphone" && item.brand === "Apple");
    return (
        <div>
            {filteredData.map((product) => (
        <Iphone15ProMaxDetails key={product._id} product={product} data={data} setData={setData}></Iphone15ProMaxDetails>
      ))}
        </div>
    );
};

export default Iphone15ProMax;