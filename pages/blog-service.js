import React from "react";
import Navbar from "../components/navbar";
import { SeoComponent } from "../components/SeoComponent";
import { useTranslation } from "../contexts/translations";
import Section from "../components/section";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import Benefit from "../components/benefit";
import Contact from "../components/contact";

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
    </>
  );
};

export default BlogServicePage;
