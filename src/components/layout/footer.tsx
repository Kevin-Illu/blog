import { FC, ReactNode } from "react";

export interface LayoutFooterProps {
  children: ReactNode;
  className?: string;
}

export const LayoutFooter: FC<LayoutFooterProps & any> = ({
  children,
  className,
  props,
}) => {
  return (
    <footer className={`footer__root ${className}`} {...props}>
      {children}
      <div className="footer__root__principal__content">
        <p className="sans-text">KevinIllu97@gmai.com</p>
      </div>
    </footer>
  );
};
