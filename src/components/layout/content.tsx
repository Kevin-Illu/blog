import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

export interface LayoutContentProps {
  children: ReactNode;
  className?: string;
}
export const LayoutContent: FC<LayoutContentProps> = ({
  children,
  className,
}) => {
  return <motion.main className={`${className}`}>{children}</motion.main>;
};
