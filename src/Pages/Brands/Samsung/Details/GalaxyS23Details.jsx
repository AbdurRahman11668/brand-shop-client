import Swal from "sweetalert2";
const GalaxyS23Details = ({ product, data, setData }) => {
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
                If the Samsung S22 Ultra was the ultimate evolution of a
                slab-style smartphone, then the Galaxy S23 Ultra is a victory
                lap — everything that the S22 was and a little extra.
                <br /> <br />
                The S23 Ultra offers a handful of updates and a new main camera
                sensor. There are no groundbreaking new features. It doesn’t
                fold in half. Until someone invents radically improved battery
                technology or holographic displays, that’s just going to be the
                case for the Ultra for the foreseeable future.
                <br />
                The other side of that coin is that the S22 Ultra was already
                really good, and the S23 Ultra is a little better. Performance —
                delivered by a custom Snapdragon 8 Gen 2 chipset — is whip fast.
                The updated camera system is capable of stunning feats. And a
                couple of small tweaks — the phone’s slightly reshaped side
                rails and screen — have a big impact on the device’s likability.{" "}
                <br />
                That’s all good news. The bad news is that it remains a very
                expensive device at $1,200, which is a bit more than a $1,099
                iPhone 14 Pro Max and a big leap from the Pixel 7 Pro’s $899
                starting price. There are some familiar sore spots with Samsung
                software, like its insistence on including its own app store in
                addition to Google’s. And although the camera system can produce
                stunningly good images, it occasionally makes weird choices and
                comes up with a photo that’s just downright bad.
                <br />
                But if you can stomach the price and the occasional weird photo,
                then I think you’ll find the S23 Ultra’s maximalism highly
                rewarding. <br /> <br />
                <span className="font-bold">THE GOOD:</span> <br />
                Exceptional performance <br />
                Versatile cameras with incredible zoom <br />
                Useful S Pen and connectivity features <br />
                Lovely boxy frame and high-quality build <br />
                <br />
                <span className="font-bold">THE BAD:</span> <br />
                Expensive <br />
                Image quality is inconsistent <br />
                Samsung software remains quirky <br /> <br />
                Looking at the S22 Ultra and S23 Ultra side by side, you’ll see
                the slightly different shape on this year’s model — a display
                with a little less curve at the edges and side rails that are
                flatter. It doesn’t sound like much, but I think it makes a big
                difference. It feels much more secure in my fingers every time I
                pick it up off a table than the curvier S22 Ultra did. I
                realized I was actually bracing myself for it to slip out of my
                grasp every time I picked it up, which happened a lot with its
                predecessor. The S23 Ultra feels more secure as I pick it up but
                also in my hand as I’m using it, too, which is especially
                important when you’re writing on it with the S Pen.
                <br />
                This slight flattening makes the S23 Ultra look a little boxier
                than the S22 Ultra, and you know what? I like it. In the cream
                color especially, it’s kind of late-’80s chic. I don’t know how
                else to describe it except for fancy. It feels worthy of a high
                price tag.
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

export default GalaxyS23Details;
