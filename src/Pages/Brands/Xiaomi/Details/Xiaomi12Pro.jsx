import { useLoaderData } from "react-router-dom";
import Xiaomi12ProDetails from "./Xiaomi12ProDetails";
import { useState } from "react";

const Xiaomi12Pro = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "SmartPhone" && item.brand === "Xiaomi");
    return (
        <div>
            {filteredData.map((product) => (
        <Xiaomi12ProDetails key={product._id} product={product} data={data} setData={setData}></Xiaomi12ProDetails>
      ))}
        </div>
    );
};

export default Xiaomi12Pro;