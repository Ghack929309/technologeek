import React from "react";
import { useIsMounted } from "../utils/useIsMounted";
import { useTheme } from "next-themes";
import classNames from "classnames";

export const InfiniteSlider = ({ slides }) => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  const isDark = theme === "dark";

  if (!isMounted) return null;

  return (
    <div
      className={classNames(
        "relative mt-10 max-w-full m-auto sm:max-w-[80%] overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']",
        {
          "before:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] after:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)]":
            isDark,
          "before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)]":
            !isDark,
        }
      )}
    >
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {slides.map((slide, index) => (
          <div className="slide flex w-[125px] items-center justify-center" key={index}>
            {slide}
          </div>
        ))}
        {slides.map((slide, index) => (
          <div className="slide flex w-[125px] items-center justify-center" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};
