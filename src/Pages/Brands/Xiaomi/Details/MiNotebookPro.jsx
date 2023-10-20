import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MiNotebookProDetails from "./MiNotebookProDetails";

const MiNotebookPro = () => {
    const loadedAppleData = useLoaderData();
  
    const [data, setData] = useState(loadedAppleData)
  
    const filteredData = data.filter((item) => item.type === "Laptop" && item.brand === "Xiaomi");
    return (
        <div>
            {filteredData.map((product) => (
        <MiNotebookProDetails key={product._id} product={product} data={data} setData={setData}></MiNotebookProDetails>
      ))}
        </div>
    );
};

export default MiNotebookPro;