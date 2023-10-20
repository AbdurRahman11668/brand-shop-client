import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import HeadSetDetails from "./HeadSetDetails";


const HeadSet = () => {
  const loadedAppleData = useLoaderData();

  const [data, setData] = useState(loadedAppleData)

  const filteredData = data.filter((item) => item.type === "Headphones" && item.brand === "Xiaomi" );


  return (
    <div>
      {filteredData.map((product) => (
        <HeadSetDetails key={product._id} product={product} data={data} setData={setData}></HeadSetDetails>
      ))}
    </div>
  );
};

export default HeadSet;
