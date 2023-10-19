import { Layout } from "@/components";
import "../styles/index.scss";
import { pt_sans, open_sans, jetBrains_mono } from "@/fonts";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <ThemeProvider>
        <style jsx global>{`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${pt_sans.style.fontFamily};
            font-weight: 400;
          }

          html {
            font-family: ${open_sans.style.fontFamily};
            font-weight: 300;
          }

          span[data-line] span,
          div[data-rehype-pretty-code-title] {
            font-family: ${jetBrains_mono.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
