import React from "react";
import { GradientContainer } from "./gradientContainer";
import Link from "next/link";

export const Pricing = ({ t }) => {
  return (
    <section id="pricing" className="bg-white dark:bg-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <div className="text-sm font-bold tracking-wider text-teal-500 uppercase">
            {t("sections.pricing.pretitle")}
          </div>

          <h2 className="text-center mt-3 mb-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-gray-300">
            {t("sections.pricing.title")}
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            {t("sections.pricing.subtitle")}
          </p>
        </div>
        <div className="gap-y-8 place-content-center grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <GradientContainer
            border="2"
            className="rounded-xl max-w-lg text-center text-gray-900  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  dark:shadow-black/20 p-8 dark:text-gray-300">
            <h3 className="mb-4 text-2xl font-semibold">
              {t("sections.pricing.cards")[0].title}
            </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              {t("sections.pricing.cards")[0].description}
            </p>
            <div className="flex flex-col justify-center items-center my-8">
              <span className="mr-2 text-4xl font-extrabold">
                {t("sections.pricing.cards")[0].price}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {t("sections.pricing.cards")[0].per}
              </span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              {t("sections.pricing.cards")[0].features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </GradientContainer>

          <GradientContainer
            border="2"
            className=" h-fit rounded-xl max-w-lg text-center text-gray-900  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  dark:shadow-black/20 p-8 dark:text-gray-300">
            <h3 className="mb-4 text-2xl font-semibold">
              {t("sections.pricing.cards")[1].title}
            </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              {t("sections.pricing.cards")[1].description}
            </p>
            <div className="flex justify-center items-baseline my-8">
              <Link
                href="#contact-us"
                className="px-6 py-2 text-white bg-gradient-to-r from-teal-500 via-teal-500 to-green-500 rounded-md md:ml-5">
                {t("sections.pricing.cards")[1].price}
              </Link>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              {t("sections.pricing.cards")[1].features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </GradientContainer>

          <GradientContainer
            border="2"
            className=" h-fit rounded-xl max-w-lg text-center text-gray-900  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  dark:shadow-black/20 p-8 dark:text-gray-300">
            <h3 className="mb-4 text-2xl font-semibold">
              {t("sections.pricing.cards")[2].title}
            </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              {t("sections.pricing.cards")[2].description}
            </p>
            <div className="flex flex-col justify-center items-center my-8">
              <span className="mr-2 text-4xl font-extrabold">
                {t("sections.pricing.cards")[2].price}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {t("sections.pricing.cards")[2].per}
              </span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              {t("sections.pricing.cards")[2].features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </GradientContainer>
        </div>
      </div>
    </section>
  );
};

const CheckIcon = () => {
  return (
    <svg
      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"></path>
    </svg>
  );
};
