import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const err = {};
    if (!form.name) err.name = "Name required";
    if (!form.email) err.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Invalid email";
    if (!form.message || form.message.length < 10)
      err.message = "Min 10 characters";
    return err;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) return setErrors(err);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="bg-slate-950 text-slate-300 font-sans min-h-screen selection:bg-amber-500/30 selection:text-amber-200">

      {/* HERO WITH SCROLL/GLOW EFFECT */}
      <div className="relative text-center pt-25 pb-10 bg-linear-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-900 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-50 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative space-y-2">
          <h1 className="text-4xl md:text-5xl font-serif font-light tracking-widest text-white">
            Contact <span className="font-sans font-semibold italic bg-linear-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <div className="w-12 h-px bg-amber-500/30 mx-auto my-3" />
          <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto font-light">
            We’re here to help your textile needs
          </p>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT COLUMN WITH SCROLL HOVER MOTION */}
        <div className="space-y-8 transition-all duration-700 ease-out transform hover:-translate-y-1">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-light tracking-wide text-white">
              Get in <span className="font-sans font-semibold italic bg-linear-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Contact us for bulk orders, fabric inquiries, and partnerships.
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="p-4 bg-slate-900/30 border border-slate-900 rounded-xl transition-all duration-300 hover:border-amber-500/20">
              <p className="font-medium text-white flex items-center gap-2">📍 Mumbai, India</p>
            </div>
            <div className="p-4 bg-slate-900/30 border border-slate-900 rounded-xl transition-all duration-300 hover:border-amber-500/20">
              <p className="font-medium text-white flex items-center gap-2">📞 +91 9876543210</p>
            </div>
            <div className="p-4 bg-slate-900/30 border border-slate-900 rounded-xl transition-all duration-300 hover:border-amber-500/20">
              <p className="font-medium text-white flex items-center gap-2">📧 info@ashvaglobal.com</p>
            </div>
            <div className="p-4 bg-slate-900/30 border border-slate-900 rounded-xl transition-all duration-300 hover:border-amber-500/20">
              <p className="font-medium text-white flex items-center gap-2">⏰ Mon - Sat: 9AM - 7PM</p>
            </div>
          </div>

          {/* Quick Actions Actions Row */}
          <div className="flex gap-3 flex-wrap pt-2">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider bg-slate-900 border border-slate-800 text-slate-200 rounded-xl transition-all duration-300 hover:border-amber-500/40 hover:text-amber-400 hover:scale-[1.03]"
            >
              <FaPhoneAlt className="text-[10px]" /> Call Now
            </a>

            <a
              href="mailto:info@ashvaglobal.com"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider bg-slate-900 border border-slate-800 text-slate-200 rounded-xl transition-all duration-300 hover:border-amber-500/40 hover:text-amber-400 hover:scale-[1.03]"
            >
              <FaEnvelope className="text-[10px]" /> Email
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wider bg-emerald-950/30 border border-emerald-900/50 text-emerald-400 rounded-xl transition-all duration-300 hover:bg-emerald-900/20 hover:scale-[1.03]"
            >
              <FaWhatsapp className="text-sm" /> WhatsApp
            </a>
          </div>

          {/* TRUST INDICATORS */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900">
            {[
              "10+ Years Experience",
              "Export Quality Fabrics",
              "Trusted by 100+ Clients"
            ].map((text, idx) => (
              <div key={idx} className="p-3 bg-slate-900/10 border border-slate-900/50 rounded-xl text-center">
                <span className="text-amber-500 block text-xs mb-1">✔</span>
                <p className="text-[10px] tracking-wide text-slate-400 font-medium leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FORM CONTAINER WITH INTERACTIVE TRANSITIONS */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl shadow-2xl space-y-5 backdrop-blur-sm transition-all duration-700 ease-out transform hover:-translate-y-1"
        >
          <h3 className="text-lg font-serif font-light text-white tracking-wide">Send Message</h3>

          <div className="space-y-1">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full text-sm bg-slate-950 text-white placeholder-slate-600 px-4 py-3.5 rounded-xl border transition-all duration-300 outline-none ${
                errors.name ? "border-red-500/50 focus:border-red-500" : "border-slate-900 focus:border-amber-500/30"
              }`}
            />
            {errors.name && <p className="text-red-400 text-xs pl-1">{errors.name}</p>}
          </div>

          <div className="space-y-1">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full text-sm bg-slate-950 text-white placeholder-slate-600 px-4 py-3.5 rounded-xl border transition-all duration-300 outline-none ${
                errors.email ? "border-red-500/50 focus:border-red-500" : "border-slate-900 focus:border-amber-500/30"
              }`}
            />
            {errors.email && <p className="text-red-400 text-xs pl-1">{errors.email}</p>}
          </div>

          <div className="space-y-1">
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className={`w-full text-sm bg-slate-950 text-white placeholder-slate-600 px-4 py-3.5 rounded-xl border transition-all duration-300 outline-none resize-none ${
                errors.message ? "border-red-500/50 focus:border-red-500" : "border-slate-900 focus:border-amber-500/30"
              }`}
            />
            {errors.message && <p className="text-red-400 text-xs pl-1">{errors.message}</p>}
          </div>

          <button className="w-full py-3.5 rounded-xl bg-linear-to-r from-amber-500 to-amber-600 font-medium text-xs uppercase tracking-[0.15em] text-slate-950 transition-all duration-300 hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/5 transform active:scale-[0.98]">
            Send Message
          </button>

          {success && (
            <div className="p-3 bg-emerald-950/30 border border-emerald-900/40 rounded-xl text-center transition-all duration-300">
              <p className="text-emerald-400 text-xs font-medium tracking-wide">
                Message sent successfully!
              </p>
            </div>
          )}
        </form>
      </div>

      {/* MAP VIEWPORT WITH COMBINED MONOCHROME LUXURY BLEND */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="relative rounded-2xl overflow-hidden border border-slate-900 p-1 bg-slate-900/20 shadow-2xl group">
          <iframe
            src="https://www.google.com/maps?q=Mumbai&output=embed"
            className="w-full h-80 rounded-xl opacity-30 grayscale contrast-[1.2] invert transition-all duration-700 ease-out group-hover:opacity-50"
            allowFullScreen=""
            loading="lazy"
            title="Location Hub Map"
          />
          <div className="absolute inset-0 border border-slate-950 pointer-events-none rounded-xl" />
        </div>
      </div>

    </div>
  );
}