import React from "react";
import Hero from "../components/Header/Hero";

const getCurrentDate = () => {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

export const TermsAndConditions = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-32 sm:mt-40 md:mt-48 lg:mt-60 mb-20 sm:mb-28 md:mb-32 lg:mb-40 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          Terms and Conditions
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
          <span className="font-semibold">Effective Date:</span>
          <span>{getCurrentDate()}</span>
        </div>

        <hr className="border-gray-300 my-6" />

        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="mb-6">
            Welcome to Baarat Blinks. By accessing or using our website and
            services, you agree to comply with these Terms and Conditions.
            Please read them carefully.
          </p>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Services</h2>
            <p className="mb-4">
              We provide wedding photography and related services, including but
              not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Photography</li>
              <li>Drone coverage</li>
              <li>Wedding albums</li>
              <li>Pre-wedding shoots</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Booking and Payments
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                All bookings require advance payment to confirm your service
                slot.
              </li>
              <li>Payment terms will be outlined in your service agreement.</li>
              <li>
                Cancellations or rescheduling must be communicated at least 7
                days in advance, subject to availability and applicable charges.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Use of Content
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Baarat Blinks retains the copyright to all photographs and
                videos captured during your event.
              </li>
              <li>
                You may use the final edited content for personal,
                non-commercial purposes.
              </li>
              <li>
                We reserve the right to use images or videos for promotional
                purposes unless explicitly stated otherwise in your agreement.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Limitations of Liability
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We strive to deliver high-quality services but are not liable
                for unforeseen circumstances such as equipment failure, natural
                disasters, or other events beyond our control.
              </li>
              <li>
                Our liability is limited to the amount paid for the specific
                service in question.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Client Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Provide accurate details about your event, including dates,
                venues, and special requests.
              </li>
              <li>
                Obtain necessary permissions for drone usage or photography at
                your event location.
              </li>
              <li>
                Ensure timely communication for seamless service delivery.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by the laws of [Your
              State/Country].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Contact Us
            </h2>
            <p className="space-y-2">
              For inquiries or support, please reach out:
              <br />
              <span className="block mt-4">
                <strong>Email:</strong> baaratblinks@gmail.com
              </span>
              <span className="block">
                <strong>Phone:</strong> +91 94562 21688
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
