import { PT_Serif, PT_Sans, JetBrains_Mono } from "next/font/google";

const open_sans = PT_Serif({
  weight: "400",
  subsets: ["latin"],
});

const pt_sans = PT_Sans({
  weight: "400",
  subsets: ["latin"],
});

const jetBrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export { open_sans, pt_sans, jetBrains_mono };
