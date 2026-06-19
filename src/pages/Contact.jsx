import { useState } from "react";

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
    <div className="bg-[#F8FAFC]">

      {/* HERO */}
      <div className="text-center py-16 bg-linear-to-r from-[#0A1F44] via-[#1E3A8A] to-[#0EA5E9] text-white">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-200">
          We’re here to help your textile needs
        </p>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="space-y-6 animate-fade-up">
          <h2 className="text-3xl font-bold text-[#1E3A8A]">
            Get in Touch
          </h2>

          <p className="text-gray-600">
            Contact us for bulk orders, fabric inquiries, and partnerships.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📍 Mumbai, India</p>
            <p>📞 +91 9876543210</p>
            <p>📧 info@ashvaglobal.com</p>
            <p>⏰ Mon - Sat: 9AM - 7PM</p>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="tel:+919876543210"
              className="px-4 py-2 bg-[#1E3A8A] text-white rounded-lg"
            >
              Call Now
            </a>

            <a
              href="mailto:info@ashvaglobal.com"
              className="px-4 py-2 bg-[#0EA5E9] text-white rounded-lg"
            >
              Email
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              WhatsApp
            </a>
          </div>

          {/* TRUST */}
          <div className="mt-8 space-y-2 text-gray-700">
            <p>✔ 10+ Years Experience</p>
            <p>✔ Export Quality Fabrics</p>
            <p>✔ Trusted by 100+ Clients</p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-4 animate-fade-up"
        >
          <h3 className="text-xl font-semibold">Send Message</h3>

          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${
              errors.name && "border-red-500"
            }`}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${
              errors.email && "border-red-500"
            }`}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className={`w-full p-3 border rounded ${
              errors.message && "border-red-500"
            }`}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}

          <button className="w-full bg-[#1E3A8A] text-white py-3 rounded hover:bg-[#0EA5E9] transition">
            Send Message
          </button>

          {success && (
            <p className="text-green-600 text-center">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>

      {/* MAP */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <iframe
          src="https://www.google.com/maps?q=Mumbai&output=embed"
          className="w-full h-80 rounded-xl border-0"
        ></iframe>
      </div>

    </div>
  );
}