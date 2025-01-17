import React from "react";

const getCurrentDate = () => {
  const date = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

export const PrivacyPolicy = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-32 sm:mt-40 md:mt-48 lg:mt-60 mb-20 sm:mb-28 md:mb-32 lg:mb-40 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Privacy Policy</h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
          <span className="font-semibold">Effective Date:</span>
          <span>{getCurrentDate()}</span>
        </div>

        <hr className="border-gray-300 my-6" />

        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="mb-6">
            Baarat Blinks respects your privacy and is committed to protecting
            your personal data. This privacy policy explains how we collect,
            use, and share information about you when you visit our website or
            use our services.
          </p>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Information We Collect
            </h2>
            <div className="space-y-2">
              <p className="font-semibold">Personal Information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                To provide and deliver our photography and related services.
              </li>
              <li>
                To communicate with you regarding your bookings, inquiries, or
                orders.
              </li>
              <li>
                To improve and personalize your experience on our website.
              </li>
              <li>
                To send promotional materials or updates (with your consent).
              </li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Sharing Your Information
            </h2>
            <p className="mb-4">
              We do not sell or rent your personal data. However, we may share
              your information with third parties in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                With service providers who assist in delivering our services.
              </li>
              <li>
                If required by law, court orders, or government regulations.
              </li>
              <li>To protect our legal rights or prevent fraud.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Data Security
            </h2>
            <p>
              We use appropriate technical and organizational measures to secure
              your personal data. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you.</li>
              <li>
                Request correction of inaccurate or incomplete information.
              </li>
              <li>
                Request deletion of your personal data, subject to legal
                obligations.
              </li>
              <li>Opt out of receiving promotional communications.</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:baaratblinks@gmail.com"
                className="text-blue-600 hover:underline"
              >
                baaratblinks@gmail.com
              </a>{" "}
              or +91 94562 21688.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this policy from time to time. Any changes will be
              posted on this page with an updated effective date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
