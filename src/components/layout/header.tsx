import { FC, ReactNode } from "react";

export interface LayoutHeaderProps {
  children: ReactNode;
  className?: string;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <header className={`layout__header__root ${className}`}>{children}</header>
  );
};
