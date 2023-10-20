import { useLoaderData } from "react-router-dom";
import Swr50Details from "./Swr50Details";
import { useState } from "react";

const Swr50 = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "SmartWatch" && item.brand === "Sony");
    return (
        <div>
            {filteredData.map((product) => (
        <Swr50Details key={product._id} product={product} data={data} setData={setData}></Swr50Details>
      ))}
        </div>
    );
};

export default Swr50;