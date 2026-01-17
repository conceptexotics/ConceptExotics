import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Phone, CalendarCheck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function CarRentalWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Concept Exotics — Luxury Car Rentals
            </h1>
            <p className="text-lg mb-6 text-gray-300">
              DFW’s premier luxury car rental experience. Exotic and high-end vehicles for any occasion.
            </p>
            <Button className="rounded-2xl px-6 py-3 text-lg">Call 214‑903‑6383</Button>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            src="https://images.unsplash.com/photo-1549924231-f129b911e442"
            alt="Luxury Car"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[{
              icon: <Car />,
              title: "Choose a Car",
              desc: "Browse our selection of quality vehicles."
            },{
              icon: <CalendarCheck />,
              title: "Pick Dates",
              desc: "Flexible rental periods to fit your plans."
            },{
              icon: <ShieldCheck />,
              title: "Get Approved",
              desc: "Fast verification and approval."
            },{
              icon: <Phone />,
              title: "Drive Away",
              desc: "Pickup or delivery available."
            }].map((item, i) => (
              <Card key={i} className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-xl">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="bg-white py-16 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-6">Our Fleet</h2>
    <p className="text-center text-gray-600 mb-10">Browse by brand — premium and exotic vehicles available across DFW.</p>

    {/* Brand Tabs */}
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {["Lamborghini","Ferrari","Rolls-Royce","Bentley","Mercedes-Benz","BMW","Chevrolet","Porsche","Tesla"].map((brand, i) => (
        <span key={i} className="px-4 py-2 rounded-full border text-sm font-medium bg-white shadow-sm">
          {brand}
        </span>
      ))}
    </div>

    {/* Featured */}
    <div className="mb-16">
      <h3 className="text-2xl font-semibold mb-6">Most Popular</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {["Lamborghini Huracan","Rolls-Royce Dawn","Ferrari 488 GTB"].map((car, i) => (
          <Card key={i} className="rounded-2xl overflow-hidden shadow-md">
            <img src={`https://source.unsplash.com/800x600/?${encodeURIComponent(car)}`} className="h-52 w-full object-cover" />
            <CardContent className="p-4">
              <h4 className="font-semibold text-lg">{car}</h4>
              <p className="text-sm text-gray-600">Customer favorite • Limited availability</p>
              <Button asChild className="mt-3 rounded-xl">
                <a href="tel:2149036383">Call to Book</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

    {/* Brand Sections */}
    {[
      {
        brand: "Lamborghini",
        cars: [
          { name: "Huracan EVO (Yellow)", price: "$1,599 / day • $3,499 / 3 days" },
          { name: "Huracan Spyder (White)", price: "$1,699 / day • $7,999 / week" },
          { name: "Huracan (Black)", price: "$1,599 / day • $3,360 / 3 days" },
          { name: "Huracan (Purple)", price: "$1,599 / day • $3,360 / 3 days" },
          { name: "Urus (Black)", price: "$1,599 / day • $3,499 / 3 days" },
          { name: "Urus (Green)", price: "$1,399 / day • $2,999 / 3 days" }
        ]
      },
      {
        brand: "Ferrari",
        cars: [{ name: "488 GTB Spyder", price: "$1,799 / day • $8,999 / week" }]
      },
      {
        brand: "Rolls-Royce",
        cars: [
          { name: "Dawn", price: "$1,799 / day • $8,999 / week" },
          { name: "Ghost", price: "$1,499 / day" }
        ]
      },
      {
        brand: "Bentley",
        cars: [
          { name: "Continental GT", price: "$899 / day • $2,299 / 3 days" },
          { name: "Bentayga", price: "$899 / day • $2,299 / 3 days" }
        ]
      },
      {
        brand: "Mercedes-Benz",
        cars: [
          { name: "S580", price: "$999 / day • $2,699 / 3 days" },
          { name: "Maybach SUV", price: "$1,199 / day • $3,299 / 3 days" },
          { name: "GLE 63 AMG", price: "$399 / day • $999 / 3 days" }
        ]
      },
      {
        brand: "BMW",
        cars: [
          { name: "i8 Convertible", price: "$599 / day • $1,399 / 3 days" },
          { name: "i8 (Purple)", price: "$599 / day • $1,399 / 3 days" },
          { name: "760i", price: "$899 / day • $2,299" },
          { name: "X6 M Competition", price: "$699 / day • $1,599 / week" }
        ]
      },
      {
        brand: "Chevrolet",
        cars: [
          { name: "Corvette C8 Stingray (Red)", price: "$599 / day • $1,499 / 3 days" },
          { name: "Corvette C8 (Black)", price: "$699 / day • $1,599 / 3 days" },
          { name: "Corvette C8 (Orange)", price: "$799 / day • $2,100 / 3 days" },
          { name: "Tahoe RST", price: "$599 / day • $1,499 / 3 days" }
        ]
      },
      { brand: "Porsche", cars: [{ name: "Panamera", price: "$299 / day • $799 / 3 days" }] },
      { brand: "Tesla", cars: [{ name: "Cybertruck", price: "$999 / day • $2,500 / 3 days" }] }
    ].map((brand, i) => (
      <div key={i} className="mb-20">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-10 w-10 bg-gray-200 rounded-full" />
          <h3 className="text-2xl font-semibold">{brand.brand}</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {brand.cars.map((car, j) => (
            <Card key={j} className="rounded-2xl overflow-hidden">
              <img src={`https://source.unsplash.com/800x600/?${encodeURIComponent(car.name)}`} className="h-48 w-full object-cover" />
              <CardContent className="p-4">
                <h4 className="font-semibold text-lg">{car.name}</h4>
                <p className="text-gray-600 text-sm mt-1">{car.price}</p>
                <Button asChild variant="outline" className="mt-3 rounded-xl">
                  <a href="tel:2149036383">View Details / Book</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Luxury Ride</h2>
          <p className="mb-6 text-gray-600">
            Call us or request a booking online — serving the entire DFW Metroplex.
          </p>
          <Button asChild className="rounded-2xl px-6 py-3"><a href="tel:2149036383">Call 214‑903‑6383</a></Button>
        </div>
      </section>

      {/* Footer */}
      {/* Rental Requirements */}
<section className="bg-gray-950 py-20 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Rental Requirements</h2>
    <ul className="space-y-3 text-gray-300">
      <li>• Valid driver’s license (21+ for most vehicles, 25+ for exotics)</li>
      <li>• Full coverage insurance required</li>
      <li>• Security deposit required</li>
      <li>• Mileage limits apply (additional miles available)</li>
      <li>• Delivery available throughout the DFW Metroplex</li>
    </ul>
  </div>
</section>

{/* Booking Form */}
<section className="bg-black py-20 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Request a Booking</h2>
    <form className="grid md:grid-cols-2 gap-4">
      <input className="p-3 rounded-xl bg-gray-900 border border-gray-700" placeholder="Full Name" />
      <input className="p-3 rounded-xl bg-gray-900 border border-gray-700" placeholder="Phone Number" />
      <input className="p-3 rounded-xl bg-gray-900 border border-gray-700" placeholder="Email" />
      <input className="p-3 rounded-xl bg-gray-900 border border-gray-700" placeholder="Desired Vehicle" />
      <input className="p-3 rounded-xl bg-gray-900 border border-gray-700" placeholder="Rental Dates" />
      <button type="submit" className="bg-white text-black rounded-xl px-6 py-3 font-semibold md:col-span-2">Submit Request</button>
    </form>
    <p className="text-gray-400" /><p className="text-gray-300 text-sm mt-2">Experience elite performance, luxury comfort, and unmistakable presence. Ideal for luxury trips, special events, or weekend drives.</p><!-- text-sm mt-4">Or call <a href="tel:2149036383" className="underline">214‑903‑6383</a> to book instantly.</p>
  </div>
</section>

{/* Service Area */}
<section className="bg-gray-950 py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Serving the DFW Metroplex</h2>
    <p className="text-gray-400">Dallas • Fort Worth • Plano • Frisco • Arlington • Irving • Grapevine</p>
  </div>
</section>

<footer className="bg-gray-950 text-white py-10 text-center">
        <p className="text-sm text-gray-400">© 2026 Concept Exotics — DFW Luxury Car Rentals. All rights reserved.</p>
      </footer>
    </div>
  );
}
