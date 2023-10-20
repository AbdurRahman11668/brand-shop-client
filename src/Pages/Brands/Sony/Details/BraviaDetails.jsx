import Swal from "sweetalert2";
const BraviaDetails = ({ product, data, setData }) => {
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
                The Sony X75K is an entry-level 4k TV released in 2022. It sits
                below the Sony X80K/X80CK, and mainly competes with other
                entry-level TVs like the TCL 5 Series/S555 2022 QLED, the
                Hisense U6/U6H, and the Samsung Q60B QLED. As an entry-level TV,
                it has very few extra features, but it offers the same great
                Google TV smart interface as the higher-end Sony TVs. It's
                powered by Sony's entry-level 4K Processor X1, and it offers a
                few motion enhancement features powered by Sony's 4K X-Reality
                PRO processor. <br /> <br />
                The Sony Bravia X75K is a decent TV overall. It's best for
                watching shows or sports in a moderately-lit room, as it doesn't
                look very good in the dark due to its low contrast ratio and
                mediocre black uniformity. It has a wide viewing angle, making
                it a good choice for a wide seating area, as the image remains
                consistent from the sides. It's good for gaming thanks to its
                low input lag and decent response time, but it doesn't support
                any advanced gaming features. Sadly, it's unsuitable for use as
                a desktop PC monitor, as there's high input lag in the only mode
                that supports chroma 4:4:4, and there's a distracting pixel
                inversion issue with some content. <br />
                <span className="font-bold">PROS:</span> <br />
                No issues upscaling lower-resolution content. <br />
                Image remains consistent from an angle. <br />
                Amazing accuracy before calibration. <br />
                Satisfactory reflection handling and decent peak brightness to
                fight glare. <br />
                <span className="font-bold">CONS:</span> <br />
                Blacks are raised and look washed out. <br />
                Can't smooth out low quality content. <br />
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

export default BraviaDetails;
