import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import GalaxyS23Details from "./GalaxyS23Details";

const GalaxyS23 = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "SmartPhone" && item.brand === "Samsung");
    return (
        <div>
            {filteredData.map((product) => (
        <GalaxyS23Details key={product._id} product={product} data={data} setData={setData}></GalaxyS23Details>
      ))}
        </div>
    );
};

export default GalaxyS23;