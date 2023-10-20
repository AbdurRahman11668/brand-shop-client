import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import WatchSeries7Details from "./WatchSeries7Details ";

const WatchSeries7 = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "SmartWatch" && item.brand === "Apple");
    return (
        <div>
            {filteredData.map((product) => (
        <WatchSeries7Details key={product._id} product={product} data={data} setData={setData}></WatchSeries7Details>
      ))}
        </div>
    );
};

export default WatchSeries7;