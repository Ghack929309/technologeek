import React from "react";

export const Pricing = () => {
	return (
		<section id="pricing" className="bg-white dark:bg-black">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
					<div className="text-sm font-bold tracking-wider text-teal-500 uppercase">
						Pricing
					</div>

					<h2 className="text-center mt-3 mb-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-gray-300">
						Simple no-tricks pricing
					</h2>
					<p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
						We believe in keeping things simple and honest. Our pricing is free
						of gimmicks and hidden fees. With us, you'll always know exactly
						what you're getting and what it costs. No tricks, just transparent
						pricing that makes your decision-making process easier.
					</p>
				</div>
				<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
					<div className="bg-gradient-to-r rounded-lg p-0.5 h-fit from-green-400 via-blue-500  to-cyan-400 animate-gradient">
						<div className="flex flex-col rounded-lg animate-gradient mx-auto max-w-lg text-center text-gray-900 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-black dark:shadow-black/20 xl:p-8 dark:text-gray-300">
							<h3 className="mb-4 text-2xl font-semibold">
								Single/Landing Page
							</h3>
							<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
								For landing pages. To let people know about your business and
								share your contact information.
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-4xl font-extrabold">CA $599</span>
							</div>

							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Customized landing page design</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Responsive design for mobile and desktop</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>User-friendly and intuitive layout</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>
										SEO optimization for better search engine visibility{" "}
									</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Contact forms or lead capture mechanisms </span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>+CA50 for each additional pages</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="bg-gradient-to-r rounded-lg p-0.5 h-fit from-green-400 via-blue-500  to-cyan-400 animate-gradient">
						<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-black dark:text-gray-300">
							<h3 className="mb-4 text-2xl font-semibold">
								Software Development
							</h3>
							<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
								Custom Web Application, Startup Software, Automation Software,
								Mobile App Development etc...
							</p>
							<div className="flex justify-center items-baseline my-8">
								<span className="mr-2 text-4xl font-extrabold">CA500</span>
							</div>

							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Development process planning</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>UI/UX Design</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Prototyping</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Frontend Development</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Backend Development</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Database Design</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>QA Testing</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>CI/CD</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Cloud Deployment</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>And more...</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="bg-gradient-to-r rounded-lg p-0.5 h-fit from-green-400 via-blue-500  to-cyan-400 animate-gradient">
						<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-black dark:text-gray-300">
							<h3 className="mb-4 text-2xl font-semibold">
								Staff Augmentation
							</h3>
							<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
								Elevate your team's potential and productivity with our
								experienced and passionate Senior Developers.
							</p>
							<div className="flex flex-col justify-center items-center my-8">
								<span className="mr-2 text-4xl font-extrabold">$65</span>
								<span class="text-gray-500 dark:text-gray-400">
									per dev / hour
								</span>
							</div>

							<ul role="list" className="mb-8 space-y-4 text-left">
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Senior Software Engineers</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Senior JavaScript/TypeScript Developers</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Senior React/Frontend Developers</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Senior Full-Stack Developers</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Senior Backend/Node.js Developers</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Senior React/Node.js Full-Stack Developers</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Senior Backend/Golang Developers</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Senior UI/UX Designers</span>
								</li>
								<li className="flex items-center space-x-3">
									<CheckIcon />
									<span>Seniors DevOps Engineers</span>
								</li>
							</ul>
						</div>
					</div>
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
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
				clip-rule="evenodd"
			></path>
		</svg>
	);
};
