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
import { useTranslation } from "../contexts/translations";

const Home = () => {
	const { t, loading } = useTranslation();

	if (loading) return null;

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
			<Navbar t={t} />
			<Hero t={t} />
			<SectionTitle
				id="why-us"
				pretitle={t("sections.whyUs.pretitle")}
				title={t("sections.whyUs.title")}
			>
				{t("sections.whyUs.subtitle")}
			</SectionTitle>
			<Benefits data={benefitOne(t)} />
			<Benefits imgPos="right" data={benefitTwo(t)} />

			<SectionTitle
				id="services"
				pretitle={t("sections.services.pretitle")}
				title={t("sections.services.title")}
			>
				{t("sections.services.subtitle")}
			</SectionTitle>
			<ServiceCards t={t} />

			<SectionTitle
				id="testimonials"
				pretitle={t("sections.testimonial.pretitle")}
				title={t("sections.testimonial.title")}
			>
				{t("sections.testimonial.subtitle")}
			</SectionTitle>

			<Testimonials t={t} />

			<Pricing />

			<SectionTitle id="faq" pretitle="FAQ" title="Frequently asked questions">
				Below, we've compiled some common questions to provide you with the
				information you need. If you don't find the answer you're looking for,
				feel free to contact us directly, and we'll be happy to assist you
				further.
			</SectionTitle>
			<Faq />
			<Contact />
		</div>
	);
};

export default Home;
