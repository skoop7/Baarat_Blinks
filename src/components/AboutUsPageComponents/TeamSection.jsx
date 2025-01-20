import React from "react";

const teamMembers = [
  {
    name: "Vedant Sharma",
    image: "/AboutUsHome.webp",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    designation: "Founder",
  },
  {
    name: "Pawan Gaur",

    image: "/PawanG.webp",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    designation: "Head Cinematographer",
  },
  {
    name: "Vaibhav Mishra",
    image: "/HeadVideo.webp",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
    designation: "Head Video Editor",
  },
  // {
  //   name: "Maria Smith",
  //   image: "https://i.imghippo.com/files/eTnx4457Vak.png",
  //   socials: {
  //     facebook: "#",
  //     instagram: "#",
  //     linkedin: "#",
  //   },
  //   designation: "CMO",
  // },
];

const TeamCard = ({ member, isOffset }) => (
  <div
    className={`relative w-full ${isOffset ? "lg:mt-20" : ""} h-[500px] my-5`}
  >
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover mb-12 border-[#D9D9D9] border-8 h-full relative group">
      <div className="w-full h-full overflow-hidden relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
    </div>
    <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
      <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
      <h4 className="text-lg text-gray-600 font-semibold text-nowrap">
        {member.designation}
      </h4>
      {/* <div className="flex gap-6">
        <a href={member.socials.facebook}>
          <img src="/facebook.png" alt="" className="" />
        </a>
        <a href={member.socials.linkedin}>
          <img src="/linkedin.png" alt="" className="" />
        </a>
      </div> */}
    </div>
  </div>
);

function TeamSection() {
  return (
    <div className="min-h-screen  py-20 px-4 mb-10">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl md:text-7xl  text-center text-black mb-16"
          style={{ fontFamily: "Quintessential, cursive" }}
        >
          Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              isOffset={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
