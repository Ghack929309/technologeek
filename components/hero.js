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

const Hero = () => {
	return (
		<>
			<Container className="flex flex-wrap">
				<div className="w-full text-center py-14">
					<h1 className="text-7xl xl:text-8xl font-bold bg-gradient-to-r from-green-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient">
						Empower Your Unique Vision
					</h1>
					<p className="py-5 mx-auto text-center max-w-lg text-xl leading-normal text-slate-700 lg:text-xl xl:text-2xl dark:text-slate-300">
						We're here to turn your digital dreams into reality. Let's talk and
						bring your ideas to life.
					</p>
					<div className="flex flex-col justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
						<a
							href="#contact-us"
							className="px-16 py-4 text-lg font-medium text-center text-white bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-blue-500 hover:via-teal-500 hover:to-green-500 rounded-md "
						>
							Let's Talk
						</a>
					</div>
				</div>
			</Container>
			<Container>
				<div className="flex flex-col justify-center">
					<div className="text-lg font-bold tracking-wider text-teal-600 text-center">
						Technologies we use
					</div>
					<h2 className="text-center mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-gray-300">
						We use the latest technologies to build your apps
					</h2>

					<div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
						<div className="text-gray-400 dark:text-gray-400">
							<FaReact size="50" title="React.js" />
						</div>
						<div className="text-gray-400 dark:text-gray-400">
							<BiLogoVuejs size="50" title="Vue.js" />
						</div>
						<div className="text-gray-400 dark:text-gray-400">
							<TbBrandNextjs size="50" title="Next.js" />
						</div>

						<div className="pt-2 text-gray-400 dark:text-gray-400">
							<FaNodeJs size="50" />
						</div>
						<div className="text-gray-400 dark:text-gray-400">
							<BiLogoGoLang size="50" />
						</div>
						<div className="text-gray-400 dark:text-gray-400">
							<BiLogoJavascript size="50" />
						</div>
						<div className="text-gray-400 dark:text-gray-400">
							<BiLogoTypescript size="50" />
						</div>
						<div className="pt-1 text-gray-400 dark:text-gray-400">
							<BiLogoMongodb size="50" />
						</div>
						<div className="text-gray-400 dark:text-gray-400">
							<SiMysql size="50" />
						</div>
						<div className="text-gray-400 dark:text-gray-400">
							<BiLogoPostgresql size="50" />
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Hero;
