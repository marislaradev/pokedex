import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useTheme } from "../../context/ThemeContext";

function Card({ children, to }) {
  const { theme } = useTheme();
  const cardClassName = theme === "light" ? styles.lightCard : styles.darkCard;

  return (
    <Link to={to} className={`${styles.card} ${cardClassName}`}>
      <section>{children}</section>
    </Link>
  );
}

export default Card;
