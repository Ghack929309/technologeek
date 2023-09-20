import React from "react";
import Image from "next/image";
import Container from "./container";
import { FaFigma, FaMobileAlt, FaAws } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { BsFiletypeCss, BsCodeSlash } from "react-icons/bs";
import { GradientContainer } from "./gradientContainer";
import uiuix from "../public/img/uiux.png";
import landing from "../public/img/landing.png";
import frontend from "../public/img/frontend.png";
import mobile from "../public/img/mobile.png";
import backend from "../public/img/backend.png";
import devops from "../public/img/devops.png";

const serviceCardsData = [
  {
    title: "UI/UX & Design Systems",
    details:
      "We are dedicated to creating visually stunning and intuitive interfaces, that captivate users and keep them engaged. We also create design systems that ensure consistency across your digital products.",
    icon: <FaFigma />,
    image: uiuix,
  },
  {
    title: "Landing Page Design",
    details:
      "We specialize in crafting high-converting landing pages that make a lasting impression and drive action. Whether it's lead generation or product promotion, we design landing pages that get results.",
    icon: <CgWebsite />,
    image: landing,
  },
  {
    title: "Frontend Development",
    details:
      "We are experienced in turning design concepts into interactive and responsive web applications, enhancing user interactions and experiences. We also provide ongoing support and maintenance.",
    icon: <BsFiletypeCss />,
    image: frontend,
  },
  {
    title: "Backend Development",
    details:
      "By using modern and cutting adge technologies, we ensure the Backend of your apps is robust, secure, and scalable, providing the foundation for seamless user experiences.",
    icon: <BsCodeSlash />,
    image: backend,
  },
  {
    title: "Mobile Development",
    details:
      "We specialize in creating mobile apps that are user-centric, feature-rich, and compatible across various platforms, helping you connect with your audience on the go.",
    icon: <FaMobileAlt />,
    image: mobile,
  },
  {
    title: "DevOps",
    details:
      "We optimize your software development processes, fostering collaboration between development and IT operations to enhance efficiency, quality, and continuous delivery.",
    icon: <FaAws />,
    image: devops,
  },
];

const ServiceCards = () => {
  return (
    <Container>
      <div className="flex flex-wrap -mx-4">
        {serviceCardsData.map((item, index) => (
          <ServiceCard
            src={item.image}
            key={index}
            title={item.title}
            details={item.details}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default ServiceCards;

const ServiceCard = ({ icon, title, details, src }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
        <GradientContainer className="mb-8 shadow-md hover:shadow-lg p-8 rounded-[20px] md:px-7 xl:px-10">
          <div className="flex items-center gap-2 mb-6">
            {/* <div className="flex text-white items-center justify-center flex-shrink-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-md w-11 h-11 p-2"> */}
            {/* {icon} */}
            <Image src={src} width="80" height="80" alt="Avatar" />
            {/* </div> */}
            <h4 className="text-xl font-semibold text-dark">{title}</h4>
          </div>
          <p className="text-body-color">{details}</p>
        </GradientContainer>
      </div>
    </>
  );
};
