import React, { ReactNode } from "react";
import { cubicBezier, motion } from "framer-motion";

import { LayoutFooter } from "./footer";
import { LayoutHeader } from "./header";
import { LayoutContent } from "./content";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <motion.div
      initial={{
        y: 40,
        opacity: 0,
        scale: 0.98,
      }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          ease: cubicBezier(0.6, 0.01, -0.05, 0.95),
          duration: 1,
        },
      }}
      exit={{
        y: 40,
        opacity: 0,
        scale: 0.98,
        transition: {
          ease: cubicBezier(0.6, 0.01, -0.05, 0.95),
          duration: 1,
        },
      }}
      className="layout"
    >
      {children}
    </motion.div>
  );
};

Layout.Footer = LayoutFooter;
Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
