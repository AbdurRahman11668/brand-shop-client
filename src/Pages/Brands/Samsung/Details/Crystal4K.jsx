import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Crystal4KDetails from "./Crystal4KDetails";

const Crystal4K = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "SmartTV" && item.brand === "Samsung");
    return (
        <div>
            {filteredData.map((product) => (
        <Crystal4KDetails key={product._id} product={product} data={data} setData={setData}></Crystal4KDetails>
      ))}
        </div>
    );
};

export default Crystal4K;