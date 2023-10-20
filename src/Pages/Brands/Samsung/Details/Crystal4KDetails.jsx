import Swal from "sweetalert2";

const Crystal4KDetails = ({ product, data, setData }) => {
  const { _id, name, brand, type, rating, description, price, image } = product;

  const handleAddProduct = (e) => {
    e.preventDefault();

    const id = _id;
    const name2 = name;
    const brand2 = brand;
    const type2 = type;
    const rating2 = rating;
    const description2 = description;
    const price2 = price;
    const image2 = image;
    const allProducts = {
        id, name2, brand2, type2, rating2, description2, price2, image2
    }
    fetch("http://localhost:5000/cart", {
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
    <div>
      <div key={_id}>
        <div className="pb-10 px-20">
          <div className="w-full">
            <img className="md:w-2/3 mx-auto" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-center text-red-600 font-bold text-4xl">
              {name}
            </h3>
            <div className="pt-10 space-y-5">
              <p className="text-gray-600 text-lg font-medium">
              The Samsung CU8000 is one of the entry-level models in Samsung's 2023 lineup, replacing the Samsung AU8000 in North America. It's part of Samsung's Crystal UHD series of TVs, sitting above the Samsung CU7000/CU7000D and below Samsung's QLED lineup, starting with the Samsung Q60C QLED. It competes with other entry-level models like the Sony X80K/X80CK and LG UQ8000. It's a simple model that lacks features like variable refresh rate (VRR) and HDMI 2.1 support, except on its 85-inch screen size. It uses Samsung's Crystal Processor 4K, first introduced in 2020 and designed to provide powerful 4K upscaling. It runs a simplified version of Samsung's 2023 Tizen OS interface, which offers most of the features of more advanced models but with a reduced feature set meant to run smoothly on this entry-level TV. It comes with the same great remote as more expensive models, like the Samsung S95C, and it supports voice controls to make it easy to find your favorite content. <br /> <br />

              Overall, the Samsung CU8000 is a very decent performer. It's best for watching movies in a dark room, as it has a wide color gamut that tends to lean towards showing dark, saturated images. It's also somewhat good for HDR content due to its wide color gamut, but it doesn't get nearly bright enough for highlights to stand out, and it doesn't have local dimming features to help. Plus, it has poor reflection handling, so it's not a great bright room TV. It also has a bad response time, which is good for reducing stutter in movies, but as it introduces motion blur, it isn't optimal for sports, PC monitor use, or gaming.
              <br />
              <br />
              Great low-quality content smoothing.
              </p>
            </div>
            <button className=" text-red-600 font-semibold text-lg">{price}</button>
            <div className="text-center py-10">
              <button
                onClick={handleAddProduct}
                className="px-16 text-lg font-semibold py-4 bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border rounded-md hover:border-red-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crystal4KDetails;
