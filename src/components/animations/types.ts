// TODO: continuar con los animations text components

export interface AnimatedText {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  once?: boolean;
  fontFamily?: "font-sans" | "font-nunito" | "font-jetBrains";
  variants?: { [key: string]: any };
}

export interface AnimatedTextWords extends AnimatedText {
  text: string | String[];
}

export interface AnimatedTextLines extends AnimatedText {
  text: String[];
}
