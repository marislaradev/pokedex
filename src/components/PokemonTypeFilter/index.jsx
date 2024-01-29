import React from "react";
import styles from "./PokemonTypeFilter.module.css";
import { useTheme } from "../../context/ThemeContext";

const PokemonTypeFilter = ({ types, onSelectType }) => {
  const { theme } = useTheme();
  const selectClassName =
    theme === "light" ? styles.lightSelect : styles.darkSelect;
  const filteredTypes = types.filter(
    (type) => type !== "unknown" && type !== "shadow"
  );

  return (
    <div>
      <label className={styles.custom_label} htmlFor="typeFilter">
        Filter by type:
      </label>
      <select
        className={`${styles.select_pokemon} ${selectClassName}`}
        id="typeFilter"
        onChange={(e) => onSelectType(e.target.value)}
      >
        <option className={styles.custom_option} value="">
          All types
        </option>
        {filteredTypes.map((type) => (
          <option className={styles.custom_option} key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PokemonTypeFilter;
