import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import GalaxyZFlipDetails from "./GalaxyZFlipDetails ";

const GalaxyZFlip = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "SmartPhone" && item.brand === "Samsung" && item.name === "Galaxy Z Flip 5");
    return (
        <div>
            {filteredData.map((product) => (
        <GalaxyZFlipDetails key={product._id} product={product} data={data} setData={setData}></GalaxyZFlipDetails>
      ))}
        </div>
    );
};

export default GalaxyZFlip;