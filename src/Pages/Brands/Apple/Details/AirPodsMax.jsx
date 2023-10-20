import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import AirPodsMaxDetails from "./AirPodsMaxDetails";

const AirPodsMax = () => {
  const loadedAppleData = useLoaderData();

  const [data, setData] = useState(loadedAppleData);

  const filteredData = data.filter((item) => item.type === "Headphones" && item.brand === "Apple");
  return (
    <div>
      {filteredData.map((product) => (
        <AirPodsMaxDetails
          key={product._id}
          product={product}
          data={data}
          setData={setData}
        ></AirPodsMaxDetails>
      ))}
    </div>
  );
};

export default AirPodsMax;
