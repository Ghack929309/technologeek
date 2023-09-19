import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              The <Mark>Technologeek</Mark> team transformed my e-commerce
              website into a high-performing sales platform.
            </p>

            <Avatar
              image={userOneImg}
              name="Vanessa G.C."
              title="CEO Daromar INC"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              We're now spending less while getting more inbound calls. Their
              natural <Mark>SEO</Mark> work has been a game-changer. Thank you!
            </p>

            <Avatar image={userTwoImg} name="Dylan Ambrose" title="" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              We highly recommend their services to anyone looking for
              top-quality <Mark>web design</Mark> and software development.
            </p>

            <Avatar image={userThreeImg} name="Gabrielle Winn" title="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      <mark className="text-teal-800 bg-teal-100 rounded-md ring-teal-100 ring-4 dark:ring-teal-900 dark:bg-teal-900 dark:text-teal-200">
        {props.children}
      </mark>
    </>
  );
}

export default Testimonials;
