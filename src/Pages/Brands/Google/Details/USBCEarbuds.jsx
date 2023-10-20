import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import USBCEarbudsDetails from "./USBCEarbudsDetails";

const USBCEarbuds = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "Headphones" && item.brand === "Google" && item.name === "Pixel USB-C Earbuds");
    return (
        <div>
            {filteredData.map((product) => (
        <USBCEarbudsDetails key={product._id} product={product} data={data} setData={setData}></USBCEarbudsDetails>
      ))}
        </div>
    );
};

export default USBCEarbuds;