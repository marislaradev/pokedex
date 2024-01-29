import styles from "./Page404.module.css";
import image1 from "./images/pikachu.png";

function Page404() {
  return (
    <section className={`${styles.page404} `}>
      <h2 className={styles.title2}>Page not found</h2>
      <div className={styles.texts}>
        <span className={styles.big_numbers}>404</span>
        <img
          className={styles.image_pikachu}
          src={image1}
          alt="Pikachu faint"
        ></img>
      </div>
    </section>
  );
}

export default Page404;
