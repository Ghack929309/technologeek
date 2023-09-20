import React from "react";
import { useIsMounted } from "../utils/useIsMounted";
import { useTheme } from "next-themes";

export const InfiniteSlider = ({ slides }) => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  const isDark = theme === "dark";
  return (
    <div
      className={`relative mt-10 max-w-full m-auto sm:max-w-[80%] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,${
        isDark ? "black" : "white"
      }_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,${
        isDark ? "black" : "white"
      }_0%,rgba(255,255,255,0)_100%)] after:content-['']`}>
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {slides.map((slide, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}>
            {slide}
          </div>
        ))}
        {slides.map((slide, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};
