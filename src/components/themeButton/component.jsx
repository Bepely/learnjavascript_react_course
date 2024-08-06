import Button from "../button/component";
import { useTheme } from "../themeContext";

function ThemeButton() {
  const { value, toggleTheme } = useTheme();
  return (
    <Button
      text={
        value === "light"
          ? "переключиться на Темный Режим"
          : "переключиться на Светлый Режим"
      }
      callback={toggleTheme}
    />
  );
}

export default ThemeButton;
