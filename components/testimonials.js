import Image from "next/image";
import React from "react";
import Container from "./container";
import classNames from "classnames";

const Testimonials = ({ t }) => {
  const reviews = [
    {
      src: "/img/user1.jpg",
      name: "Vanessa G.C.",
      title: "CEO Daromar INC",
    },
    {
      src: "/img/user2.jpg",
      name: "Dylan Ambrose",
      title: "",
    },
    {
      src: "/img/user3.jpg",
      name: "Gabrielle Winn",
      title: "",
    },
  ];

  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {t("sections.testimonial.cards").map((text, idx) => (
          <div
            key={text + idx}
            className={classNames({
              "lg:col-span-2 xl:col-auto": idx === 0,
            })}>
            <div
              key={idx}
              className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal ">{text.review}</p>
              <Avatar
                image={reviews[idx].src}
                name={reviews[idx].name}
                title={reviews[idx]?.title}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image src={props.image} width="40" height="40" alt="Avatar" />
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
