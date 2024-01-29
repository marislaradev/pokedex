import React, { useEffect, useState } from "react";
import styles from "./PokemonDetails.module.css";
import Card from "../../components/Card";
import Page404 from "../../pages/Page404";

const PokemonDetails = ({ id }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [moveDetails, setMoveDetails] = useState([]);
  const [abilityDetails, setAbilityDetails] = useState([]);
  const [error, setError] = useState(null);

  const getAbilityDescription = async (url, language = "en") => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const effectEntry = data.effect_entries.find(
        (entry) => entry.language.name === language
      );

      return effectEntry?.effect || null;
    } catch (error) {
      console.error("Unable to obtain Ability description", error);
      return null;
    }
  };

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

      if (response.status === 404) {
        throw new Error("Pokémon not found.");
      }

      const data = await response.json();

      const imageUrl =
        data.sprites.other["official-artwork"].front_default ||
        data.sprites.front_default;

      setPokemonDetails({
        ...data,
        sprites: { front_default: imageUrl },
      });

      const movesData = await fetchMoveDetails(data.moves);
      setMoveDetails(movesData);

      const abilitiesData = await fetchAbilityDetails(data.abilities);
      setAbilityDetails(abilitiesData);
    } catch (error) {
      setError(error.message || "Unable to obtain Pokémon details.");
    }
  };

  const fetchMoveDetails = async (moves) => {
    const moveDetailsPromises = moves.slice(0, 5).map(async (move) => {
      try {
        const moveResponse = await fetch(move.move.url);
        const moveData = await moveResponse.json();
        return {
          move: moveData,
        };
      } catch (error) {
        console.error(`Unable to obtain this move ${move.move.name}`, error);
        return null;
      }
    });

    return Promise.all(moveDetailsPromises.filter((move) => move !== null));
  };

  const fetchAbilityDetails = async (abilities) => {
    const abilityDetailsPromises = abilities.map(async (ability) => {
      try {
        const abilityResponse = await fetch(ability.ability.url);
        const abilityData = await abilityResponse.json();
        return {
          ability: abilityData,
          description: await getAbilityDescription(ability.ability.url, "en"),
        };
      } catch (error) {
        console.error(
          `Unable to obtain this ability ${ability.ability.name}`,
          error
        );
        return null;
      }
    });

    return Promise.all(
      abilityDetailsPromises.filter((ability) => ability !== null)
    );
  };

  useEffect(() => {
    fetchPokemonData();
  }, [id]);

  if (error === "Pokémon not found.") {
    return <Page404 />;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
      </div>
    );
  }

  if (!pokemonDetails) {
    return (
      <div className={styles.loading}>
        <p>Loading Pokémon details...</p>
      </div>
    );
  }

  return (
    <Card to={`/detalhes/${id}`}>
      <img
        src={pokemonDetails.sprites?.front_default}
        alt={pokemonDetails.name}
        className={styles.custom_image}
      />
      <h1 className={styles.pokemon_name}>{pokemonDetails.name}</h1>
      <p>
        <strong>Type:</strong>{" "}
        {pokemonDetails.types?.map((type) => type.type.name).join(", ")}
      </p>
      <div className={styles.moves_list}>
        <h4>Moves</h4>
        <ul className={styles.pokemon_moves}>
          {moveDetails.map((move, index) => (
            <li key={index}>
              {move.move?.name || "There's no information about this move"}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.abilities_list}>
        <h4>Abilities</h4>
        <ul className={styles.pokemon_abilities}>
          {abilityDetails.map((ability, index) => (
            <li key={index}>
              <strong>{ability.ability?.name}</strong> -{" "}
              {ability.description ||
                "There's no description about this ability"}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default PokemonDetails;
