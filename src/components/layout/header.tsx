import { FC, ReactNode } from "react";
import { NavBar } from "..";

export interface LayoutHeaderProps {
  children: ReactNode;
  className?: string;
  withNavbar?: boolean;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  children,
  className,
  withNavbar,
}) => {
  return (
    <header className="layout__header__root">
      {withNavbar && <NavBar />}
      <div className={className}>{children}</div>
    </header>
  );
};
