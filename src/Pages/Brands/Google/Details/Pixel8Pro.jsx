import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Pixel8ProDetails from "./Pixel8ProDetails";

const Pixel8Pro = () => {
  const loadedAppleData = useLoaderData();

  const [data, setData] = useState(loadedAppleData)

  const filteredData = data.filter((item) => item.type === "Smartphone" && item.brand === "Google" );


  return (
    <div>
      {filteredData.map((product) => (
        <Pixel8ProDetails key={product._id} product={product} data={data} setData={setData}></Pixel8ProDetails>
      ))}
    </div>
  );
};

export default Pixel8Pro;
