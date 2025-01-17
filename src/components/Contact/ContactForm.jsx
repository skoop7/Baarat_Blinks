import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS library
import ThankYouModal from "../ServicePageComponents/ThankYouModal"; // Ensure the path is correct

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); // State for form validation errors
  const [showPopup, setIsShowPopUp] = useState(false); // State to manage modal visibility
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage submission status

  // Validation function
  const validateForm = () => {
    let errors = {};
    const nameRegex = /^[A-Za-z\s]+$/; // Only alphabets and spaces
    const phoneRegex = /^[0-9]{10}$/; // Exactly 10 digits
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Valid email format

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      errors.name = "Name should contain only alphabets";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

    // Validate form before submission
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Define template parameters for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_2pqgr1f", // Replace with your EmailJS service ID
        "template_ak4miat", // Replace with your EmailJS template ID
        templateParams,
        "7fT2k_CxL4vLZV6BE" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form fields
          setErrors({}); // Clear errors
          setIsShowPopUp(true); // Show thank-you modal
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send the message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClasses =
    "w-full border-b border-[#c6c6c6] pb-2 placeholder-gray-500 uppercase text-sm tracking-wider focus:outline-none focus:border-[#1B365D] bg-transparent font-serif";

  return (
    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="NAME"
          className={inputClasses}
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="EMAIL"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="PHONE"
          value={formData.phone}
          onChange={handleChange}
          className={inputClasses}
          required
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      <div>
        <textarea
          name="message"
          placeholder="MESSAGE"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`${inputClasses} resize-none`}
          required
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#e9e1d9] text-black sm:text-2xl text-lg font-semibold px-6 sm:px-14 py-3 rounded-full hover:bg-[#d6cdc4] flex items-center gap-4 transition-colors"
        style={{ fontFamily: "cormorant" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send"}
        <img
          src="/SendButton.png"
          alt=""
          className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px]"
        />
      </button>

      {/* Thank You Modal */}
      {showPopup && (
        <ThankYouModal
          isOpen={showPopup}
          onClose={() => setIsShowPopUp(false)}
        />
      )}
    </form>
  );
};
