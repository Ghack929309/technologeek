import Link from "next/link";
import React from "react";
import Container from "./container";

export default function Footer() {
  const navigation = [
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Privacy",
      href: "/privacy",
    },
  ];

  return (
    <Container>
      <div className="flex pt-10  mt-5 border-t border-gray-100 dark:border-trueGray-700">
        <div className="flex justify-start gap-x-8 w-full">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className=" px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-teal-500 focus:text-teal-500 focus:bg-teal-100 focus:outline-none dark:focus:bg-trueGray-700">
              {item.title}
            </Link>
          ))}
        </div>

        <div className="text-sm w-full text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}.
        </div>
      </div>
    </Container>
  );
}
