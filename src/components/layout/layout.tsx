import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import { LayoutFooter } from "./footer";
import { LayoutHeader } from "./header";
import { LayoutContent } from "./content";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <motion.div className="layout">{children}</motion.div>;
};

Layout.Footer = LayoutFooter;
Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
