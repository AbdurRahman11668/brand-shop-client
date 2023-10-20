import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import GalaxyWatch6Details from "./GalaxyWatch6Details";


const GalaxyWatch6 = () => {
  const loadedAppleData = useLoaderData();

  const [data, setData] = useState(loadedAppleData)

  const filteredData = data.filter((item) => item.type === "SmartWatch" && item.brand === "Samsung" );


  return (
    <div>
      {filteredData.map((product) => (
        <GalaxyWatch6Details key={product._id} product={product} data={data} setData={setData}></GalaxyWatch6Details>
      ))}
    </div>
  );
};

export default GalaxyWatch6;
