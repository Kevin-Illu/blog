import { FC, ReactNode } from "react";

export interface LayoutFooterProps {
  children: ReactNode;
}

export const LayoutFooter: FC<LayoutFooterProps> = ({ children }) => {
  return <footer>{children}</footer>;
};
