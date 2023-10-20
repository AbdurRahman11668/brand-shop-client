import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

import Swal from "sweetalert2";

const MyCart = () => {
  const loadedAppleData = useLoaderData();
  const [datas, setDatas] = useState(loadedAppleData);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `http://localhost:5000/cart/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              const remaining = datas.filter((cof) => cof._id !== _id);
              setDatas(remaining);
            }
          });
      }
    });
  };


  return (
    <div className="px-10 md:px-24 py-10 mb-10">
      <h1 className="text-center text-red-600 font-semibold text-4xl mb-10">
        Cart
      </h1>
      <div className="grid md:grid-cols-2 gap-5 md:gap-10">
        {datas.map((product) => (
          // <Cart key={data._id} data={data} datas={datas} setDatas={setDatas}></Cart>
          <div className="" key={product._id}>
            <div className="md:flex text-center md:text-start space-x-5 bg-gray-100  items-center shadow-lg">
              <div className="">
                <img src={product.image2} className="w-[500px] md:w-[300px] rounded" alt="" />
              </div>
              <div className="space-y-1 py-3">
                <Link to="http://localhost:5173/apple/6530d093250db7547e920816">
                  <h3 className="text-red-600 font-bold text-xl">
                    {product.name2}
                  </h3>
                </Link>
                <p className="text-md text-gray-700 font-semibold">
                  {product.type2}
                </p>
                <p className="text-md pb-3 text-gray-500 font-semibold">
                  Price: <span className="text-red-600 font-semibold">{product.price2}</span>
                </p>
                <div className="flex justify-center md:justify-start space-x-5">
                  <button className="rounded px-3 text-lg font-semibold text-white bg-red-600 hover:border hover:border-red-600 hover:text-red-600 hover:bg-white">
                    Buy Now
                  </button>
                  <button onClick={() => handleDelete(product._id)} className="rounded px-3 text-lg font-semibold text-white bg-red-600 hover:border hover:border-red-600 hover:text-red-600 hover:bg-white">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
