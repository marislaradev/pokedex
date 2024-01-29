import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import ThemeToggle from "../ThemeToggle";
import React, { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles.header}>
      {/* Logo */}
      <Link to="/">
        <img
          src="logo.png"
          alt="logo da Pokédex"
          key="logo"
          className={styles.logo_pokedex}
        />
      </Link>

      {/* Menu Sandwich */}
      <nav
        className={`${styles.menuSandwich} ${showMenu ? styles.show : ""}`}
        onClick={toggleMenu}
      >
        <Link to="/">Home</Link>
        <ThemeToggle />
      </nav>

      {/* Sandwich menu button */}
      <div className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
      </div>
    </header>
  );
}

export default Header;
