import Link from "next/link";
import { cubicBezier, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const itemVariants = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: cubicBezier(0.6, 0.01, -0.05, 0.95),
      duration: 1,
    },
  },
  exit: {
    y: 400,
  },
};

interface NavBarProps {
  current?: "blog" | "about";
}

export const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [nextTheme, setNextTheme] = useState("");

  const handleToggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  useEffect(() => {
    setNextTheme(theme == "light" ? "dark" : "light");
  }, [theme]);

  return (
    <motion.nav
      transition={{
        staggerChildren: 0.3,
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      className="layout__header__root__navbar container"
    >
      <div className="animated__container">
        <motion.div className="logo-container" variants={itemVariants}>
          <Link href="/" className="navbar__logo">
            <Image src="/logo.svg" alt="blog logo" width={20} height={20} />
          </Link>
        </motion.div>
      </div>
      <div className="animated__container">
        <motion.div variants={itemVariants}>
          <Link href="/blog">blog</Link>
        </motion.div>
        <motion.button
          variants={itemVariants}
          whileTap={{
            scale: 0.9,
          }}
          onClick={handleToggleTheme}
          className="theme-changer"
        >
          {nextTheme}
        </motion.button>
      </div>
    </motion.nav>
  );
};
