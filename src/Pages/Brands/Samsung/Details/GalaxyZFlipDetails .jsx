import Swal from "sweetalert2";

const GalaxyZFlipDetails = ({ product, data, setData }) => {
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
                Being able to declare an absolute category winner is rare in the
                smartphone space. But in the case of the Samsung Galaxy Z Flip
                5, it’s actually quite easy: this is the best flip-style folding
                phone you can buy.
                <br /> <br />
                It’s a small category, so that helps. It’s even smaller if
                you’re looking at options available in the US since your choices
                are basically the Flip 5 or Motorola’s Razr Plus. They have a
                lot in common, including the fact that they both offer a much
                bigger, much more useful cover screen than their predecessors.
                They share the same $999 price tag, too. But Samsung’s flip
                phone is more durable, its cover screen widgets are more useful,
                and its camera system is better overall. <br /> <br />
                <span className="font-bold">THE GOOD:</span> <br />
                Useful cover screen and widgets <br />
                Rated IPX8 for full water resistance <br />
                Long software shelf life with five years of security support{" "}
                <br /> <br />
                <span className="font-bold">THE BAD:</span> <br />
                So-so battery life <br />
                Running apps on the cover screen is tricky <br />
                Long-term durability is unknown <br />
                That’s not to say that the Flip 5 is the perfect flip-style
                phone or the best phone you can buy for a thousand bucks. It’s
                durable for a foldable, but that big “X” in its IPX8 rating
                means there’s no guarantee against dust intrusion — and dust in
                a folding phone spells real trouble. You’ll find better camera
                hardware on most other $999 slab-style phones, including a
                telephoto lens, and you’ll struggle to get through a full day of
                heavy use with the Flip 5 on a single battery charge. If any of
                the above is a major concern, then a flip-style phone might not
                be for you. But if you are willing to put up with these
                tradeoffs, then the Galaxy Z Flip 5 is an excellent device.
                <br />
                The flip form factor is particularly good for someone who wants
                to get more of the basic chores done on their phone without
                getting sucked into mindlessly checking app notifications and
                scrolling through news feeds unintentionally. The bigger,
                improved cover screen on the Flip 5 makes it possible to respond
                to a text quickly, glance at walking directions, or check the
                weather without coming face-to-face with absolutely everything
                on your phone. It’s a powerful tool in the fight for your
                attention, and the Z Flip 5 is hands-down the best option in its
                class. <br />
                Let’s start with the main attraction: that 3.4-inch cover screen
                (excuse me, Flex Window, according to Samsung). That may not
                sound like much, but it’s more than 3.5 times bigger than the
                1.9-inch screen on the Z Flip 4. It’s like getting out of a
                Smart Car and into a sedan — buckle up because you can go places
                now. Rather than just checking notifications, you can use a full
                QWERTY keyboard to respond to texts. You can see your daily
                schedule alongside a monthly calendar in the same view.
                <br />
                Samsung provides a bunch of handy widgets you can enable,
                disable, and rearrange to your liking. They’re excellent and
                take great advantage of the available screen real estate; the
                weather widget shows you current conditions at a glance, and you
                can scroll down for the next week’s forecast. Tapping on a
                calendar event brings up all the details. It’s all as the good
                lord intended — and a much better experience than on the
                Motorola Razr Plus.
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

export default GalaxyZFlipDetails;
