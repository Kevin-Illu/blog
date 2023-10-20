import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setIsChecked(theme === "dark");
  }, []);

  const handleThemeChange = (checked: boolean) => {
    setIsChecked(checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="theme__changer">
      <p>light</p>
      <Switch.Root
        checked={isChecked}
        onCheckedChange={handleThemeChange}
        className="switch__root"
      >
        <Switch.Thumb className="switch__root__thumb" />
      </Switch.Root>
      <p>dark</p>
    </div>
  );
};
