import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const LayoutFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer--primary container">
          <div className="footer__info">
            <p className="text-4">Kevin Illu </p>
            <a href="https://twitter.com/3Kevinillu" className="text-4">
              (@3KevinIllu)
            </a>
          </div>
          <div className="footer__source">
            <a href="https://github.com/Kevin-Illu/kvn-blog" className="text-4">
              source
            </a>
            <GitHubLogoIcon />
          </div>
        </div>

        <div className="container">
          <div className="footer-pattern"></div>
        </div>
      </div>
    </footer>
  );
};
