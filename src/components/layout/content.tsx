import { FC, ReactNode } from "react";

export interface LayoutContentProps {
  children: ReactNode;
}
export const LayoutContent: FC<LayoutContentProps> = ({ children }) => {
  return <main>{children}</main>;
};
