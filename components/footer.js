import Link from "next/link";
import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <Container>
      <div className="flex items-center gap-x-8 pt-10  mt-5 border-t border-gray-100 dark:border-trueGray-700">
        <Link
          href="/privacy"
          className=" px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-teal-500 focus:text-teal-500 focus:bg-teal-100 focus:outline-none dark:focus:bg-trueGray-700">
          Privacy
        </Link>

        <div className="text-sm w-full text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}.
        </div>
      </div>
    </Container>
  );
}
