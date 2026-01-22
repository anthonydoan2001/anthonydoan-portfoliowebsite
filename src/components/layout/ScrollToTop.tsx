import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { instantScrollToTop } from "@/lib/scrollUtils";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top when route changes
    instantScrollToTop();
  }, [pathname]);

  return null;
};

export default ScrollToTop;

