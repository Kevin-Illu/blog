import { FC, ReactNode } from "react";
import { ThemeChanger } from "..";
import Link from "next/link";

export interface LayoutHeaderProps {
  children: ReactNode;
  className?: string;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <header className="layout__header__root">
      <nav className="layout__header__root__navbar container-base">
        <div className="layout__header__root__navbar__logo">
          <Link href="/">KVN</Link>
        </div>
        <ThemeChanger />
      </nav>
      <div className={`${className}`}>{children}</div>
    </header>
  );
};
