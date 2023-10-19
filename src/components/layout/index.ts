import { FC } from "react";
import { Layout as LayoutHOC } from "..";
import { LayoutContent, LayoutContentProps } from "./layout-content";
import { LayoutHeader, LayoutHeaderProps } from "./layout-header";
import { LayoutFooter, LayoutFooterProps } from "./layout-footer";

interface LayoutHOCProps {
  Content: FC<LayoutContentProps>;
  Footer: FC<LayoutFooterProps>;
  Header: FC<LayoutHeaderProps>;
}

const Layout: LayoutHOCProps = Object.assign(LayoutHOC, {
  Content: LayoutContent,
  Header: LayoutHeader,
  Footer: LayoutFooter,
});

export default Layout;
