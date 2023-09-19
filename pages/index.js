import Head from "next/head";
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

const Home = () => {
  return (
    <div className="mt-32">
      <Head>
        <title>
          TechnoloGeek - Free Nextjs & TailwindCSS Landing Page Template
        </title>
        <meta
          name="description"
          content="TechnoloGeek | Your one-stop-shop for all your digital needs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        id="why-us"
        pretitle="TechnoloGeek Benefits"
        title="Why choose TechnoloGeek?">
        We believe in the power of innovation. Our team of tech-savvy wizards is
        here to transform your vision into reality. We don't just build websites
        and software; we craft immersive digital experiences that captivate and
        engage.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle id="services" pretitle="Our services" title="What we offer">
        From UI/UX, Web Design, Frontend Development to Backend Development, we
        cover it all. We also provide Mobile App Development, SEO, and Digital
        Marketing services.
      </SectionTitle>
      <ServiceCards />

      <SectionTitle
        id="testimonials"
        pretitle="Testimonials"
        title="What Our Clients Say">
        Our clients satisfaction is our top priority. Here's what some of our
        valued clients have to say about their experience working with us:
      </SectionTitle>
      <Testimonials />
      <Pricing />
      <SectionTitle id="faq" pretitle="FAQ" title="Frequently asked questions">
        We understand that you may have questions about our services and how we
        can assist you in your digital journey. Below, we've compiled some
        common questions to provide you with the information you need. If you
        don't find the answer you're looking for, feel free to contact us
        directly, and we'll be happy to assist you further.
      </SectionTitle>
      <Faq />
      <Contact />
    </div>
  );
};

export default Home;
