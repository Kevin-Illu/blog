import { FC, ReactNode } from "react";

export interface LayoutFooterProps {
  children: ReactNode;
  className?: string;
}

export const LayoutFooter: FC<LayoutFooterProps> = ({
  children,
  className,
}) => {
  return <footer className={`${className}`}>{children}</footer>;
};
