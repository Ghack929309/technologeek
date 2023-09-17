import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
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
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
            Empower Your Unique Vision
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            We're here to turn your digital dreams into reality. Let's talk and bring your ideas to life.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#contact-us"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-lg font-bold tracking-wider text-indigo-600 text-center">
            Technologies we use
          </div>
          <h2 className="text-center mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
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
