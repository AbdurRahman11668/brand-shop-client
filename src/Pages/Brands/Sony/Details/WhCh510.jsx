import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import WhCh510details from "./WhCh510details";

const WhCh510 = () => {
  const loadedAppleData = useLoaderData();

  const [data, setData] = useState(loadedAppleData)

  const filteredData = data.filter((item) => item.type === "Headphones" && item.brand === "Sony" );


  return (
    <div>
      {filteredData.map((product) => (
        <WhCh510details key={product._id} product={product} data={data} setData={setData}></WhCh510details>
      ))}
    </div>
  );
};

export default WhCh510;
