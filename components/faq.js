import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
	return (
		<Container className="!p-0">
			<div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
				{faqdata.map((item, index) => (
					<div key={item.question} className="mb-5">
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-teal-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
										<span>{item.question}</span>
										<ChevronUpIcon
											className={`${
												open ? "transform rotate-180" : ""
											} w-5 h-5 text-teal-500`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
										{item.answer}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</Container>
	);
};

const faqdata = [
	{
		question: "How can I get started with TechnoloGeek?",
		answer:
			"Getting started is simple! Just reach out to us through our contact form or give us a call. We'll schedule an initial consultation to discuss your project, goals, and how we can best assist you in achieving success.",
	},
	{
		question: " What services does TechnoloGeek offer?",
		answer:
			"We offer a wide range of services, including UI/UX design, web design, frontend and backend development, mobile app development, SEO services, digital marketing, DevOps, and landing page design. We cover all aspects of web development and digital marketing to meet your specific needs.",
	},
	{
		question: " How can I request a quote for my project?",
		answer:
			"Getting a quote is easy! Simply visit our Contact page and fill out the form with your project details. We'll get back to you promptly with a customized quote tailored to your requirements.",
	},
	{
		question: "What industries does TechnoloGeek serve?",
		answer:
			"We work with clients across various industries, including but not limited to e-commerce, healthcare, finance, education, and technology. Our expertise is adaptable, and we're equipped to serve diverse sectors.",
	},
	{
		question: "How long does it typically take to complete a project?",
		answer:
			"Project timelines vary based on complexity and scope. During our initial consultation, we'll discuss your project's timeline and provide you with an estimated completion date. Rest assured, we strive to meet deadlines without compromising on quality.",
	},
	{
		question: "Can you redesign an existing website or application?",
		answer:
			"Absolutely! We have experience in redesigning and revamping existing websites and applications to improve their functionality, aesthetics, and user experience. We can work with your current assets to create a fresh and modern digital presence.",
	},
	{
		question: "What sets TechnoloGeek apart from other agencies?",
		answer:
			"At TechnoloGeek, we pride ourselves on our commitment to creativity, innovation, and client satisfaction. Our team's expertise, dedication to quality, and personalized approach make us stand out. We believe in fostering long-term partnerships and delivering exceptional results.",
	},
	{
		question: "Do you provide ongoing support and maintenance?",
		answer:
			"Yes, we offer ongoing support and maintenance services to ensure your digital assets continue to perform optimally. Our support team is available 24/7 to address any issues or concerns.",
	},
];

export default Faq;
