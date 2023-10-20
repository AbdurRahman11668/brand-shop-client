import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AddProduct from "./Product";

const AppProducts = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div className="my-10">
      <h1 className="text-5xl text-center mb-10 text-purple-600">Products</h1>
      <div className="grid md:grid-cols-2 gap-5">
        {products.map((product) => (
          <AddProduct
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
          ></AddProduct>
        ))}
      </div>
    </div>
  );
};

export default AppProducts;
