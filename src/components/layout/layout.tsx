import React, { ReactNode } from "react";

import { LayoutFooter } from "./footer";
import { LayoutHeader } from "./header";
import { LayoutContent } from "./content";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

Layout.Footer = LayoutFooter;
Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
