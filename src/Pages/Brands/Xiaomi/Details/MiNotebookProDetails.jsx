import Swal from "sweetalert2";
const MiNotebookProDetails = ({ product, data, setData }) => {
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
              Xiaomi Mi NoteBook Pro Laptop Review: Handicapped Core i7-11370H limits an otherwise good device <br /> <br />
All that is aluminum isn't fast. The Xiaomi Mi NoteBook Pro seeks to be a worthy mid-ranger with a premium all-aluminum chassis, a good 2.5K 16:10 display, and a decent spec sheet. While the Mi NoteBook Pro definitely gets the job done for the most part, a thorough investigation reveals that Xiaomi is not able to extract the maximum possible performance from the Core i7-11370H for the ₹73,999 (US$993) asking price. <br /> <br />

Since the launch of the Mi NoteBook 14 Horizon Edition in 2020, Xiaomi has been trying to make a mark for itself in the mid-range laptop niche. A few months ago, Xiaomi introduced two new laptops in the Indian market — the Mi NoteBook Pro and the Mi NoteBook Ultra. We have with us the Mi NoteBook Pro for review.
<br /> <br />
The Mi NoteBook Pro is a 14-inch laptop that resembles the RedmiBook Pro 15 in more ways than one. Our test sample is powered by the Intel Tiger Lake-H35 Core i7-11370H, 16 GB DDR4-3200 RAM, and a 512 GB NVMe SSD, which is the maximum configurable option in the Pro series. This configuration will set you back by ₹73,999 (US$993).
<br /> <br />
In this review, we take the Mi NoteBook Pro for a spin and see whether the laptop performs as well as it looks.<br /> <br />
Processor: Intel Core i7-11370H 4 x 3.3 - 4.8 GHz, 64 W PL2 / Short Burst, 28 W PL1 / Sustained, Tiger Lake-H35 <br />
Graphics adapter: Intel Iris Xe Graphics G7 96EUs, 30.0.101.1191 <br />
Memory: 16 GB   <br />
, DDR4-3200 Dual-Channel, Timings: 22-22-22-52 <br />
Display: 14.00 inch 16:10, 2560 x 1600 pixel 216 PPI, Panda LM140GF1L02, Oxide TFT-LCD  <br />FFS, 178° Wide-viewing angle, glossy: no, 60 Hz <br />
Mainboard: Intel Tiger Lake-UP3 PCH-LP <br />
Storage: YMTC PC005 Active 512GB, 512 GB  
, 438 GB free <br />
Weight1.4 kg ( = 49.38 oz / 3.09 pounds) ( = 0 oz / 0 pounds)

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

export default MiNotebookProDetails;