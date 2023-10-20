import Swal from "sweetalert2";
const MacbookAirDetails = ({ product, data, setData }) => {
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
            <img className="w-full md:w-2/3 mx-auto" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-center text-red-600 font-bold text-4xl">
              {name}
            </h3>
            <div className="pt-10 space-y-5">
              <p className="text-gray-600 text-lg font-medium">
              Gone are the days of the signature wedge design on the MacBook Air. The new model now has the same boxy chassis as the latest high-end MacBook Pro models, which in my eyes gives it a more sophisticated look. But it's much lighter. At just 2.7 pounds, I tend to lift it with too much force because I'm not used to carrying around such a lightweight machine. (It's thinner and lighter than the 2020 MacBook Air too!)
<br />
It might share a similar look, but sadly, you won't get the same connectivity upgrade. The new MacBook Air only has two USB-C ports, a 3.5-mm headphone jack, and—thankfully—a MagSafe port for charging. (No HDMI or SD card slot.) As someone who mainly uses a MacBook for writing, emails, video calls, and Netflix, the lack of ports didn't bother me, but it would have been nice. 
<br />
If you're coming from an older Air or 13-inch MacBook Pro, you'll likely most appreciate the new display. Sort of. It's still an LCD panel stuck at 60 Hz, but Apple has bumped the brightness a smidge, and I had zero trouble reading the screen when I worked outside in my backyard. The screen size also goes from 13.3 to 13.6 inches, thanks to slimmer borders around the display. It sounds like a small boost, but I noticed (and appreciated) the larger real estate. Annoyingly, this MacBook can still only connect to one external monitor (a limitation on the M1 MacBook Air as well). Not great if you want to reap the benefits of a multiscreen setup.
<br />
Just like on the 14-inch MacBook Pro, there's a notch carved into the center top of the screen, which houses the 1080p webcam, but it doesn't bother me. You can use a dark background to hide it, and it also vanishes when you have an app in full-screen mode. If the notch is what enabled Apple to finally upgrade the webcam, I'm all for it. It's finally 1080p, so I look sharper in my video calls, though I have noticed Apple adds a skin-smoothing effect. 
<br />
The Magic Keyboard feels just as good to type on as Apple's other recent laptops (no need to worry about a broken keyboard anymore), but take a closer look and you might notice that the speakers have been removed from each side of the keyboard. Instead, the quad-speaker sound system and three-microphone array are integrated between the keyboard and display. The audio is pretty solid for a laptop, but it can sound muffled at times. <br />

This MacBook is powered by Apple's new M2 chip, which packs an 8-core CPU and up to a 10-core GPU, which is two more than its predecessor for an edge in graphics performance. (The base model comes with an 8-core GPU.) I tested the model with an 8-core CPU, 10-core GPU, and 8 gigabytes of unified memory, which you can also upgrade to 24 gigabytes. 
<br />
The M2 is great for most day-to-day tasks, but this isn't the machine to buy if you're frequently editing multiple streams of 4K video or rendering 3D content—stick with the MacBook Pro and the M1 Pro chips instead. On a standard workday, I'd have a few apps open simultaneously, including Slack, Spotify, Messages, and Telegram, plus I'd also have about 15 tabs open on Google Chrome. The MacBook Air ran smoothly.
<br />
But it was during hectic days, like covering Prime Day, that I noticed its limitations. Run all of those aforementioned apps and bump the Chrome tab count to 30, and the Air struggles. Scrolling, switching tabs, minimizing and expanding windows—it all felt sluggish. I even saw the dreaded rainbow wheel a few times, which made me conscious about how much I was doing at once. I closed any tabs or apps I didn't need. This experience felt different from the 2020 M1 MacBook Air, which, unless I'm looking through rose-colored glasses, never once presented me with the rainbow wheel.  
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

export default MacbookAirDetails;