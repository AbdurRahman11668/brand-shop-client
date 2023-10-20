import Swal from "sweetalert2";

const AWhCh510details = ({ product, data, setData }) => {
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
                The Sony WH-CH510 is a pretty standard—albeit very
                cheap-feeling—set of wireless on-ear headphones. It’s made
                mostly of a very lightweight matte plastic with a diamond-shaped
                texture on the outside. As expected of inexpensive headphones,
                the Sony WH-CH510 has a very basic foam and soft coating for ear
                pads. It’s more comfortable than many cheaper headphones, but it
                creaks and groans when bent because of the quality of plastic in
                the band. Whether you have a smaller head or larger one, the
                clamping force isn’t very high—again, this is a very cheap
                plastic—but you definitely won’t forget you’re wearing it.{" "}
                <br /> <br />
                Like the premium Sony WH-1000XM5, these headphones don’t fold
                down for a smaller footprint, so they take up a larger amount of
                space than it feels like they should. However, the ear cups can
                swivel 90 degrees to rest flat on a table or your clavicles if
                need be. Unlike many of the higher-end models of Sony
                headphones, there is no wired option for listening here. <br />
                If you just look at the score at the top of the page, you’d get
                a pretty generous assessment of the Sony WH-CH510. On paper,
                these are great headphones for $60 USD, but that score doesn’t
                take into account a rather notable user problem with the
                Sidetone feature.
                <br /> <br />
                What is Sidetone? <br />
                Sidetone is similar to a transparency mode on noise canceling
                headphones, but with the not-so-fun drawback that you can’t turn
                it off on this set of headphones. This feature is supposed to
                only be enabled for phone calls as it would be with most
                headphones, but in our use: the Sony WH-CH510 sometimes flips it
                on if you talk while your headphones are on—not just on a phone
                call. It’s easy to see the intent here: if you’re on a call you
                need to be able to hear yourself so you don’t accidentally raise
                your voice too loudly. This is a standard feature of most
                Bluetooth headphones, and it’s an extreme rarity that it
                malfunctions. However, something’s up with the implementation of
                Sidetone on the Sony WH-CH510. <br />
                We can’t get Sidetone working the same way twice, with even the
                same devices. One day, the Sidetone is active with an Asus
                phone, and then weeks later it isn’t. Same, too, for a Google
                Pixel phone. iPhones don’t seem to have this trouble, nor does
                the Mac Mini. It doesn’t work with the Windows PC in our testing
                setup, but when we leave the lab it connects to a different
                computer running the same version of Windows and it’s back. When
                it’s active, it’s a colossal distraction, but when it’s inactive
                the headphones are inoffensive at worst.
                <br />
                We’re going to go out on a limb and say that for most, this
                won’t inspire confidence. Walking my dog down the main road in
                my town, the Sony WH-CH510 is frustrating, but at the SoundGuys
                office: perfectly fine. Your mileage will vary depending greatly
                on where you listen, and whether or not the Sidetone feature is
                working in a predictable way.
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

export default AWhCh510details;
