import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import GalaxyS23Details from "./GalaxyS23Details";

const GalaxyS23 = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "SmartPhone" && item.brand === "Samsung" && item.name === "Galaxy S23 Ultra");
    return (
        <div>
            {filteredData.map((product) => (
        <GalaxyS23Details key={product._id} product={product} data={data} setData={setData}></GalaxyS23Details>
      ))}
        </div>
    );
};

export default GalaxyS23;