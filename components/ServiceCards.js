import React from "react";
import Image from "next/image";

import Container from "./container";
import { GradientContainer } from "./gradientContainer";

import uiuix from "../public/img/uiux.png";
import landing from "../public/img/landing.png";
import frontend from "../public/img/frontend.png";
import mobile from "../public/img/mobile.png";
import backend from "../public/img/backend.png";
import devops from "../public/img/devops.png";

const serviceCardsData = (t) => [
  {
    title: t("sections.services.cards")[0].title,
    details: t("sections.services.cards")[0].subtitle,
    image: uiuix,
  },
  {
    title: t("sections.services.cards")[1].title,
    details: t("sections.services.cards")[1].subtitle,
    image: landing,
  },
  {
    title: t("sections.services.cards")[2].title,
    details: t("sections.services.cards")[2].subtitle,
    image: frontend,
  },
  {
    title: t("sections.services.cards")[3].title,
    details: t("sections.services.cards")[3].subtitle,
    image: backend,
  },
  {
    title: t("sections.services.cards")[4].title,
    details: t("sections.services.cards")[4].subtitle,
    image: mobile,
  },
  {
    title: t("sections.services.cards")[5].title,
    details: t("sections.services.cards")[5].subtitle,
    image: devops,
  },
];

const ServiceCards = ({ t }) => {
  return (
    <Container>
      <div className="flex flex-wrap -mx-4">
        {serviceCardsData(t).map((item, index) => (
          <ServiceCard
            image={item.image}
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

const ServiceCard = ({ title, details, image }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
        <GradientContainer className="mb-8 shadow-md hover:shadow-lg p-8 rounded-[20px] md:px-7 xl:px-10">
          <div className="flex items-center gap-2 mb-6">
            <Image src={image} width="80" height="80" alt="Avatar" />
            <h4 className="text-xl font-semibold text-dark">{title}</h4>
          </div>
          <p className="text-body-color">{details}</p>
        </GradientContainer>
      </div>
    </>
  );
};
