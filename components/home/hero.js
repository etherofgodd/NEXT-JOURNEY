import styles from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/Maybe.jpg"
          alt="An Image showing the boss"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <h1>Hi, I'm Samuel</h1>
      <p>
        I write about development - especially about app dev like react and
        react native
      </p>
    </section>
  );
};

export default Hero;
