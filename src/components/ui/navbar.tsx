import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="layout__header__root__navbar container">
      <div className="layout__header__root__navbar__logo">
        <Link href="/" className="logo">
          KVN
        </Link>
      </div>
      <div className="layout__header__root__navbar__menu">
        <button className="btn btn--theme"></button>
        <button className="btn btn-primary">menu</button>
      </div>
    </nav>
  );
};
