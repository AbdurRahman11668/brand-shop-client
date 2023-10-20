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
            <img className="w-2/3 mx-auto" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-center text-red-600 font-bold text-4xl">
              {name}
            </h3>
            <div className="pt-10 space-y-5">
              <p className="text-gray-600 text-lg font-medium">
                M1 chip offers a performance boost. Front-facing camera comes
                with Center Stage. 5G connectivity (sub-6 only). Solid battery
                life. Same price as the iPad Air 2020.
              </p>
              <p className="text-gray-600 font-medium">
                The 2022 iPad Air sports nearly the same bezel-free design, a
                10.9-inch display with 500 nits of brightness, a Touch ID top
                button, USB-C port, 12-megapixel rear camera, and an array of
                vibrant colors. And while repetition is typically prone to
                criticism, the iPad Air’s redesign is still fresh enough that
                this new Air doesn't feel boring. The colorful tablet has a
                sleek look that begs to be carried around without a case.{" "}
              </p>
              <p className="text-gray-600 font-medium">
                But if you do want to use a case for additional protection,
                Apple's proprietary smart connector on the back allows you to
                magnetically attach the iPad to Apple's Smart Keyboard, Smart
                Folio, and Magic Keyboard. And since the new iPad Air has the
                exact same dimensions as the 2020 version, you won't have to buy
                new accessories if you're upgrading.{" "}
              </p>
              <p className="text-gray-600 font-medium">
                It's also worth noting that if you want to get the most out of
                your slim new computer and enjoy the complete iPad Air
                experience, you'll have to splurge for the Magic Keyboard ($299)
                and second-generation Apple Pencil ($129). Adding those things
                to the $599 64-GB iPad Air brings your total to $1,028.
                Meanwhile, the M1-powered MacBook Air starts at $999. So you
                might want to look into third-party accessories.
              </p>
              <p className="text-gray-600 font-medium">
                The iPad Air comes with 5G connectivity. It doesn't have support
                for the faster millimeter-wave 5G service, but it supports the
                more prevalent sub-6 5G networks, which give you a slight speed
                boost over LTE. To get the 5G connectivity you will of course
                have to purchase the cellular model of the iPad Air, which
                starts at $749. On top of that, you'll need a cellular plan.{" "}
              </p>
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

export default PixelbookGoDetails;