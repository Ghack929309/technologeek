import React, { useEffect, useMemo } from "react";
import { useTheme } from "next-themes";

export const GradientContainer = ({ children, className, border = "1.5" }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const isDark = useMemo(() => theme === "dark", [theme]);
  const style = {
    border: `${border}px solid #0000`,
    background: `linear-gradient(${
      isDark ? "#000000, #000000" : "#ffffff,#ffffff"
    }) padding-box, linear-gradient(var(--angle), #4ade80, #3b82f6, #22d3ee) border-box`,
    animation: "10s rotate linear infinite",
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};
