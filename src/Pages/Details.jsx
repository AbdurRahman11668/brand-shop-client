import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const cards = useLoaderData();

  const id = cards._id;
  const name2 = cards.name;
  const brand2 = cards.brand;
  const type2 = cards.type;
  const rating2 = cards.rating;
  const description2 = cards.description;
  const price2 = cards.price;
  const image2 = cards.image;

  const handleAddProduct = (e) => {
    e.preventDefault();

    const id = cards._id;
  const name2 = cards.name;
  const brand2 = cards.brand;
  const type2 = cards.type;
  const rating2 = cards.rating;
  const description2 = cards.description;
  const price2 = cards.price;
  const image2 = cards.image;

    const allProducts = {
      id,
      name2,
      brand2,
      type2,
      rating2,
      description2,
      price2,
      image2,
    };
    fetch("https://brans-shop.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Producs Added Successfully to the Cart!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  

  return (
    <div className="pb-20 px-32">
      <div>
        <img className="mx-auto md:w-6/12" src={cards.image} alt="" />
      </div>
      <div className="space-y-5">
        <h3 className="text-center font-bold text-red-600 text-3xl">{cards.name}</h3>
        <p className="text-center text-xl font-semibold">Type: <span className="text-red-600">{cards.type}</span></p>
        <p className="text-center text-xl font-semibold">Brand: <span className="text-red-600">{cards.brand}</span></p>
        <p>{cards.description}</p>
        <p className="text-center text-xl font-semibold">Price: <span className="text-red-600">{cards.price}</span></p>
        <div className="text-center pt-5">
        <button onClick={handleAddProduct} className="rounded py-3 px-8 text-xl font-semibold text-white bg-red-600 hover:border hover:border-red-600 hover:text-red-600 hover:bg-white" >Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
