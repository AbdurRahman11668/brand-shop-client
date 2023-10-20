import Swal from "sweetalert2";
const USBCEarbudsDetails = ({ product, data, setData }) => {
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
                Unmentioned during Google’s big hardware event this month was
                the introduction of a new member of the Pixel Buds family of
                earphones, the Pixel USB-C earbuds. Bundled in the box with the
                new Pixel 3 devices or available as a $30 purchase, they’re
                unglamorous and uncomplicated. Just plug them into the nearest
                USB-C port and play. Basic.
                <br /> <br />
                But the fact that I’m taking the time to review them separately
                from our Pixel 3 review should tell you something. These basic
                buds happen to be very good. Superior to the average pair of
                disposable earphones in both design and engineering, the Pixel
                USB-C earbuds solve a problem that the tech industry imposed
                upon us: the extinction of the headphone jack. <br /> <br />
                <span className="font-bold">THE GOOD</span> <br />
                Clean, smooth sound <br /> Featherlight and super comfortable <br />
                Compatible with most recent USB-C devices <br /> You might love the
                in-ear cable loops <br />
                <span className="font-bold">THE BAD</span> <br />
                Negligible noise isolation Lightweight bass <br /> Glossy white finish
                isn’t easy to keep looking pristine <br /> You might hate the in-ear
                cable loops <br /> <br />
                Once upon a recent time, we all had a trusty pair of cheap wired earphones always with us, tucked into a jacket pocket or tumbling at the bottom of our bags next to charging cables and lip balm. We could plug those earbuds into our phones, laptops, desktops, or media players, and that universality was good and desirable and lovely. But then Apple and others got it into their heads that the 3.5mm analog audio jack occupied too much valuable space inside our phones, and poof went the headphone jack.
 <br /> <br />

The obvious replacement for our cheap and trusty analog earphones was to be a pair of USB-C earphones, given how USB-C is well on its way to becoming truly universal across the same set of devices where the 3.5mm port was omnipresent. But right up until now, that product didn’t exist. Last year, my colleague Helen Havlak documented the travails of trying to procure a half-decent pair of USB-C buds at a reasonable price. Essential tried to provide an answer and failed. Libratone built what are still probably the best USB-C earphones, but those cost $149.
 <br /> <br />

And now Google waltzes in with a pair of $30 buds that make everything better. The Pixel USB-C earbuds get all the essentials right: they sound great, they’re comfortable to wear, they’re compatible with most modern devices, and they’re affordable. <br /> <br />
There’s not a lot to be said about the design of these Pixel Buds. A utilitarian white wire goes from the USB-C plug, which is about the size you’ll find on your phone’s charging cable, up to a pair of pebble-like buds, glossy on the inside and matte on the exterior. Along the way, you’ll also find a three-button remote control that houses the microphone and allows you to access Google Assistant with a long press of the middle button. I might have preferred a black or colored option over the white, simply because those are easier to keep looking clean. That’s no more of a problem than it is with Apple’s EarPods or AirPods, though the latter at least have a case that provides some protection.
              </p>
            </div>
            <button className=" text-red-600 font-semibold text-lg">
              {price}
            </button>
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

export default USBCEarbudsDetails;
