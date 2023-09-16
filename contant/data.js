import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsVerticalIcon,
  SunIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  ChartBarIcon,
  HandThumbUpIcon,
  GlobeAltIcon,
  PhoneArrowDownLeftIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Pros of working with us",
  desc: "Choosing Technologeek as your Web Design and Software Development partner comes with a multitude of advantages that set us apart from the rest.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Expertise",
      desc: "Our seasoned experts have a deep understanding of cutting-edge technologies to keep you ahead of the curve.",
      icon: <RocketLaunchIcon />,
    },
    {
      title: "Creativity",
      desc: "We're not just developers; we're artists who breathe life into your ideas with creativity and flair.",
      icon: <LightBulbIcon />,
    },
    {
      title: "Results-Driven:",
      desc: "Your success is our priority. We're committed to delivering solutions that drive growth and ROI.",
      icon: <ChartBarIcon />,
    },
    {
      title: "Collaboration",
      desc: "We work closely with you, ensuring your input shapes the final product. Your vision, our expertise.",
      icon: <HandThumbUpIcon />,
    },
    {
      title: "Cross-Platform",
      desc: "From web development to mobile apps and beyond, we cover it all to expand your digital footprint.",
      icon: <GlobeAltIcon />,
    },
  ],
};

const benefitTwo = {
  title: "How we work",
  desc: "At Technologeek, we're dedicated to going above and beyond for our clients. In addition to the advantages we've already mentioned, here are even more benefits you'll enjoy when you collaborate with us",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Agile Development Process",
      desc: "We follow an agile development methodology that allows for flexibility and quick adaptation. This means your project can evolve as your requirements change, ensuring the end result is precisely what you need.",
      icon: <AdjustmentsVerticalIcon />,
    },
    {
      title: "Transparent Pricing Structure",
      desc: "Our pricing structure is transparent, with no hidden fees or surprises. You'll know exactly what to expect, making budgeting and planning hassle-free.",
      icon: <BanknotesIcon />,
    },
    {
      title: "24/7 Support",
      desc: "Our support doesn't stop when the project is completed. We offer round-the-clock support to address any issues or concerns promptly.\n \n Partnering with Technologeek means gaining a trusted ally on your digital journey. Our goal is to help you not only meet your objectives but exceed them, creating a lasting impact in the digital landscape.",
      icon: <PhoneArrowDownLeftIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
