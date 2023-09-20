import React from "react";
import { useTranslation } from "../contexts/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  const handleChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
  };

  return (
    <select
      className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-teal-500 focus:text-teal-500 focus:outline-none dark:focus:bg-gray-800"
      value={language}
      onChange={handleChange}
    >
      <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿En</option>
      <option value="fr">🇫🇷Fr</option>
    </select>
  );
}
