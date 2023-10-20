import { useLoaderData } from "react-router-dom";
import PixelBudsDetails from "./PixelBudsDetails";
import { useState } from "react";

const PixelBuds = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "Headphones" && item.brand === "Google" && item.name === "Google Pixel Buds");
    return (
        <div>
            {filteredData.map((product) => (
        <PixelBudsDetails key={product._id} product={product} data={data} setData={setData}></PixelBudsDetails>
      ))}
        </div>
    );
};

export default PixelBuds;