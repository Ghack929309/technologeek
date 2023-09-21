import Container from "./container";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
	BiLogoTypescript,
	BiLogoJavascript,
	BiLogoMongodb,
	BiLogoVuejs,
	BiLogoPostgresql,
	BiLogoGoLang,
} from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { InfiniteSlider } from "./infiniteSlider";

const Hero = ({ t }) => {
	const logos = [
		<FaReact
			size="50"
			title="React.js"
			className="text-gray-400 dark:text-gray-400"
		/>,
		<BiLogoVuejs
			size="50"
			title="Vue.js"
			className="text-gray-400 dark:text-gray-400"
		/>,
		<TbBrandNextjs
			size="50"
			title="Next.js"
			className="text-gray-400 dark:text-gray-400"
		/>,
		<FaNodeJs size="50" className="text-gray-400 dark:text-gray-400" />,
		<BiLogoGoLang size="50" className="text-gray-400 dark:text-gray-400" />,
		<BiLogoJavascript size="50" className="text-gray-400 dark:text-gray-400" />,
		<BiLogoTypescript size="50" className="text-gray-400 dark:text-gray-400" />,
		<BiLogoMongodb size="50" className="text-gray-400 dark:text-gray-400" />,
		<SiMysql size="50" className="text-gray-400 dark:text-gray-400" />,
		<BiLogoPostgresql size="50" className="text-gray-400 dark:text-gray-400" />,
	];
	return (
		<>
			<Container className="flex flex-wrap">
				<div className="w-full text-center py-14">
					<h1 className="text-7xl xl:text-8xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient">
						{t("sections.hero").title}
					</h1>
					<p className="py-5 mx-auto text-center max-w-lg text-xl leading-normal text-slate-700 lg:text-xl xl:text-2xl dark:text-slate-300">
						{t("sections.hero").subtitle}
					</p>
					<div className="flex flex-col justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
						<a
							href="#contact-us"
							className="px-16 py-4 text-lg font-medium text-center text-white bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-blue-500 hover:via-teal-500 hover:to-green-500 rounded-md "
						>
							{t("sections.hero").buttonText}
						</a>
					</div>
				</div>
			</Container>
			<Container>
				<div className="flex flex-col justify-center">
					<div className="text-lg font-bold tracking-wider text-teal-600 text-center">
						{t("sections.tech.pretitle")}
					</div>
					<h2 className="text-center mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-gray-300">
						{t("sections.tech.title")}{" "}
					</h2>
					<InfiniteSlider slides={logos} />
				</div>
			</Container>
		</>
	);
};

export default Hero;
