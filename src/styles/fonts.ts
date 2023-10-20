import { Nunito, Nunito_Sans, JetBrains_Mono } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
});

const jetBrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export { nunito, nunito_sans, jetBrains_mono };
