import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import CurvedMonitorDetails from "./CurvedMonitorDetails";

const CurvedMonitor = () => {
  const loadedAppleData = useLoaderData();

  const [data, setData] = useState(loadedAppleData);

  const filteredData = data.filter((item) => item.type === "Desktop" && item.brand === "Samsung");
  return (
    <div>
      {filteredData.map((product) => (
        <CurvedMonitorDetails
          key={product._id}
          product={product}
          data={data}
          setData={setData}
        ></CurvedMonitorDetails>
      ))}
    </div>
  );
};

export default CurvedMonitor;
