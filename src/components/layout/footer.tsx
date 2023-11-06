import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FC, ReactNode } from "react";

export interface LayoutFooterProps {
  children?: ReactNode;
  className?: string;
}

export const LayoutFooter: FC<LayoutFooterProps & any> = ({
  children,
  className,
  props,
}) => {
  return (
    <footer className="container home__footer">
      {children && (
        <div className={`${className}`} {...props}>
          {children}
        </div>
      )}
      <div className="home__footer__info">
        <p className="text-4">Kevin Illu </p>
        <a href="https://twitter.com/3Kevinillu" className="text-4">
          (@3KevinIllu)
        </a>
      </div>
      <div className="home__footer__source">
        <a href="https://github.com/Kevin-Illu/kvn-blog" className="text-4">
          source
        </a>
        <GitHubLogoIcon />
      </div>
    </footer>
  );
};
