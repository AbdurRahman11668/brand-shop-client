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
            <img className="w-full md:w-2/3 mx-auto" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-center text-red-600 font-bold text-4xl">
              {name}
            </h3>
            <div className="pt-10 space-y-5">
              <p className="text-gray-600 text-lg font-medium">
              While the Apple AirPod Max is a great pair of headphones with best-in-class active noise canceling (ANC) and a good sound signature, it also has a few annoying quirks that make it very obviously an Apple product. If you live in the Apple ecosystem and already love your AirPods Pro, then the AirPods Max is more of the same just in a pair of over-ears.
              <br />
              Nice design and solid build quality <br />
Amazing active noise canceling and transparency mode <br />
Comfortable ear pads and fabric headband <br />
Decent battery life <br />
Button and digital crown are great to use <br />
Good sound quality with no distortion <br />
Great connection strength with Bluetooth 5.0 <br />
Ever since acquiring Beats by Dre for an ungodly amount of money in 2014, it’s been obvious Apple has its eye on the consumer audio space. The original AirPods was a hit despite being terrible, and the AirPods Pro is actually among the best true wireless earbuds you can get. So when Apple announced its long-awaited over-ears, the AirPods Max, we were excited but skeptical.
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

export default AirPodsMaxDetails;
