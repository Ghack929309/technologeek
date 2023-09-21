import React, { useMemo } from "react";
import { useTheme } from "next-themes";
import { useIsMounted } from "../hooks/useIsMounted";

export const GradientContainer = ({ children, className, border = "1.5" }) => {
  const { theme } = useTheme();
  // const isMounted = useIsMounted();
  const isDark = theme === "dark";
  const style = {
    border: `${border}px solid #0000`,
    background: `linear-gradient(${
      isDark ? "#000000, #000000" : "#ffffff,#ffffff"
    }) padding-box, linear-gradient(var(--angle), #4ade80, #3b82f6, #22d3ee) border-box`,
    animation: "10s rotate linear infinite",
  };

  // if (!isMounted) return null;

  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-cyan-400 animate-gradient opacity-75 blur"></div>
      <div style={style} className={`relative ${className}`}>
        {children}
      </div>
    </div>
  );
};
