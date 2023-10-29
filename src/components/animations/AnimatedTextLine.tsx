import React, { FC } from "react";

interface AnimatedTextLines {
  lines: String[];
  as?: keyof JSX.IntrinsicElements;
}

// TODO: continuar con este componente
export const AnimatedTextLines: FC<AnimatedTextLines> = ({ lines }) => {
  return <div>AnimatedTextLine</div>;
};
