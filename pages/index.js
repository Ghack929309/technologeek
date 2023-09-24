import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../constants/data";
import ServiceCards from "../components/ServiceCards";
import Benefits from "../components/benefits";
import Testimonials from "../components/testimonials";
import Faq from "../components/faq";
import Contact from "../components/contact";
import { Pricing } from "../components/pricing";
import Navbar from "../components/navbar";
import { useTranslation } from "../contexts/translations";
import { SeoComponent } from "../components/SeoComponent";
import { Analytics } from "../components/Analytics";

const Home = () => {
  const { t, loading } = useTranslation();

  if (loading) return null;

  return (
    <>
      <SeoComponent />
      <div className="mt-32">
        <Navbar t={t} />
        <Hero t={t} />
        <SectionTitle
          id="why-us"
          pretitle={t("sections.whyUs.pretitle")}
          title={t("sections.whyUs.title")}>
          {t("sections.whyUs.subtitle")}
        </SectionTitle>
        <Benefits data={benefitOne(t)} />
        <Benefits imgPos="right" data={benefitTwo(t)} />

        <SectionTitle
          id="services"
          pretitle={t("sections.services.pretitle")}
          title={t("sections.services.title")}>
          {t("sections.services.subtitle")}
        </SectionTitle>
        <ServiceCards t={t} />

        <SectionTitle
          id="testimonials"
          pretitle={t("sections.testimonial.pretitle")}
          title={t("sections.testimonial.title")}>
          {t("sections.testimonial.subtitle")}
        </SectionTitle>

        <Testimonials t={t} />

        <Pricing t={t} />

        <SectionTitle
          id="faq"
          pretitle={t("sections.faq.pretitle")}
          title={t("sections.faq.title")}>
          {t("sections.faq.subtitle")}
        </SectionTitle>
        <Faq t={t} />
        <Contact t={t} />
      </div>
      <Analytics />
    </>
  );
};

export default Home;
