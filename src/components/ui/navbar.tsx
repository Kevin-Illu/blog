import Link from "next/link";
import { ThemeChanger } from "..";

export const NavBar = () => {
  return (
    <nav className="layout__header__root__navbar">
      <div className="layout__header__root__navbar__logo">
        <Link href="/" className="font-extrabold">
          *
        </Link>
      </div>
      <div className="layout__header__root__navbar__menu">
        <ThemeChanger />
      </div>
    </nav>
  );
};
