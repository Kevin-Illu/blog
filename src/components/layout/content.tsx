import { FC, ReactNode } from "react";

export interface LayoutContentProps {
  children: ReactNode;
  className?: string;
}
export const LayoutContent: FC<LayoutContentProps> = ({
  children,
  className,
}) => {
  return <main className={`${className}`}>{children}</main>;
};
