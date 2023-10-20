import Swal from "sweetalert2";
const WatchSeries7Details = ({ product, data, setData }) => {
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
                An entirely iPhone-free Apple Watch experience is not a question
                of if, but when. With its slimmer bezels and bigger displays,
                the Apple Watch 7 became the most usable standalone smartwatch
                yet — before being replaced by the Apple Watch Series 8, that
                is.
                <br />
                Apple’s 7th-gen smartwatch was mostly an incremental upgrade
                from the Apple Watch 6, maintaining an 18-hour battery life, the
                same CPU and adding no new health features. But the enlarged
                display was game-changer, and made it difficult to return to
                previous-generation models. The Series 7's big screen adapted
                wearable computing for more everyday applications, making it
                practical to be productive from your wrist.
                <br />
                This Apple Watch 7 review covers all the changes, from minor to
                major, that once made it best smartwatch you can buy. If you can
                find the Apple Watch 7 on discount as retailers clear stock, it
                could make sense to pick one up. Just be sure to check out the
                differences between the Apple Watch 8 vs. Apple Watch 7.
                <br />
                The Apple Watch 7 started at $399 for the 41mm model. The larger
                45mm model started at $429. For cellular support, which lets
                your Apple Watch optionally work untethered from your iPhone,
                you would've spent $499 for the 41mm size or $529 for the 45mm
                size. Stainless steel cases started at $699, while titanium
                cases started at $799.
                <br />
                The Apple Watch 7 features the product's first real redesign
                since the Apple Watch 4. Given, it's not a major change — the
                iconic curved squircle holds strong — but it's clear Apple
                wanted a softer overall aesthetic for its smartwatch.
                <br />
                First, the corners are ever-so-slightly rounder, while the
                display meshes into the chassis more seamlessly than it does on
                the Series 6. I probably wouldn't notice these adjustments if I
                hadn't compared the Apple Watch 7 vs. Apple Watch 6
                side-by-side, though. And even with the larger Apple Watch 7
                sizes (41mm and 45mm) the smartwatch doesn't actually look
                bigger to the naked eye. Anyone have a micrometer? <br />
                You can better tell the Series 7 and Series 6 apart by the Apple
                Watch 7 colors, which are all new. I'm testing the Green model.
                Midnight is kind of black, with a subtle hint of blue. Starlight
                is a stunning blend of silver and gold. While Apple offered Blue
                and Red last year, they're slightly brighter now. If you want
                more of a neutral metal, you'll need to shop stainless steel or
                titanium versions. That doesn't bother me, but you're entitled
                to be particular about how something you wear every day looks.
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

export default WatchSeries7Details;
