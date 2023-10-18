import Link from "next/link";
import React from "react";
import Container from "./container";
import { useTranslation } from "../contexts/translations";
import { CheckIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  const { t, loading } = useTranslation();
  if (loading) return null;
  return (
    <Container>
      <div className="flex items-center gap-x-8 pt-10  mt-5 border-t border-gray-100 dark:border-trueGray-700">
        <Link
          href="/privacy"
          className=" px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-teal-500 focus:text-teal-500 focus:bg-teal-100 focus:outline-none dark:focus:bg-trueGray-700"
        >
          {t("sections.navigation.privacy")}
        </Link>

        <div className="text-sm text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}.
        </div>

        <div className="flex gap-2 items-center">
          <ShieldCheckIcon className="w-8 h-8 text-green-500" />
          <a
            href="https://transparencyreport.google.com/safe-browsing/search?url=technologeek.ca&hl=en"
            target="_blank"
          >
            This website is safe
          </a>
        </div>
      </div>
    </Container>
  );
}
