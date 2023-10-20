import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MacbookAirDetails from "./MacbookAirDetails";

const MacbookAir = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "Laptop" && item.brand === "Apple");
    return (
        <div>
            {filteredData.map((product) => (
        <MacbookAirDetails key={product._id} product={product} data={data} setData={setData}></MacbookAirDetails>
      ))}
        </div>
    );
};

export default MacbookAir;