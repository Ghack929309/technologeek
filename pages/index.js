import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../contant/data";
import ServiceCards from "../components/ServiceCards";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle pretitle="Nextly Benefits" title=" Why Choose Technologeek?">
        At Technologeek, we believe in the power of innovation. Our team of tech-savvy wizards is
        here to transform your vision into reality. We don't just build websites and software; we
        craft immersive digital experiences that captivate and engage.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle pretitle="Our services" title="What We Offer" id="services">
        From UI/UX, Web Design, Frontend Development to Backend Development, we cover it all. We
        also provide Mobile App Development, SEO, and Digital Marketing services.
      </SectionTitle>
      <ServiceCards />

      <SectionTitle pretitle="Testimonials" title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness. Use this section to
        highlight your popular customers.
      </SectionTitle>
      <Testimonials />

      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      We understand that you may have questions about our services and how we can assist you in your digital journey. Below, we've compiled some common questions to provide you with the information you need. If you don't find the answer you're looking for, feel free to contact us directly, and we'll be happy to assist you further.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
