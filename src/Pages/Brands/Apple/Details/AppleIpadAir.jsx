import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import AppleIpadAirdetails from "./AppleIpadAirdetails";

const AppleIpadAir = () => {
  const loadedAppleData = useLoaderData();

  const [data, setData] = useState(loadedAppleData)

  const filteredData = data.filter((item) => item.type === "Ipad");


  return (
    <div>
      {filteredData.map((product) => (
        <AppleIpadAirdetails key={product._id} product={product} data={data} setData={setData}></AppleIpadAirdetails>
      ))}
    </div>
  );
};

export default AppleIpadAir;
