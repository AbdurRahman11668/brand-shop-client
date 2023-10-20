import Swal from "sweetalert2";
const PixelBudsDetails = ({ product, data, setData }) => {
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
              It wasn’t a sure thing that the Pixel Buds Pro would turn out to be good. Google has had a mixed, inconsistent track record with wireless earbuds so far. The original Pixel Buds in 2017 had such an unconventional design that something as fundamental as putting them back into the case was overly complicated. The Pixel Buds 2 moved to a much sleeker, true wireless form factor, but they were beset with connectivity issues and frequent audio dropouts. Google righted the ship with the low-end $99 Pixel Buds A-Series last year, but now all eyes are on the new, flagship $199 Pixel Buds Pro — the company’s first earbuds with active noise cancellation — to see whether Google can really hang with the very best from Apple, Sony, Samsung, and others. <br /> <br />

Turns out, it very much can. The Pixel Buds Pro fully resolve the Bluetooth woes of the second-gen model while delivering improved sound quality, longer battery life, satisfactory noise cancellation, and bonus convenience features like multipoint. They’re not the smallest or lightest earbuds around, but Google’s elimination of the integrated wing tips (or “stabilizer arcs”) from prior models results in better overall comfort. <br /> <br />
<span className="font-bold">Pros:</span> <br />
Good active noise cancellation <br />
Improved sound and lengthy battery life <br />
Multipoint support <br />
No more frequent audio dropouts <br />
<span className="font-bold">Cos:</span><br />
Transparency mode isn’t as good as it could be <br />
No support for advanced Bluetooth codecs <br />
Audio fidelity falls short of the very best earbuds <br />
Mic quality could still use some work  <br />

When Google announced these earbuds a couple months ago, it made a point to call out the custom silicon and in-house audio processing that were key to developing the Pixel Buds Pro. Every company with earbuds that are the best at something — think noise cancellation in the case of Sony or transparency mode for Apple — builds its own components to achieve that. According to Google, the Pixel Buds Pro include a custom six-core audio chip (not to be confused with the custom Tensor chip in Pixel phones) that powers the active noise cancellation system, and they also use custom 11-millimeter drivers / speakers tuned by the company’s audio team. 
<br /> <br />
So then, let’s get right to it: noise cancellation on the Pixel Buds Pro is generally quite good for subduing noise at home, the office, or in a coffee shop. But I do notice that some parts of the frequency spectrum (like street noise from passing cars) cut through louder than they would on the AirPods Pro or Sony’s WF-1000XM4 buds. Since the ANC runs on Google-developed algorithms, it’s feasible that firmware updates could further enhance the noise-canceling strength of the Buds Pro. As it stands today, the ANC is more than competent — even if it won’t be bumping Sony or Bose from the top of the mountain.
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

export default PixelBudsDetails;