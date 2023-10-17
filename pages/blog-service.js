import React from "react";
import Link from "next/link";

import Navbar from "../components/navbar";
import { SeoComponent } from "../components/SeoComponent";
import { useTranslation } from "../contexts/translations";
import Section from "../components/section";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import Benefit from "../components/benefit";
import Contact from "../components/contact";
import { GradientContainer } from "../components/gradientContainer";
import { Analytics } from "../components/Analytics";

const BlogServicePage = () => {
  const { t, loading } = useTranslation();

  if (loading) return null;

  return (
    <>
      <SeoComponent />
      <div className="mt-32">
        <Navbar t={t} />
        <Section
          id="welcome-to-your-blogging-journey"
          pretitle={t("sections.blogService.pretitle")}
          title={t("sections.blogService.title")}
        >
          {t("sections.blogService.subtitle")}
          <div className="flex justify-center mt-6">
            <GradientContainer
              border="2"
              className=" h-fit rounded-xl max-w-lg text-center text-gray-900  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  dark:shadow-black/20 p-8 dark:text-gray-300"
            >
              <h3 className="mb-4 text-2xl font-semibold">
                {t("sections.blogService.pricingTitle")}
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {t("sections.blogService.pricingSubtitle")}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <Link
                  href="#contact-us"
                  className="px-6 py-2 text-white bg-gradient-to-r from-teal-500 via-teal-500 to-green-500 rounded-md md:ml-5"
                >
                  {t("sections.blogService.price")}
                </Link>
              </div>
            </GradientContainer>
          </div>
        </Section>

        <Section id="our-blog-service-offer" title={t("sections.blogService.ourOfferTitle")}>
          {t("sections.blogService.ourOfferSubtitle")}
          <div className="w-full mt-5 text-left">
            <Benefit
              title={t("sections.blogService.ourOfferList")[0].title}
              icon={<LightBulbIcon />}
            >
              {t("sections.blogService.ourOfferList")[0].subtitle}
            </Benefit>
            <Benefit
              title={t("sections.blogService.ourOfferList")[1].title}
              icon={<LightBulbIcon />}
            >
              {t("sections.blogService.ourOfferList")[1].subtitle}
            </Benefit>
            <Benefit
              title={t("sections.blogService.ourOfferList")[2].title}
              icon={<LightBulbIcon />}
            >
              {t("sections.blogService.ourOfferList")[2].subtitle}
            </Benefit>
            <Benefit
              title={t("sections.blogService.ourOfferList")[3].title}
              icon={<LightBulbIcon />}
            >
              {t("sections.blogService.ourOfferList")[3].subtitle}
            </Benefit>
          </div>
        </Section>

        <Section id="our-blog-service-offer" title={t("sections.blogService.exampleBlogtitle")}>
          <p className="mb-4">{t("sections.blogService.exampleBlogSubtitle")}</p>
          <a
            href="https://7fcf3b9b.polis-landing.pages.dev/blog"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            <div className="rounded-md overflow-hidden">
              <img src="/img/polis-blog.png" className="object-cover" />
            </div>
          </a>
          <div className="w-full mt-5 text-left">
            <Benefit
              title={t("sections.blogService.exampleBlogSectionList")[0].title}
              icon={<LightBulbIcon />}
            >
              {t("sections.blogService.exampleBlogSectionList")[0].subtitle}
            </Benefit>
            <Benefit
              title={t("sections.blogService.exampleBlogSectionList")[1].title}
              icon={<LightBulbIcon />}
            >
              {t("sections.blogService.exampleBlogSectionList")[1].subtitle}
            </Benefit>
            <Benefit
              title={t("sections.blogService.exampleBlogSectionList")[2].title}
              icon={<LightBulbIcon />}
            >
              {t("sections.blogService.exampleBlogSectionList")[2].subtitle}
            </Benefit>
          </div>
        </Section>

        <Section
          id="lets-start-your-blogging-journey"
          pretitle={t("sections.blogService.getStartedPretitle")}
          title={t("sections.blogService.getStartedTitle")}
        >
          {t("sections.blogService.getStartedSubtitle")}
        </Section>

        <Contact t={t} showHeader={false} />
      </div>
      <Analytics />
    </>
  );
};

export default BlogServicePage;
