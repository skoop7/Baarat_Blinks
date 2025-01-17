import React from "react";
import { Check } from "lucide-react";

export default function ThankYouModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-8 text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>

        <h2 className="text-2xl font-quintessential mb-4">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          We've received your booking request and will get back to you shortly.
        </p>

        <button
          onClick={onClose}
          className="bg-[#eadbc8] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#e0ceb3] transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
