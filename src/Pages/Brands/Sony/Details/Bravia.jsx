import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import BraviaDetails from "./BraviaDetails";

const Bravia = () => {
  const loadedAppleData = useLoaderData();

  const [data, setData] = useState(loadedAppleData);

  const filteredData = data.filter((item) => item.type === "SmartTV" && item.brand === "Sony");
  return (
    <div>
      {filteredData.map((product) => (
        <BraviaDetails
          key={product._id}
          product={product}
          data={data}
          setData={setData}
        ></BraviaDetails>
      ))}
    </div>
  );
};

export default Bravia;
