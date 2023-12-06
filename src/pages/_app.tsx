import "../styles/index.scss";
import { jetBrains_mono, nunito_sans, nunito } from "@/fonts";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <ThemeProvider>
      <div className="bg-black w-full h-full">
        <style jsx global>{`
          * {
            font-family: ${nunito.style.fontFamily};
            font-weight: 300;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${nunito_sans.style.fontFamily};
            font-weight: 600;
          }

          span[data-line] span,
          div[data-rehype-pretty-code-title] {
            font-family: ${jetBrains_mono.style.fontFamily};
          }

          .font-sans {
            font-family: ${nunito_sans.style.fontFamily};
          }

          .font-nunito {
            font-family: ${nunito.style.fontFamily};
          }

          .font-jetBrains {
            font-family: ${jetBrains_mono.style.fontFamily};
          }
        `}</style>
        <AnimatePresence mode="wait">
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
