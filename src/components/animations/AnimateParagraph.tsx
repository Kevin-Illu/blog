import { motion, cubicBezier } from "framer-motion";

// Define las variantes
const parentParagraphVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const childLineVariants = {
  hidden: { y: 30 },
  show: {
    y: 0,
    transition: {
      ease: cubicBezier(0.6, 0.01, -0.05, 0.95),
      duration: 0.4,
    },
  },
};

export const Paragraph = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const lines = text.split("\n");

  return (
    <motion.div
      className={`${className} paragraph`}
      variants={parentParagraphVariants}
      initial="hidden"
      animate="show"
    >
      {lines.map((line, i) => (
        <Line key={i} text={line} />
      ))}
    </motion.div>
  );
};

const Line = ({ text }: { text: string }) => (
  <div className="paragraph__line">
    <motion.p variants={childLineVariants}>{text}</motion.p>
  </div>
);
