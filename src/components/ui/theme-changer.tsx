import { useTheme } from "next-themes";

export const ThemeChanger = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme("light")}>
        <p>Light Mode</p>
      </button>
      <button onClick={() => setTheme("dark")}>
        <p>Dark Mode</p>
      </button>
    </>
  );
};
