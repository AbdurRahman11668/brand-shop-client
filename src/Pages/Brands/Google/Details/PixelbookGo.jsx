import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import PixelbookGoDetails from "./PixelbookGoDetails";

const PixelbookGo = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "Laptop" && item.brand === "Google");
    return (
        <div>
            {filteredData.map((product) => (
        <PixelbookGoDetails key={product._id} product={product} data={data} setData={setData}></PixelbookGoDetails>
      ))}
        </div>
    );
};

export default PixelbookGo;