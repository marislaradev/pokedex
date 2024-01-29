import React, { useState, useEffect } from "react";
import styles from "./PokemonList.module.css";
import Card from "../../components/Card";

const PokemonList = ({ limit, selectedType }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;

        if (selectedType) {
          url = `https://pokeapi.co/api/v2/type/${selectedType}`;
        } else {
          url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (selectedType) {
          const pokemonDetailsPromises = data.pokemon
            .slice(0, limit)
            .map(async (pokemon) => {
              const response = await fetch(pokemon.pokemon.url);
              const pokemonData = await response.json();

              const imageUrl =
                pokemonData.sprites.other["official-artwork"].front_default ||
                pokemonData.sprites.front_default;

              return {
                id: pokemonData.id,
                name: pokemonData.name,
                image: imageUrl,
              };
            });

          const pokemonDetails = await Promise.all(pokemonDetailsPromises);
          setPokemonList(pokemonDetails);
          setTotalPokemonCount(data.pokemon.length);
        } else {
          const pokemonDetailsPromises = data.results
            .slice(0, limit)
            .map(async (pokemon) => {
              const response = await fetch(pokemon.url);
              const pokemonData = await response.json();

              const imageUrl =
                pokemonData.sprites.other["official-artwork"].front_default ||
                pokemonData.sprites.front_default;

              return {
                id: pokemonData.id,
                name: pokemonData.name,
                image: imageUrl,
              };
            });

          const pokemonDetails = await Promise.all(pokemonDetailsPromises);
          setPokemonList(pokemonDetails);
          setTotalPokemonCount(data.count);
        }
      } catch (error) {
        console.error("Unable to obtain the Pokémon list", error);
      }
    };

    fetchData();
  }, [limit, selectedType]);

  return (
    <div>
      <ul className={styles.pokemon_list}>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Card to={`/detalhes/${pokemon.id}`}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className={`${styles.pokemon_image} ${styles.custom_image}`}
              />
              {pokemon.name}
            </Card>
          </li>
        ))}
      </ul>
      {pokemonList.length === 0 && (
        <p>The Pokémon list is empty or could not be loaded.</p>
      )}
      {pokemonList.length > 0 && totalPokemonCount === pokemonList.length && (
        <p>End of the Pokémon List</p>
      )}
    </div>
  );
};

export default PokemonList;
