import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const ScrollTopFunction = (): void => {

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

  return null as any;
};