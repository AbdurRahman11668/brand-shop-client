import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Xperia1IVDetails from "./Xperia1IVDetails";

const Xperia1IV = () => {
  const loadedAppleData = useLoaderData();

  const [data, setData] = useState(loadedAppleData);

  const filteredData = data.filter(
    (item) => item.type === "SmartPhone" && item.brand === "Sony"
  );
  return (
    <div>
      {filteredData.map((product) => (
        <Xperia1IVDetails
          key={product._id}
          product={product}
          data={data}
          setData={setData}
        ></Xperia1IVDetails>
      ))}
    </div>
  );
};

export default Xperia1IV;
