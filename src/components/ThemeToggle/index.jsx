import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";
import imageLight from "./images/pikachu-light.png";
import imageDark from "./images/umbreon-dark.png";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`${styles.btn} ${
        theme === "dark" ? styles.darkBackground : ""
      }`}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <span className={styles.textButtonDark}>Mean Look</span>
          <img
            className={styles.image_dark}
            src={imageDark}
            alt="Light Theme"
          />
        </>
      ) : (
        <>
          <span className={styles.textButtonLight}>Thunderbolt</span>
          <img
            className={styles.image_light}
            src={imageLight}
            alt="Dark Theme"
          />
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
