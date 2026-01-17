import { Card, CardContent } from "@/components/ui/card";
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
