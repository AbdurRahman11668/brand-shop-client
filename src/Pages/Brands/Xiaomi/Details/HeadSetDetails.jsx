import Swal from "sweetalert2";

const HeadSetDetails = ({ product, data, setData }) => {
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
                Xiaomi gets a lot right with the Mi True Wireless, namely the
                price. It’s hard to find much at fault with the earbuds once
                affordability is taken into account. That said, noise canceling
                can’t compare to Sony’s latest ANC earbuds, and the shape is
                unwieldy given the earbud stem length. If you’re looking for an
                AirPods lookalike for half the price, though, look no further.
                <br /> <br />
                <span>Pros:</span> <br />
                SB-C charging <br />
                Automatic ear detection <br />
                Multiconnect <br />
                Noise canceling <br />
                IPX4 water-resistance <br />
                <br />
                <br />
                <span>Cons:</span> <br />
                Poor isolation and fit <br />
                Can’t skip tracks from earbuds <br />
                Bluetooth 4.2 <br />
                True wireless earbuds are always compared to the AirPods, and we
                have to make the comparison with the Xiaomi Mi True Wireless.
                These white, stemmed earbuds mimic Apple’s design with a few
                tweaks. For one, these are IPX4-rated and feature noise
                canceling technology. The biggest difference is in price:
                Xiaomi’s earbuds are half of what the base-model AirPods
                cost—but does the Xiaomi Mi True Wireless give the competition a
                run for its money?
                <br />
                These earbuds are great for anyone in need of good true wireless
                earbuds that don’t cost a fortune. The Xiaomi Mi True Wireless
                sport a familiar design and feature noise canceling. While the
                ANC isn’t as effective as Sony’s products, it can hush some
                ambient noise. What’s more, the IPX4 rating means they can
                withstand sweat and light rain showers.
                <br />
                There is one great positive to the design: dedicated nozzles.
                This makes for a better fit than the AirPods. Sensors sit under
                the hood and facilitate automatic ear detection. This allows
                music playback to play/pause when the ‘buds are inserted and
                removed accordingly. Each earbud panel operates different
                controls, but functionality is limited. All you can do is access
                your virtual assistant, answer a call, and toggle noise
                canceling, all of which is done by a combination of tapping or
                tapping and holding either touch panel. If you want to skip
                tracks or adjust the volume, you have to pull out your phone.
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

export default HeadSetDetails;
