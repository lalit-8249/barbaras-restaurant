import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Star,
  Menu,
  X,
  Mail,
  ChefHat,
  Leaf,
  Quote,
  Clock,
  CalendarDays,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Instagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Twitter(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" {...props}>
      <path d="M22 4.01c-.77.35-1.6.58-2.46.69a4.2 4.2 0 0 0 1.88-2.31 8.38 8.38 0 0 1-2.66 1.02A4.17 4.17 0 0 0 11.65 7.2c0 .33.04.65.11.96A11.84 11.84 0 0 1 3.15 3.8a4.17 4.17 0 0 0 1.29 5.57 4.08 4.08 0 0 1-1.89-.52v.05a4.17 4.17 0 0 0 3.35 4.09 4.19 4.19 0 0 1-1.88.07 4.18 4.18 0 0 0 3.9 2.9A8.38 8.38 0 0 1 2.75 17.7c-.34 0-.67-.02-1-.06A11.82 11.82 0 0 0 8.16 19.5c7.7 0 11.9-6.38 11.9-11.9v-.54A8.5 8.5 0 0 0 22 4.01z" />
    </svg>
  );
}

const sliderFoods = [
  { title: "Herb Chicken", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80" },
  { title: "Fresh Salad", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80" },
  { title: "Classic Pasta", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80" },
  { title: "Grilled Salmon", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80" },
  { title: "Breakfast Plate", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=700&q=80" },
  { title: "Avocado Toast", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=700&q=80" },
  { title: "Signature Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80" },
];

const menuItems = [
  {
    title: "Classic Breakfast",
    desc: "Farm eggs, toast, sautéed vegetables and house coffee.",
    price: "$14",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Golden Pancakes",
    desc: "Soft pancakes served with butter, berries and maple glaze.",
    price: "$11",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Healthy Lunch Bowl",
    desc: "Seasonal greens, grains, roasted vegetables and light dressing.",
    price: "$13",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
];


export default function App() {
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeDish, setActiveDish] = useState(0);
  const [booking, setBooking] = useState({ name: "", phone: "", guests: "2", date: "", time: "" });

  const bookingText = useMemo(() => {
    if (!booking.name) return "Reserve your table with a calm and premium dining experience.";
    return `${booking.name}, table for ${booking.guests}`;
  }, [booking]);

  const visibleDishes = useMemo(() => {
    return [0, 1, 2].map((offset) => sliderFoods[(activeDish + offset) % sliderFoods.length]);
  }, [activeDish]);

  const nextDish = () => setActiveDish((prev) => (prev + 1) % sliderFoods.length);
  const prevDish = () => setActiveDish((prev) => (prev - 1 + sliderFoods.length) % sliderFoods.length);

  useEffect(() => {
    const timer = setInterval(nextDish, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f3ea] text-[#201810] overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-[#ddd0bf] bg-[#f8f3ea]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif font-semibold tracking-wide text-[#7a2d22]">Barbara's</h1>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7d7064]">Fine Breakfast & Dining</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-[0.18em] text-[#5f5448]">
            <a className="hover:text-[#7a2d22]" href="#story">Story</a>
            <a className="hover:text-[#7a2d22]" href="#menu">Menu</a>
            <a className="hover:text-[#7a2d22]" href="#chef">Chef</a>
            <a className="hover:text-[#7a2d22]" href="#contact">Contact</a>
            <a className="hover:text-[#7a2d22]" href="#about">About</a>
          </nav>

          <button onClick={() => setBookingOpen(true)} className="hidden md:block bg-[#111111] text-white px-6 py-3 rounded-full text-sm uppercase tracking-[0.15em] border border-[#b21f1f] hover:bg-[#b21f1f] transition">
            Book Table
          </button>

          <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>

        {open && (
          <div className="md:hidden bg-[#f8f3ea] border-t border-[#ddd0bf] p-6 flex flex-col gap-4 uppercase tracking-[0.15em] text-sm">
            <a href="#story">Story</a>
            <a href="#menu">Menu</a>
            <a href="#chef">Chef</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 border border-[#d6c3aa] bg-white/70 px-4 py-2 rounded-full text-sm text-[#6d5d4d]">
            <Star className="text-[#a96836] fill-[#a96836]" size={16} />
            Since 1948
          </div>

          <h1 className="mt-7 text-5xl lg:text-7xl font-serif font-semibold leading-[1.02] tracking-[-0.04em] text-[#2a2119]">
            Refined comfort food, served with elegance.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6d5d4d]">
            A formal restaurant landing page with premium sections, smooth motion, compact special cards and a professional food showcase.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => setBookingOpen(true)} className="bg-[#b21f1f] text-white px-8 py-4 rounded-full uppercase tracking-[0.14em] text-sm border border-[#111111] hover:bg-[#111111] transition">
              Reserve Now
            </button>
            <a href="#menu" className="border border-[#111111] bg-[#111111] text-white px-8 py-4 rounded-full uppercase tracking-[0.14em] text-sm hover:bg-[#b21f1f] hover:border-[#b21f1f] transition">
              View Menu
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
          <div className="rounded-[1.75rem] overflow-hidden shadow-2xl shadow-black/15 border border-white">
            <img alt="Restaurant breakfast" src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80" className="h-[430px] lg:h-[520px] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 left-8 right-8 bg-white/90 backdrop-blur rounded-2xl border border-[#eadfcc] p-5 shadow-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[#7a2d22]">Today at Barbara's</p>
            <p className="mt-1 text-lg font-serif">Fresh kitchen, seasonal ingredients and elegant plating.</p>
          </div>
        </motion.div>
      </section>
<section id="story" className="bg-[#090909] text-white py-24 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
    <div>
      <p className="text-red-500 uppercase tracking-[5px] mb-4">Our Story</p>
      <h2 className="text-5xl font-bold mb-6">A Restaurant Built With Taste, Love & Tradition</h2>
      <p className="text-gray-400 leading-8 mb-6">
        We serve fresh, delicious and beautifully prepared food with premium ingredients.
        Every dish is made to give our customers a memorable restaurant experience.
      </p>
      <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-semibold">
        Explore More
      </button>
    </div>

    <div className="grid grid-cols-2 gap-5">
      <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" className="rounded-3xl h-72 w-full object-cover" />
      <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9" className="rounded-3xl h-72 w-full object-cover mt-10" />
    </div>
  </div>
</section>

<section className="bg-black text-white py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-red-500 uppercase tracking-[5px] mb-4">Why Choose Us</p>
    <h2 className="text-5xl font-bold mb-14">Why Customers Love Our Restaurant</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        ["Fresh Ingredients", "We use fresh and quality ingredients for every dish."],
        ["Expert Chefs", "Our chefs prepare food with professional techniques."],
        ["Fast Service", "Quick service with clean and comfortable dining."]
      ].map((item, index) => (
        <div key={index} className="bg-[#111] border border-red-500/30 rounded-3xl p-8 hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-4">{item[0]}</h3>
          <p className="text-gray-400">{item[1]}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section id="menu" className="bg-[#090909] text-white py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-14">
      <p className="text-red-500 uppercase tracking-[5px] mb-4">Chef Special</p>
      <h2 className="text-5xl font-bold">Popular Dishes With Price</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        ["Chicken Biryani", "Aromatic rice with juicy chicken pieces", "₹249"],
        ["Paneer Butter Masala", "Creamy paneer curry with rich flavour", "₹199"],
        ["Tandoori Chicken", "Smoky grilled chicken with spices", "₹349"],
        ["Veg Fried Rice", "Fresh vegetables with Chinese style rice", "₹149"],
        ["White Sauce Pasta", "Creamy pasta with cheese and herbs", "₹229"],
        ["Chocolate Brownie", "Soft brownie with chocolate topping", "₹129"]
      ].map((dish, index) => (
        <div key={index} className="flex justify-between items-start border-b border-red-500/30 pb-6">
          <div>
            <h3 className="text-2xl font-bold">{dish[0]}</h3>
            <p className="text-gray-400 italic mt-2">{dish[1]}</p>
          </div>
          <span className="text-red-500 text-2xl font-bold">{dish[2]}</span>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-red-600 text-white py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <div>
      <p className="uppercase tracking-[5px] mb-3">Today Special</p>
      <h2 className="text-5xl font-bold mb-5">Flat 20% Off On Family Dinner</h2>
      <p className="text-red-100 mb-6">
        Enjoy our special family dinner offer with premium dishes and fresh taste.
      </p>
      <button className="bg-black hover:bg-[#111] px-8 py-3 rounded-xl font-semibold">
        Book Table
      </button>
    </div>

    <img src="https://images.unsplash.com/photo-1543353071-087092ec393a" className="rounded-3xl h-80 w-full object-cover" />
  </div>
</section>

<section className="bg-black text-white py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-14">
      <p className="text-red-500 uppercase tracking-[5px] mb-4">Food Gallery</p>
      <h2 className="text-5xl font-bold">Our Delicious Food Collection</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {[
        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
        "https://images.unsplash.com/photo-1541544741938-0af808871cc0",
        "https://images.unsplash.com/photo-1551024506-0bccd828d307",
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
      ].map((img, index) => (
        <img key={index} src={img} className="rounded-3xl h-72 w-full object-cover hover:scale-105 transition" />
      ))}
    </div>
  </div>
</section>

<section className="bg-[#090909] text-white py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-red-500 uppercase tracking-[5px] mb-4">Testimonials</p>
    <h2 className="text-5xl font-bold mb-14">What Our Customers Say</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        ["Rahul Sharma", "Food quality was amazing and service was very fast."],
        ["Priya Das", "The restaurant ambience and taste both were excellent."],
        ["Amit Kumar", "Perfect place for family dinner and birthday parties."]
      ].map((review, index) => (
        <div key={index} className="bg-[#111] border border-red-500/30 rounded-3xl p-8">
          <p className="text-yellow-400 text-xl mb-4">★★★★★</p>
          <p className="text-gray-300 mb-5">“{review[1]}”</p>
          <h3 className="text-xl font-bold">{review[0]}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-black text-white py-24 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    <div>
      <p className="text-red-500 uppercase tracking-[5px] mb-4">Opening Hours</p>
      <h2 className="text-5xl font-bold mb-8">Visit Us Today</h2>

      <div className="space-y-4 text-xl">
        <p className="flex justify-between border-b border-red-500/30 pb-3">
          <span>Monday - Friday</span>
          <span>5:30 AM - 2:30 PM</span>
        </p>
        <p className="flex justify-between border-b border-red-500/30 pb-3">
          <span>Saturday</span>
          <span>5:30 AM - 2:30 PM</span>
        </p>
        <p className="flex justify-between border-b border-red-500/30 pb-3">
          <span>Sunday</span>
          <span>5:30 AM - 2:30 PM</span>
        </p>
      </div>
    </div>

    <div className="bg-[#111] border border-red-500/30 rounded-3xl p-8">
      <h3 className="text-3xl font-bold mb-6">Reserve Your Table</h3>

      <input className="w-full mb-4 p-4 rounded-xl bg-black border border-red-500/30 outline-none" placeholder="Your Name" />
      <input className="w-full mb-4 p-4 rounded-xl bg-black border border-red-500/30 outline-none" placeholder="Phone Number" />
      <input className="w-full mb-4 p-4 rounded-xl bg-black border border-red-500/30 outline-none" placeholder="Date & Time" />

      <button className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-bold">
        Book Now
      </button>
    </div>
  </div>
</section>
      <section id="gallery" className="bg-[#090909] text-white py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="flex items-end justify-between gap-6 mb-10">
      <div>
        <p className="text-red-500 uppercase tracking-[5px] mb-4">
          Moving Dishes
        </p>
        <h2 className="text-5xl font-bold">
          Automatic Food Slider
        </h2>
      </div>

      <div className="hidden md:flex gap-3">
        <button
          onClick={prevDish}
          className="bg-black text-white p-4 rounded-full border border-red-500 hover:bg-red-600 transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextDish}
          className="bg-red-600 text-white p-4 rounded-full border border-black hover:bg-black transition"
        >
          <ChevronRight />
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {visibleDishes.map((item, index) => (
        <motion.div
          key={`${item.title}-${activeDish}-${index}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="bg-[#111] border border-red-500/30 rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-72 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-gray-400 mt-2">Fresh restaurant special dish</p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="flex md:hidden justify-center gap-4 mt-8">
      <button
        onClick={prevDish}
        className="bg-black text-white p-4 rounded-full border border-red-500"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextDish}
        className="bg-red-600 text-white p-4 rounded-full border border-black"
      >
        <ChevronRight />
      </button>
    </div>
  </div>
</section>
<section className="bg-[#090909] text-white py-24 px-6">
  <div className="max-w-7xl mx-auto">

    {/* HEADING */}
    <div className="text-center mb-16">
      <p className="text-red-500 uppercase tracking-[5px] mb-4">
        Latest Blog
      </p>

      <h2 className="text-5xl font-bold">
        News & Food Articles
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
        Discover restaurant stories, chef secrets and latest food trends.
      </p>
    </div>

    {/* 3 COLUMN GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* BLOG 1 */}
      <div className="bg-[#111] border border-red-500/20 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-xl">

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt=""
          className="w-full h-64 object-cover"
        />

        <div className="p-7">
          <p className="text-red-500 text-sm uppercase tracking-[4px] mb-3">
            Restaurant
          </p>

          <h3 className="text-2xl font-bold mb-4">
            Why Fresh Ingredients Matter In Every Dish
          </h3>

          <p className="text-gray-400 leading-7 mb-6">
            Fresh vegetables and premium ingredients improve both taste and health.
          </p>

          <button className="bg-red-600 hover:bg-black border border-red-500 px-6 py-3 rounded-xl font-semibold transition">
            Read More
          </button>
        </div>
      </div>

      {/* BLOG 2 */}
      <div className="bg-[#111] border border-red-500/20 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-xl">

        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
          alt=""
          className="w-full h-64 object-cover"
        />

        <div className="p-7">
          <p className="text-red-500 text-sm uppercase tracking-[4px] mb-3">
            Chef Tips
          </p>

          <h3 className="text-2xl font-bold mb-4">
            Secret Techniques Used By Professional Chefs
          </h3>

          <p className="text-gray-400 leading-7 mb-6">
            Learn the cooking methods used in premium restaurants around the world.
          </p>

          <button className="bg-red-600 hover:bg-black border border-red-500 px-6 py-3 rounded-xl font-semibold transition">
            Read More
          </button>
        </div>
      </div>

      {/* BLOG 3 */}
      <div className="bg-[#111] border border-red-500/20 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-xl">

        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
          alt=""
          className="w-full h-64 object-cover"
        />

        <div className="p-7">
          <p className="text-red-500 text-sm uppercase tracking-[4px] mb-3">
            Healthy Food
          </p>

          <h3 className="text-2xl font-bold mb-4">
            Healthy Meals That Still Taste Delicious
          </h3>

          <p className="text-gray-400 leading-7 mb-6">
            Balanced meals can be tasty, healthy and satisfying together.
          </p>

          <button className="bg-red-600 hover:bg-black border border-red-500 px-6 py-3 rounded-xl font-semibold transition">
            Read More
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
<section id="about" className="bg-black text-white py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-red-500 uppercase tracking-[5px] mb-4">
        About Our Restaurant
      </p>

      <h2 className="text-5xl font-bold">
        Facilities & Services
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
        We provide a comfortable, family-friendly dining experience with
        modern facilities and convenient service options.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        ["Accessibility", ["Wheelchair-accessible car park", "Wheelchair-accessible entrance", "Wheelchair-accessible seating", "Wheelchair-accessible toilet"]],
        ["Service Options", ["Delivery", "Takeaway", "Dine-in"]],
        ["Highlights", ["Great coffee", "Serves local specialty"]],
        ["Popular For", ["Breakfast", "Solo dining"]],
        ["Offerings", ["Coffee", "Comfort food", "Quick bite", "Small plates"]],
        ["Dining Options", ["Breakfast", "Brunch", "Lunch", "Dinner", "Dessert", "Seating", "Table service"]],
        ["Amenities", ["Restroom"]],
        ["Atmosphere", ["Casual", "Cozy", "Quiet"]],
        ["Crowd", ["Family friendly", "Groups", "Tourists"]],
        ["Planning", ["Accepts reservations"]],
        ["Payments", ["Credit cards", "Debit cards", "NFC mobile payments"]],
        ["Children", ["Good for kids", "High chairs", "Kids' menu"]],
        ["Parking", ["Free street parking"]],
      ].map((section, index) => (
        <div
          key={index}
          className="bg-[#111] border border-red-500/20 rounded-3xl p-7 hover:scale-105 transition duration-300"
        >
          <h3 className="text-2xl font-bold text-red-500 mb-5">
            {section[0]}
          </h3>

          <div className="space-y-3">
            {section[1].map((item, i) => (
              <p key={i} className="flex items-start gap-3 text-gray-300">
                <span className="text-red-500 font-bold">✓</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="chef" className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <img alt="Chef" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80" className="rounded-[1.5rem] border border-[#eadfcc] shadow-xl w-full h-[430px] object-cover" />
        <div>
          <p className="uppercase tracking-[0.28em] text-[#7a2d22] text-sm">Meet The Chef</p>
          <h2 className="mt-4 text-4xl lg:text-5xl font-serif font-semibold">Chef Elena Rose</h2>
          <p className="mt-6 text-lg leading-8 text-[#6d5d4d]">Chef Elena focuses on healthy ingredients, refined flavor and elegant presentation for everyday dining.</p>
          <div className="mt-8 border border-[#eadfcc] rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-serif">Special Dish</h3>
            <p className="mt-3 text-[#6d5d4d]">Golden Herb Chicken Plate with signature breakfast sauce.</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#21170f] text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div>
            <h2 className="text-4xl font-serif text-[#d8aa72]">Barbara's</h2>
            <p className="mt-5 text-white/70 leading-8">Formal restaurant experience with premium healthy meals.</p>
            <p className="mt-6 text-3xl italic text-[#d8aa72] font-serif">Barbara</p>
          </div>
          <div>
            <h3 className="text-2xl font-serif">Opening Hours</h3>
            <div className="mt-6 border border-white/15 rounded-2xl p-6 space-y-3 text-white/75">
              <p className="flex items-center gap-3"><CalendarDays size={18} /> Monday - Sunday</p>
              <p className="flex items-center gap-3"><Clock size={18} /> 5:30 AM - 2:30 PM</p>
              <p className="flex items-center gap-3"><Users size={18} /> Private tables available</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-serif">Connect</h3>
            <div className="mt-6 space-y-4 text-white/80">
              <p className="flex items-center gap-3"><Phone /> +12037763042</p>
              <p className="flex items-center gap-3"><Mail /> hello@barbaras.com</p>
              <p className="flex items-center gap-3"><MapPin />962 Dixwell Ave, Hamden, CT 06514, United States</p>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="#" className="bg-white/10 hover:bg-white/15 p-3 rounded-full"><Instagram /></a>
              <a href="#" className="bg-white/10 hover:bg-white/15 p-3 rounded-full"><Twitter /></a>
            </div>
          </div>
        </div>
      </footer>

      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm grid place-items-center px-4">
          <div className="bg-[#f8f3ea] border border-[#eadfcc] rounded-[1.5rem] p-8 w-full max-w-2xl relative shadow-2xl">
            <button onClick={() => setBookingOpen(false)} className="absolute top-5 right-5 bg-[#111111] text-white p-3 rounded-full border border-[#b21f1f] hover:bg-[#b21f1f] transition"><X /></button>
            <p className="uppercase tracking-[0.28em] text-[#7a2d22] text-sm">Booking</p>
            <h2 className="mt-3 text-4xl font-serif font-semibold">Reserve Your Table</h2>
            <p className="mt-4 text-[#6d5d4d]">{bookingText}</p>
            <form className="grid gap-5 mt-8" onSubmit={(e) => { e.preventDefault(); alert("Booking Confirmed"); setBookingOpen(false); }}>
              <input type="text" placeholder="Your Name" value={booking.name} onChange={(e) => setBooking({ ...booking, name: e.target.value })} className="border border-[#d8c7b2] rounded-2xl px-5 py-4 bg-white" />
              <input type="text" placeholder="Phone Number" value={booking.phone} onChange={(e) => setBooking({ ...booking, phone: e.target.value })} className="border border-[#d8c7b2] rounded-2xl px-5 py-4 bg-white" />
              <select value={booking.guests} onChange={(e) => setBooking({ ...booking, guests: e.target.value })} className="border border-[#d8c7b2] rounded-2xl px-5 py-4 bg-white">
                <option value="1">1 Guest</option><option value="2">2 Guests</option><option value="3">3 Guests</option><option value="4">4 Guests</option><option value="5">5 Guests</option><option value="6">6 Guests</option>
              </select>
              <input type="date" value={booking.date} onChange={(e) => setBooking({ ...booking, date: e.target.value })} className="border border-[#d8c7b2] rounded-2xl px-5 py-4 bg-white" />
              <input type="time" value={booking.time} onChange={(e) => setBooking({ ...booking, time: e.target.value })} className="border border-[#d8c7b2] rounded-2xl px-5 py-4 bg-white" />
              <button className="bg-[#b21f1f] text-white py-4 rounded-2xl uppercase tracking-[0.14em] text-sm border border-[#111111] hover:bg-[#111111] transition">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
