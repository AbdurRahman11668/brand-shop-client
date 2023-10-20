import Swal from "sweetalert2";
const CurvedMonitorDetails = ({ product, data, setData }) => {
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
              Curved screen <br />
Great sRGB color coverage <br />
Bright for a budget monitor <br />
Mini-joystick controller <br />
Panel Size (Corner-to-Corner):	23.5 inches <br />
Native Resolution:	1920 by 1080 <br />
Aspect Ratio:	16:9 <br />
Low priced and versatile, the Samsung 24-Inch CF396 Curved LED Monitor ($149.99) would be at home in an office, a study, a living room, or a game room. It provides some convenience features that are usually limited to costlier monitors. And our testing showed the panel to be bright, with excellent color coverage for a monitor of its price. The CF396 offers enough value to make it a strong PCMag Editors' Choice award winner for budget curved monitors.
<br />
The glossy black CF396 is lightweight and fairly compact, measuring 16.7 by 21.6 by 8.6 inches (HWD) and weighing 6.8 pounds. All four bezels are chunky, nearly half an inch thick. The monitor rests on a V-shaped base that connects to the cabinet by a shaft that angles upward from the back.
<br />
The CF396's 23.5-inch vertical alignment (VA) screen supports a native resolution of 1,920 by 1,080 pixels (1080p), at a 16:9 widescreen aspect ratio. VA panels offer high contrast ratios, thanks to their ability to render deep blacks, as well as wide viewing angles. The CF396 is rated at 178 degrees for both vertical and horizontal angles, meaning that you can view the screen from off to the side, or from above and below, with minimal color shift or distortion.

              </p>
            <button className=" text-red-600 font-semibold text-lg">{price}</button>
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

export default CurvedMonitorDetails;
