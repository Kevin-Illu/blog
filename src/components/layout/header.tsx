import { FC, ReactNode } from "react";
import { ThemeChanger } from "..";

export interface LayoutHeaderProps {
  children: ReactNode;
}

export const LayoutHeader: FC<LayoutHeaderProps> = ({ children }) => {
  return (
    <header className="header__root">
      <nav>
        <ThemeChanger />
      </nav>
      <div>{children}</div>
    </header>
  );
};
