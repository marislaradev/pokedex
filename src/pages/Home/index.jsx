import React, { useState, useEffect } from "react";
import PokemonList from "../../components/PokemonList";
import PokemonTypeFilter from "../../components/PokemonTypeFilter";
import styles from "./Home.module.css";
import pokedexTitle from "./images/pokedex-title.png";

const Home = () => {
  const [selectedType, setSelectedType] = useState("");
  const [types, setTypes] = useState([]);
  const [numberOfPokemons, setNumberOfPokemons] = useState(10);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/type");
        const data = await response.json();

        if (data && data.results) {
          const typeNames = data.results.map((type) => type.name);
          setTypes(typeNames);
        } else {
          console.error(
            "The API response does not contain the 'results' property or is empty.",
            data
          );
        }
      } catch (error) {
        console.error(
          "Unable to obtain the Pokémon list types",
          error
        );
      }
    };

    fetchTypes();
  }, []);

  const handleTypeChange = (newType) => {
    setSelectedType(newType);
    setNumberOfPokemons(10);
  };

  const loadMoreButton = () => {
    setNumberOfPokemons((prevNumber) => prevNumber + 10);
  };

  return (
    <section className={styles.home}>
      <div className={styles.pokemon_list}>
        <img
          className={styles.pokedex_title}
          src={pokedexTitle}
          alt="Pokédex logo"
        />
        <PokemonTypeFilter types={types} onSelectType={handleTypeChange} />
        <PokemonList limit={numberOfPokemons} selectedType={selectedType} />
        <button
          onClick={loadMoreButton}
          className={`${styles.btn} ${styles.btn_color}`}
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default Home;
