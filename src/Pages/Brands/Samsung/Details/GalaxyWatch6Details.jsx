import Swal from "sweetalert2";
const GalaxyWatch6Details = ({ product, data, setData }) => {
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
                I tested the Galaxy Watch6 Classic, and I've had a pleasant
                experience with it overall. Its 47-mm size is large but comfy on
                my wrist, with a minimal gap under the lugs. There are actually
                four Galaxy Watch6 models, and I appreciate this because they
                all have varying prices and, more importantly, sizes. I am a
                6'4" man, and my wrists and palms are huge—they're better suited
                to the larger models. The Galaxy Watch6 has 40- or 44-mm case
                size options, and then there's the Galaxy Watch6 Classic, which
                lets you choose between 43- and 47-mm cases.
                <br /> <br /> The standard Watch6 and Watch6 Classic differ in two
                ways outside of screen sizes and battery life. The latter is
                made of more durable stainless steel, whereas the Watch6 sticks
                with aluminum. The Classic also gets the fun rotating mechanical
                bezel that I love, but the basic Watch6 uses a touch bezel,
                which Samsung used on last year's models. I really dislike the
                touch bezel—mechanical all the way! These models are priced from
                $300 for the smallest Watch6 all the way up to $430 for the
                largest Classic, but you can also opt for the LTE model, which
                ticks the price up.
                <br /> <br />
                Everything else is more or less the same, from the 5-ATM and
                IP68 water resistance to built-in GPS support. Samsung has
                integrated a little button into the 20-mm straps you can push to
                release them from the case if you want to swap them out, but I
                found that it really requires some force. I wish these buttons
                were a smidge bigger. I swapped the silicone band out for the
                much nicer fabric band, but the straps aren't proprietary. You
                can still use any 20-mm straps you want.
                <br />
                Smartwatches are passive devices that I mostly interact with
                when they pester me. I've used the Watch6 Classic to respond to
                messages, delete notifications, and take the occasional call
                when my hands are full of grocery bags. (I used my chin to
                rotate the mechanical bezel to the right to accept the call!)
                <br />
                Samsung Galaxy Watch6 and Watch6 Classic Samsung Galaxy Watch6
                and Watch6 Classic
                <br />
                RATING: 7/10
                <br />
                $300 AT SAMSUNG (WATCH6) $430 AT SAMSUNG (WATCH6 CLASSIC)
                <br />
                If you buy something using links in our stories, we may earn a
                commission. This helps support our journalism. Learn more.
                Please also consider subscribing to WIRED
                <br />
                The Watch6 runs the new Wear OS 4 version, and the app selection
                on Google's smartwatch platform is slowly improving. I've used
                it to check my Google Keep notes, and I love using the Google
                Home app to control my living room fan and the window AC in my
                office. I really want to see more messaging apps join the
                platform, though. WhatsApp is now available, which is great for
                starting new conversations if your phone is in another room, but
                can Telegram come back? Or Facebook Messenger?
                <br />
                One new crucial addition in Wear OS 4 is the ability to finally
                switch phones without having to completely reset the smartwatch.
                As someone who tests a new phone once every few weeks, I have
                been asking for a feature like this for years, and I am so happy
                to see it here. Naturally, when I was switching back to the
                Pixel Fold from the Galaxy Z Fold5, it took a few minutes and
                everything was set up exactly the way it was before within
                minutes. We live in the future.
                <br />
                Wear OS watches have always been laggier than Apple Watches, and
                while Samsung and Google have made strides to reduce the
                stutters you see while moving through the operating system, it's
                still not as buttery smooth as using an Apple Watch. Even with
                the upgraded Exynos W930 chipset inside, you will see some
                slowdowns here and there.
                <br />
                Classic Health I like using smartwatches to see basic health
                metrics too—mostly the ability to see what my heart rate is at
                any given moment and to track how little sleep I get. There's
                also the peace of mind with features like fall detection (you
                have to manually turn this on), and the option to quickly
                contact 911 by pressing the top side button five times. If you
                menstruate, you can also take advantage of
                skin-temperature-based cycle tracking.
                <br />
                The Watch6 series now has FDA-cleared irregular heart rate
                notifications too, along with the existing electrocardiogram,
                which is a nice addition. Weirdly, you still need to download a
                separate app for these functions (Samsung Health Monitor). There
                is blood pressure monitoring, but it's not available in the US,
                and it's not cleared by the FDA. Just keep in mind that this
                trio of features is restricted to people who pair the watch with
                a Samsung phone. If you use another Android phone like a Google
                Pixel, you won't be able to use the ECG or get irregular heart
                rate alerts.
                <br />
                One area where Samsung does fare well is battery life, at least
                when compared to smartwatches like the Apple Watch Series 8 and
                the Google Pixel Watch. Yes, there are Garmins, Coros, and
                Suunto watches that can last much longer, but the 47-mm Classic
                lost only half its battery after a full day of use. Come
                morning, it had around 30 percent left, which was enough to last
                roughly until 5 pm the next day. This is with the always-on
                display, so when I turned it off, the battery comfortably
                stretched to two full days (with activity tracking thrown in
                there). It's nice not having to charge the battery every single
                day, but keep in mind that this is the largest of the Watch6
                models. That means every other Watch6 will not last as long,
                which is a shame.
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

export default GalaxyWatch6Details;
