function ContactLabel() {
  return (
    <div className="relative w-full h-screen mt-5 mb-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(/ContactLabel.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      />

      {/* Contact Information */}
      <div className="absolute sm:right-40 top-0 h-full w-full md:w-[400px] bg-white/95 backdrop-blur-sm">
        <div className="p-8 h-full flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            {/* Email */}
            <div className="flex flex-col items-center space-x-4 ">
              <div className=" p-3 rounded-full  ml-2">
                <img src="/Mail.png" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-medium text-black">EMAIL</p>
                <p className="text-gray-900">baaratblinks@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center space-x-4">
              <div className=" p-3 rounded-full ml-2">
                <img src="/Location.png" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-medium text-black">ADDRESS</p>
                <p className="text-gray-900">Mahindra Building,</p>
                <p className="text-gray-900">
                  in front of Mukesh Johri Hospital,243601.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center space-x-4">
              <div className=" p-3 rounded-full ml-2">
                <img src="/Mobile.png" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm font-medium text-black">CONTACT</p>
                <p className="text-gray-900">+91 945 622 1688</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactLabel;
