import {
  AdjustmentsVerticalIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  ChartBarIcon,
  HandThumbUpIcon,
  GlobeAltIcon,
  PhoneArrowDownLeftIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

import design from "../public/img/design.png";
import pros from "../public/img/pros.png";

const benefitOne = (t) => ({
  title: t("sections.whyUs.prosList.title"),
  desc: t("sections.whyUs.prosList.subtitle"),
  image: pros,
  bullets: [
    {
      title: t("sections.whyUs.prosList.items")[0].title,
      desc: t("sections.whyUs.prosList.items")[0].subtitle,
      icon: <RocketLaunchIcon />,
    },
    {
      title: t("sections.whyUs.prosList.items")[1].title,
      desc: t("sections.whyUs.prosList.items")[1].subtitle,
      icon: <LightBulbIcon />,
    },
    {
      title: t("sections.whyUs.prosList.items")[2].title,
      desc: t("sections.whyUs.prosList.items")[2].subtitle,
      icon: <ChartBarIcon />,
    },
    {
      title: t("sections.whyUs.prosList.items")[3].title,
      desc: t("sections.whyUs.prosList.items")[3].subtitle,
      icon: <HandThumbUpIcon />,
    },
    {
      title: t("sections.whyUs.prosList.items")[4].title,
      desc: t("sections.whyUs.prosList.items")[4].subtitle,
      icon: <GlobeAltIcon />,
    },
  ],
});

const benefitTwo = (t) => ({
  title: t("sections.whyUs.howWeWorkList.title"),
  desc: t("sections.whyUs.howWeWorkList.subtitle"),
  image: design,
  bullets: [
    {
      title: t("sections.whyUs.howWeWorkList.items")[0].title,
      desc: t("sections.whyUs.howWeWorkList.items")[0].subtitle,
      iconBgColor: "cyan",
      icon: <AdjustmentsVerticalIcon />,
    },
    {
      title: t("sections.whyUs.howWeWorkList.items")[1].title,
      desc: t("sections.whyUs.howWeWorkList.items")[1].subtitle,
      iconBgColor: "red",
      icon: <BanknotesIcon />,
    },
    {
      title: t("sections.whyUs.howWeWorkList.items")[2].title,
      desc: t("sections.whyUs.howWeWorkList.items")[2].subtitle,
      iconBgColor: "orange",
      icon: <PhoneArrowDownLeftIcon />,
    },
  ],
});

export { benefitOne, benefitTwo };
