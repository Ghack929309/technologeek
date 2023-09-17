import React from "react";
import Container from "./container";

const Cta = () => {
	return (
		<Container>
			<div className="flex flex-wrap items-center justify-between w-full max-w-4xl mx-auto text-white bg-teal-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
				<div className="flex-grow text-center">
					<h2 className="text-2xl font-medium lg:text-3xl">
						Ready to start your project?
					</h2>
					<p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
						We'll help you turn your vision into reality.
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Cta;
