import Swal from "sweetalert2";
const PixelbookGoDetails = ({ product, data, setData }) => {
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
              Google’s new Pixelbook Go is the ultimate Chromebook for anyone that doesn’t want to spend a grand on Google’s previous Pixelbook. Its astonishing battery life and amazing keyboard are just two of this Chromebook’s selling points, and it has very few downsides for both average users and dedicated fans of Google and Chrome OS. <br /> <br />
              
              <span className="font-bold">Pros:</span> <br />
              Incredible battery life <br />
Amazing ‘Hush’ keyboard <br />
Rare 1080p webcam <br />
Excellent design <br />
              <span className="font-bold">Cons:</span> <br />
              No biometric login <br />
Iffy pricing at mid- to- high-end <br /> <br />
Google Pixelbook Go has made Google’s otherwise pricey product line just a bit more accessible to consumers. That makes it a welcome addition to the roster, especially for budget-minded users who cannot afford Google Pixelbook’s premium price. 
<br /> <br />
However, to keep its price relatively low, certain sacrifices need to be made. Google Pixelbook Go is missing out on the more premium features like biometric login. It’s not exactly the cheapest Chromebook on the market, either. Plus, while its base configuration is affordable, the higher you climb up its specs ladder, the more expensive it gets, making it less of a great value.
<br /> <br />
With such compromises, is the Google Pixelbook Go even worth taking a look? It’s not without merit. It boasts a 1080p webcam, great battery life, and an impressive keyboard, and they’re more than enough to convince those looking to move on from their tablets or very dated laptops. And, it’s still the most affordable way into the Google product line. 
<br /> <br />
Even if those with the dough will still find the flagship Pixelbook to be their go-to option, for many, the Go is the ideal choice.


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

export default PixelbookGoDetails;