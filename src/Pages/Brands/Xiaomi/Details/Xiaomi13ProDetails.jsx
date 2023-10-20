import Swal from "sweetalert2";
const Xiaomi13ProDetails = ({ product, data, setData }) => {
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
              It's awkward to be a middle child, they say. You aren't the first born, you aren't the youngest, you're just there, in the middle, constantly forgotten - the firstborn is the oldest and gets all the accolades, while the youngest is the smallest, requiring a lot of attention. You, on the other hand, are neither.
 <br /> <br />
This is the position the Xiaomi 13 Pro finds itself in. The 13 Ultra is the accolade-collecting overachiever, the vanilla 13 is the only one of the series that's going to work well with small hands (or people who simply prefer smaller - if not small per se - phones), and the 13 Pro... also exists. <br /> <br />
That's what the situation looks like from afar, at least. Look a little closer, use the 13 Pro for an extended amount of time like we did for this review, and your perception changes. It's much more than an awkward middle child. In fact, it's arguably almost equal to the much praised 13 Ultra, if you don't really care about having the best of the best when it comes to cameras and screen brightness.
 <br /> <br />
So despite what a cursory look at the three models might have you believe, we don't think the 13 Pro was simply launched so that there wouldn't be a huge price and spec gap between the 13 and the 13 Ultra. It's not just awkwardly assigned to arbitrarily fill that gap in the portfolio, it stands on its own right, and we'll let you know all the ways in which it does in this long-term review. <br /> <br />
Truth be told, the Xiaomi 13 Pro surprised us, and that rarely happens anymore. When we say 'surprised', we mean in a good way, mostly - we definitely don't think you should sleep on this one. It does however have some now-unfortunately-standard for Xiaomi issues that we'll also describe, just so you know exactly what you're getting if you are thinking of picking one up. So, without further ado, let's get to it. Join us over the next few pages as we tell you what it was like to live with the Xiaomi 13 Pro day in and day out as our one and only smartphone.
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

export default Xiaomi13ProDetails;