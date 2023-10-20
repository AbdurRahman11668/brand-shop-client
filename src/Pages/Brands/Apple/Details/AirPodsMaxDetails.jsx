import Swal from "sweetalert2";
const AirPodsMaxDetails = ({ product, data, setData }) => {
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
      id,
      name2,
      brand2,
      type2,
      rating2,
      description2,
      price2,
      image2,
    };
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
            <img className="w-2/3 mx-auto" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-center text-red-600 font-bold text-4xl">
              {name}
            </h3>
            <div className="pt-10 space-y-5">
              <p className="text-gray-600 text-lg font-medium">
                Apple’s latest, most expensive superphone is a big step forward
                for the iPhone. But despite a powerful new camera and USB-C
                port, the best feature is simply its lighter weight. <br /> That is
                because Apple’s 6.7in iPhones have always been beasts in price
                and weight. But while this new iPhone 15 Pro Max is still
                wallet-crushingly expensive, starting at £1,199
                (€1,449/$1,199/A$2,199), it is at least 19g lighter, making a
                huge difference in your hand and pockets. <br /> The new Max has
                titanium sides rather than stainless steel, which saves the 19g
                but also shifts the balance of the phone towards its centre,
                making it feel lighter than it is. The design otherwise sticks
                closely to that introduced with the iPhone 12 Pro Max in 2020,
                with just a little bit of softening around the edges and slimmer
                bezels around the screen.
              </p>
            </div>
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

export default AirPodsMaxDetails;
