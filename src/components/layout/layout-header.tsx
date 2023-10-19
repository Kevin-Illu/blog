import { FC, ReactNode } from "react";

export interface LayoutHeaderProps {
  children: ReactNode;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({ children }) => {
  return <header>{children}</header>;
};
