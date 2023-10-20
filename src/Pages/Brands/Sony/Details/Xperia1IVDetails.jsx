import Swal from "sweetalert2";
const Xperia1IVDetails = ({ product, data, setData }) => {
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
                The Sony Xperia 1 IV brings some stellar creative features, with
                its continuous optical zoom wowing for photography and its
                ability to shoot 4K 120fps footage on all three cameras a great
                tool for video. It’s also a well-rounded phone with a
                good-looking display, powerful processor and long-lasting
                battery. However it’s rough around the edges with a fingerprint
                scanner that struggles to pick up your print, and a price that
                will likely put off many buyers. <br /> <br />
                It’s hard to know whether to class this Sony Xperia 1 IV review
                as an analysis of a consumer-grade smartphone or a
                professional-level creativity tool designed for working artists
                As the former, it’s almost impossible to recommend, but if you
                treat it as the latter, it’s hard to put down.
                <br />
                This is an obscenely expensive phone that just can’t compete
                with rivals like the Samsung Galaxy S22 Ultra or iPhone 13 Pro
                Max for ‘average’ phone fans - it has a clunky design and
                unassuming software, and it doesn’t rely on AI to take vibrant
                and captivating photos. <br />
                But Sony knows that, and it isn’t aiming at the kind of
                consumers who buy the first handset they see on a store shelf.
                No, the Xperia 1 series is aimed at professional ‘content
                creators’ (for lack of a better, not-cringe-inducing term) with
                a range of bespoke photography, videography and, new to the Mark
                4, audio recording features. <br />
                This is the fourth-gen version of Sony’s top-end line of Android
                smartphones (what gave it away?), following on from the Sony
                Xperia 1 III, and accompanied by a mid-range Xperia 10 IV. These
                premium devices rarely have huge changes over their
                predecessors. Sony instead opts to tweak specs and bring useful
                new features for creatives.
                <br />
                The big new feature here is the continuous optical zoom, with
                the telephoto lens moving between 3.5x and 5.2x without having
                to use digital zoom (which is basically just cropping). It’s a
                really useful mode for photographers who like long-range shots.
                <br />
                Other big upgrades include the rollout of 4K and 120fps video
                recording on the three rear and one front-facing camera, an
                audio recording app that lets you layer, clean and mix sound,
                functions for mobile games streaming and a bigger battery than
                before.
                <br />
                Sony’s phones are already considered some of the best devices
                for creatives, and the new additions to the Xperia range ensure
                that Sony is keeping head-to-head with Samsung and Apple for
                that crown - though admittedly the Xperia’s camera is designed
                for more technically-minded users than the Galaxy or iPhone
                point-and-shoots.
                <br />
                There are also some rough edges that even creative users can’t
                overlook, which means we can’t give this phone a wholly glowing
                review - you’ve already seen that 4/5, haven’t you?
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

export default Xperia1IVDetails;
