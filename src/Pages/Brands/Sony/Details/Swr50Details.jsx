import Swal from "sweetalert2";
const Swr50Details = ({ product, data, setData }) => {
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
            <img className="md:w-2/3 mx-auto" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-center text-red-600 font-bold text-4xl">
              {name}
            </h3>
            <div className="pt-10 space-y-5">
              <p className="text-gray-600 text-lg font-medium">
                It's a powerful and well-equipped wearable with a good screen
                and reasonable battery life. If it could do all that while
                looking like an actual wristwatch it would be a real winner.
                <br /> <br />
                <span className="font-bold">Pros:</span> <br />
                +Slick performance <br />
                +Built in GPS <br />
                +Good screen <br />
                <span className="font-bold">Cons:</span> <br />
                -Not super stylish <br />
                -Iffy GPS performance <br />
                -Fiddly charging port <br />
                pdate: Almost four years after the Smartwatch 3 was released,
                Sony's last top-end wearable is very difficult to find on sale.
                The company hasn't updated the watch to Android Wear 2.0 or Wear
                OS and its general age makes this a very difficult watch to
                recommend searching for in 2018.
                <br />
                The company has shown no intention of releasing a Sony
                SmartWatch 4 either, so if you want a smartwatch from Sony you
                may be disappointed and you can also take a look at our guide to
                the best Wear OS watches right now. <br />
                The Sony SmartWatch 3 is more than just a smartwatch, it's also
                got ambitions as a capable fitness watch, thanks to the
                inclusion of GPS.
                <br />
                It doesn't make the most stunning first impression, especially
                when compared to the more traditional circular stylings of the
                Moto 360 and Huawei Watch. The Sony SmartWatch 3 rocks a square
                shape that's more similar to the Pebble Time than other Android
                Wear devices.
                <br />
                But, where its appearance might fall flat, it surprises in other
                ways. For one thing, the mere fact that it runs Android Wear is
                a bit of a shock, given that Sony has spent the last few years
                shying away from it, attempting to perfect its own system
                instead.
                <br />
                But it's a decision that I welcome. Android Wear is still
                finding its footing and with Sony jumping into the mix can only
                be a good thing.
                <br />
                Its 1.2GHz quad-core processor and 512MB of RAM pack it with
                power, even to today's standards. And with GPS built in, it's a
                more fully-functional fitness accessory than most other
                smartwatches available. <br />
                Of course, all that power doesn't come cheap, as the Sony
                SmartWatch 3 retails for £189.99 (about US$250, AU$299.99).
                However, if you do some digging, you can probably find yourself
                a big discount.
                <br />
                All in all, it's not quite the most expensive smartwatch. The
                aforementioned Moto 360 and Huawei Watch both edge it out,
                seemingly charging a premium for a circular, fashionable
                styling.
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

export default Swr50Details;
