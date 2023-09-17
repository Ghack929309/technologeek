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
  desc: "Choosing TechnoloGeek as your Web Design and Software Development partner comes with a multitude of advantages that set us apart from the rest.",
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
  desc: "At TechnoloGeek, we're dedicated to going above and beyond for our clients. In addition to the advantages we've already mentioned, here are even more benefits you'll enjoy when you collaborate with us",
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
      desc: "Our support doesn't stop when the project is completed. We offer round-the-clock support to address any issues or concerns promptly.\n \n Partnering with TechnoloGeek means gaining a trusted ally on your digital journey. Our goal is to help you not only meet your objectives but exceed them, creating a lasting impact in the digital landscape.",
      icon: <PhoneArrowDownLeftIcon />,
    },
  ],
};

const privacyPolicy = [
  {
    title: "1. introduction",
    desc: 'TechnoloGeek ("we," "our," or "us") is committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our website or services. By accessing or using our website, you consent to the practices described in this policy.',
  },
  {
    title: "2. Information We Collect",
    desc: "We may collect the following types of information:",
    subSection: [
      {
        title: "2.1. Personal Information",
        list: "Name,Email address,Phone number,Company name (if applicable),Other information you provide voluntarily",
      },
      {
        title: "2.2. Non-Personal Information",
        list: "Usage data (e.g., IP address, browser type, referring pages), Cookies and similar tracking technologies (see Section 5)",
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    desc: "We may use your information for the following purposes",
    subSection: [
      {
        list: "To provide, maintain, and improve our services,To send you newsletters, updates, and marketing materials (you can opt-out at any time),To respond to your inquiries and provide customer support,To protect our rights, property, or safety and that of our users",
      },
    ],
  },
  {
    title: "4. How We Share Your Information",
    desc: "We may share your information with:",
    subSection: [
      {
        list: "Service providers, business partners, and contractors necessary for the operation of our services,Legal authorities when required by law or to protect our rights",
      },
    ],
  },
  {
    title: "5. Cookies and Tracking Technologies",
    desc: "We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings, but disabling them may affect your ability to use certain features of our site.",
  },
  {
    title: "6. Security",
    desc: "We take reasonable measures to protect your information from unauthorized access, disclosure, or alteration. However, no data transmission over the internet is entirely secure, and we cannot guarantee the absolute security of your information.",
  },
  {
    title: "7. Links to Third-Party Websites",
    desc: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Please review the privacy policies of those websites before providing any personal information.",
  },
  {
    title: "8. Changes to this Privacy Policy",
    desc: "We may update this Privacy Policy from time to time to reflect changes in our practices. The updated policy will be posted on our website, and the date of the latest revision will be indicated.",
  },
  {
    title: "9. Contact Us",
    desc: "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at [contact email or address].    By using our website or services, you acknowledge that you have read and agree to this Privacy Policy.",
  },
];

export { benefitOne, benefitTwo, privacyPolicy };
