import Swal from "sweetalert2";
const Iphone15ProMaxDetails = ({ product, data, setData }) => {
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
            <img className="w-full md:w-2/3 mx-auto" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-center text-red-600 font-bold text-4xl">
              {name}
            </h3>
            <div className="pt-10 space-y-5">
              <p className="text-gray-600 text-lg font-medium">
                Apple’s latest, most expensive superphone is a big step forward
                for the iPhone. But despite a powerful new camera and USB-C
                port, the best feature is simply its lighter weight. <br /> That
                is because Apple’s 6.7in iPhones have always been beasts in
                price and weight. But while this new iPhone 15 Pro Max is still
                wallet-crushingly expensive, starting at £1,199
                (€1,449/$1,199/A$2,199), it is at least 19g lighter, making a
                huge difference in your hand and pockets. <br /> The new Max has
                titanium sides rather than stainless steel, which saves the 19g
                but also shifts the balance of the phone towards its centre,
                making it feel lighter than it is. The design otherwise sticks
                closely to that introduced with the iPhone 12 Pro Max in 2020,
                with just a little bit of softening around the edges and slimmer
                bezels around the screen.
                <br />
                The screen is one of the very best on the market and can get
                super bright in sunlight, making it easier to read outdoors. New
                for this year is the action button, which replaces the mute
                switch that has been on every iPhone.
                <br />
                It can still mute and unmute the phone by pressing and holding
                but if you leave your phone permanently silenced or are happy
                toggling mute in control centre, then you can remap it to do
                other things such as turn on “do not disturb”, launch the
                camera, light the torch, record a voice memo as well as other
                features.
                <br /><br />
               <span className="font-bold"> Specifications:</span> <br />
                Screen: 6.7in Super Retina XDR (OLED) (460ppi) <br />
                Processor: Apple A17 Pro <br />
                RAM: 8GB <br />
                Storage: 256, 512GB or 1TB <br />
                Operating system: iOS 17 <br />
                Camera: 48MP main, 12MP UW and 12MP 5x zoom, 12MP front-facing
                camera <br />
                Connectivity: 5G, wifi 6E, NFC, Bluetooth 5.3, Thread, USB-C,
                Satellite, UWB and GNSS <br />
                Water resistance: IP68 (6 metres for 30 mins) <br />
                Dimensions: 159.9 x 76.7 x 8.25mm <br />
                Weight: 221g <br />
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

export default Iphone15ProMaxDetails;
