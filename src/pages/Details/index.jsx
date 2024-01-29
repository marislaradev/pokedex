import PokemonDetails from "../../components/PokemonDetails";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css";
function Details() {
  const { id } = useParams();

  return (
    <section className={styles.details}>
      <div>
        <PokemonDetails id={id} />
      </div>
    </section>
  );
}

export default Details;
