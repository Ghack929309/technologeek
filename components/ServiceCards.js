import React from "react";
import Container from "./container";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const serviceCardsData = [
  {
    title: "UI/UX",
    details:
      "We are dedicated to creating visually stunning and intuitive interfaces, easy to use and navigate, that captivate users and keep them engaged.",
    icon: <RocketLaunchIcon />,
  },
  {
    title: "Landing Page Design",
    details:
      "We specialize in crafting high-converting landing pages that make a lasting impression and drive action. Whether it's lead generation or product promotion, we design landing pages that get results.",
    icon: <RocketLaunchIcon />,
  },
  {
    title: "Frontend Development",
    details:
      "We specialize in turning design concepts into interactive and responsive web applications, enhancing user interactions and experiences.",
    icon: <RocketLaunchIcon />,
  },
  {
    title: "Backend Development",
    details:
      "We ensure your web applications are robust, secure, and scalable, providing the foundation for seamless user experiences.",
    icon: <RocketLaunchIcon />,
  },
  {
    title: "Mobile Development",
    details:
      "We specialize in creating mobile apps that are user-centric, feature-rich, and compatible across various platforms, helping you connect with your audience on the go.",
    icon: <RocketLaunchIcon />,
  },
  {
    title: "DevOps",
    details:
      "We optimize your software development processes, fostering collaboration between development and IT operations to enhance efficiency, quality, and continuous delivery.",
    icon: <RocketLaunchIcon />,
  },
];

const ServiceCards = () => {
  return (
    <Container>
      <div className="flex flex-wrap -mx-4">
        {serviceCardsData.map((item, index) => (
          <ServiceCard key={index} title={item.title} details={item.details} icon={item.icon} />
        ))}
      </div>
    </Container>
  );
};

export default ServiceCards;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-8 rounded-[20px] p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center justify-center flex-shrink-0 bg-indigo-500 rounded-md w-11 h-11 p-2">
              {icon}
            </div>
            <h4 className="text-xl font-semibold text-dark">{title}</h4>
          </div>
          <p className="text-body-color">{details}</p>
        </div>
      </div>
    </>
  );
};
