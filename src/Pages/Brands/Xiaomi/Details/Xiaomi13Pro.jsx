import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Xiaomi13ProDetails from "./Xiaomi13ProDetails";

const Xiaomi13Pro = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "SmartPhone" && item.brand === "Xiaomi" && item.name === "Xiaomi 13 Pro");
    return (
        <div>
            {filteredData.map((product) => (
        <Xiaomi13ProDetails key={product._id} product={product} data={data} setData={setData}></Xiaomi13ProDetails>
      ))}
        </div>
    );
};

export default Xiaomi13Pro;