import Swal from "sweetalert2";
const Xiaomi12ProDetails = ({ product, data, setData }) => {
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
                Xiaomi's top of the line, non-folding smartphone for 2022 may be
                the 12S Ultra, but its highest-end smartphone for 2022 that you
                can officially purchase outside of China is the 12 Pro. That's
                an odd situation for sure, and it's even odder still if you
                consider that the Mi 11 Pro, its predecessor, was confined to
                the Chinese market last year while the Mi 11 Ultra wasn't. It's
                really hard to ascertain the logic behind these moves from afar,
                but as the saying goes - it is what it is.
                <br /> <br />
                We were obviously curious to see how the company's international
                top dog fares if we use it for an extended period of time as our
                one and only smartphone, and our thoughts following that are
                laid out in this long-term review of the Xiaomi 12 Pro. This is
                the model we're talking about because this is the one most
                people can actually get outside of China, with warranty and all
                the perks, even though the shadow of the 12S Ultra will never
                not float around in the back of our minds. <br /> <br />
                If you look at Xiaomi's current roster, the 12 Pro seems to
                serve a similar purpose to Samsung's Galaxy S22+, packing
                high-end specs while not going all-in with everything,
                especially camera-wise. Does that put it in an awkward position
                where it's hard to justify getting one, or is it just enough
                smartphone that you'll be happy with it if having the best
                camera hardware in your handset isn't a priority for you?
                <br /> <br />
                These are some of the things we've set out to discover during
                our time with the Xiaomi 12 Pro, and if we could spoil our
                conclusions just a little bit, we'll say there are definitely a
                lot of things to love about this device, but there are also some
                issues, some more baffling than others. If that intrigues you,
                then join us over the next pages of this review as we explore
                what it's like to live with the Xiaomi 12 Pro day-in, day-out,
                in the second half of 2022. <br /> <br />
                Looking at it from the front, you'll definitely place the Xiaomi
                12 Pro in the 'high-end Android phone, 2020-2022' mental
                category - and instantly so. The curved sides of the screen give
                away the fact that this most likely isn't a mid-ranger, while
                the small bezels all-round solidify the feeling that you're
                looking at a premium offering. So far so good, then. <br />{" "}
                <br />
                Turn it over and you're treated to one of the most beautiful
                camera islands to appear in the past few years, in this
                reviewer's obviously subjective opinion. It's still an entire
                slab of glass and metal that looks like it's sitting on top of
                the phone's back, and so in a way it's still an eyesore because
                it breaks it up, literally as it were, but it's rather pretty to
                look at with its etched metal and subtle dividing lines between
                the various sensors and the flash.
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

export default Xiaomi12ProDetails;
