import styles from "@/styles/Home.module.css";
import Impressum from "@/components/Impressum";

export default function ImpressumPage() {
  return (
    <main className={styles.main}>
      <div className={styles.noiseTexture}>
        <Impressum />
      </div>

      <div className={styles.containerBackToTopButton}>
        <a className={styles.backToTopButton} href="#" />
      </div>
    </main>
  );
}
