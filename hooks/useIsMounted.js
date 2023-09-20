import React, { useEffect } from "react";
export const useIsMounted = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
};
