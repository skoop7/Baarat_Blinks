import React, { useState } from "react";
import { X } from "lucide-react";
import emailjs from "emailjs-com";
import ThankYouModal from "../ServicePageComponents/ThankYouModal";

export default function BookingModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const [showPopup, setIsShowPopUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate name (only alphabets and spaces)
  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);

  // Validate email format
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Validate phone number (exactly 10 digits)
  const validatePhoneNumber = (phone) => /^\d{10}$/.test(phone);

  // Validate date (should not be a past date)
  const validateDate = (date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    let valid = true;
    const newErrors = { name: "", email: "", phone: "", date: "" };

    if (!validateName(formData.name)) {
      newErrors.name = "Name should contain only alphabets and spaces.";
      valid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
      valid = false;
    }

    if (!validateDate(formData.date)) {
      newErrors.date = "Please select a present or future date.";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
    };

    emailjs
      .send(
        "service_2pqgr1f",
        "template_ak4miat",
        templateParams,
        "7fT2k_CxL4vLZV6BE"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          onSubmit(formData);
          setFormData({ name: "", email: "", phone: "", date: "", time: "" });
          setIsShowPopUp(true);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 sm:p-4 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-quintessential mb-6">Book Your Shoot</h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-3">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              className={`w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? "focus:ring-red-400" : "focus:ring-[#eadbc8]"
              }`}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className={`w-full px-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-400" : "focus:ring-[#eadbc8]"
              }`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              required
              className={`w-full px-3 py-2 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.phone ? "focus:ring-red-400" : "focus:ring-[#eadbc8]"
              }`}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Date Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              required
              className={`w-full px-3 py-2 border ${
                errors.date ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 ${
                errors.date ? "focus:ring-red-400" : "focus:ring-[#eadbc8]"
              }`}
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          {/* Time Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <input
              type="time"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eadbc8]"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#eadbc8] text-black py-3 rounded-full font-semibold hover:bg-[#e0ceb3] transition-colors duration-300"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Thank You Modal */}
        {showPopup && (
          <ThankYouModal
            isOpen={showPopup}
            onClose={() => setIsShowPopUp(false)}
          />
        )}
      </div>
    </div>
  );
}
