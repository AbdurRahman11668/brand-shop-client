import Swal from "sweetalert2";

const Pixel8ProDetails = ({ product, data, setData }) => {
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
              Google’s pitch for the Pixel phone in recent years has centered on how smart the phone is — that it’s one step ahead of you and can help take some of the pain out of your daily chores. The Pixel 6 and 7 didn’t quite live up to that vision, but these Pixel 8 devices feel like the first phones that could turn the sales pitch into a reality.
 <br /> <br />

Right now, they’re better phones than their predecessors in some appreciable ways. And the potential of these devices is more compelling — the trouble is, Google is asking for a lot of your trust to get there.
 <br /> <br />

The Pixel 8 and 8 Pro are better phones than their predecessors, but they’re also more expensive. They each see a $100 price hike, which puts the Pixel 8 at $699 and the Pixel 8 Pro at $999. Gone are the days of the standard Pixel passing as an upper-tier midrange phone — it’s all flagship, baby. <br /> <br />
<span className="font-bold">Pros:</span> <br />
Handy manual camera controls <br />
Seven years of OS upgrades promised <br />
Useful, if troubling, AI photo editing tools <br />
Face Unlock now works for payments <br /> <br />
<span className="font-bold">Cos:</span><br />
Gimmicky temperature sensor <br />
Tensor G3 still runs hot occasionally <br /> <br />

On the other side of the equation, you’ll also get more years out of the devices, in theory. They’re both slated to receive seven years of software updates — and not just security patches. Google is committing to seven years of OS platform upgrades for these phones, which is a major improvement over the three OS updates the Pixel 6 and 7 were promised. It’s one of the best software support policies on any phone, and that, frankly, rules. <br /> <br />

There are more features coming. The Pixel 8 Pro will get a couple of potentially powerful photo and video editing tools in December 2023. And both phones will be eligible for Assistant with Bard when it’s available for testing in the near future. If it’s effective, the addition of Bard’s generative AI capabilities could totally transform Google Assistant from a tiny repeating machine into a true assistant.  <br /> <br />

But these are all ifs and coulds and promises. Even if you’re cool entrusting Google with the amount of data you need to reap the benefits of all these tools, there’s no guarantee they’ll last: this is the company that promised Pixel Pass subscribers easy device upgrades every two years and then canceled the program just shy of the two-year mark. It has a good track record with promised Pixel software updates, but you can’t blame anyone for giving any Google claim a skeptical eye.
 <br /> <br />
In the meantime, the Pixel 8 and 8 Pro contain some small but important upgrades over the previous models. The standard Pixel 8 finally gets a 120Hz refresh rate display. On both phones, you can, at last, use Face Unlock for payments and password managers — also important to the passwordless passkey future Google is working toward. The device’s interpretation of natural language is better, and it makes voice typing a much handier tool. And there’s a suite of new AI-infused image and video editing tools that will make you question the very nature of “truth” in photography. Icky? A little bit, but speaking as a parent who takes lots of pictures of their toddler, they’re great. <br /> <br /> 

Both phones get a display update this year, but the Pixel 8’s is most notable: a jump from a 90Hz screen to a 120Hz maximum refresh rate. Google calls this an “Actua” display; the Pixel 8 Pro has a “Super Actua” screen with a variable refresh rate from 120Hz down to 1Hz to maximize power efficiency. The Pixel 8’s top refresh rate is off by default, so you’ll need to enable it in the settings menu. You should because it’s noticeably smoother.
 <br /><br />
Both screens get a little brighter this time around, too. The Pixel 8 will go up to 2,000 nits in high brightness mode, and the 8 Pro reaches an impressive 2,400 nits — that’s compared to 1,400 and 1,500 nits on the Pixel 7 and 7 Pro, respectively. And it’s great! Until the device gets too hot and dims again. Using the Pixel 8 Pro on a hot day in direct sun, I saw it reach its peak brightness for just a few minutes before it ramped back down. The display was still usable even at the lower brightness, but don’t count on being able to access that highest brightness setting for too long in hot conditions.
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

export default Pixel8ProDetails;
