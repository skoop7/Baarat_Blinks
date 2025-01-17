import { useState } from "react";
import { Send, ChevronDown } from "lucide-react";
import emailjs from "emailjs-com"; // Import EmailJS SDK
import ThankYouModal from "../ServicePageComponents/ThankYouModal";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    services: [],
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim() || formData.phone.length !== 10)
      newErrors.phone = "Valid 10-digit phone number is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.services.length)
      newErrors.services = "Please select at least one service";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      setShowPopup(true);

      // Sending form data to EmailJS
      const templateParams = {
        to_name: formData.name,
        from_name: "EmailJS Team", // Adjust the from name
        message: formData.message,
        email: formData.email,
        phone: formData.phone,
        services: formData.services.join(", "),
      };

      emailjs
        .send(
          "service_2pqgr1f", // Replace with your EmailJS service ID
          "template_ak4miat", // Replace with your EmailJS template ID
          templateParams,
          "7fT2k_CxL4vLZV6BE" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            // Optionally, you can handle successful email sending here (e.g., show a confirmation message)
          },
          (error) => {
            console.log("Email sending error:", error);
            // Optionally, handle errors (e.g., show an error message)
          }
        );

      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        services: [],
      });
    }
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown-container")) {
      setDropdownOpen(false);
    }
  };

  // Add click outside listener
  useState(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white md:py-8 mt-10">
      <div className="w-full bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-20 px-6 md:p-12">
          {/* Form Section */}
          <div>
            <h1 className=" text-4xl lg:text-5xl  font-semibold mb-4 font-quintessential">
              Get in Touch
            </h1>
            <p className="text-black mb-8">
              Please provide your details below, and we will get back to you at
              the earliest with the information you need.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone number *"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message *"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              {/* Services Dropdown */}
              <div className="relative dropdown-container">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
                >
                  <span className="text-gray-400">
                    {formData.services.length > 0
                      ? formData.services.join(", ")
                      : "Select Services"}
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-gray-200 rounded-lg shadow-lg z-[9999]">
                    <div className="p-2 space-y-2">
                      {[
                        "Photography",
                        "Videography",
                        "Album",
                        "Pre Wedding Shoot",
                        "Drone",
                      ].map((service) => (
                        <label
                          key={service}
                          className="flex items-center space-x-2 p-2 hover:bg-gray-50 cursor-pointer rounded w-full"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service.toLowerCase()}
                            checked={formData.services.includes(
                              service.toLowerCase()
                            )}
                            onChange={(e) => {
                              const { value, checked } = e.target;
                              setFormData((prevData) => ({
                                ...prevData,
                                services: checked
                                  ? [...prevData.services, value]
                                  : prevData.services.filter(
                                      (s) => s !== value
                                    ),
                              }));
                            }}
                            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                          />
                          <span className="select-none">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-600 hover:bg-yellow-100 text-black flex gap-4 justify-center rounded-lg transition duration-200 font-bold font-poppins"
              >
                Send{" "}
                <img
                  src="/SendButton.png"
                  alt=""
                  className="lg:h-[25px] lg:w-[25px] h-[15px] w-[15px] lg:mt-0 mt-1"
                />
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="h-[400px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7845.177405294764!2d79.13817375697973!3d28.022064579458878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397545ba40000001%3A0x81d55dbfbee3aa05!2sMukesh%20Johri%20Hospital!5e0!3m2!1sen!2sin!4v1736850331656!5m2!1sen!2sin"
              className="w-full h-full rounded-lg"
              style={{ border: "1px solid black", borderRadius: "30px" }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        //   <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        //     <h2 className="text-xl font-bold mb-4">Thank you!</h2>
        //     <p>Our team will contact you soon.</p>
        //     <button
        //       onClick={() => setShowPopup(false)}
        //       className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        //     >
        //       Close
        //     </button>
        //   </div>
        // </div>
        <ThankYouModal
          isOpen={showPopup}
          onClose={() => {
            setShowPopup(false);
          }}
        />
      )}
    </div>
  );
};

export default ContactForm;
