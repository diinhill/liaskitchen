import styles from "@/styles/Home.module.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { useEffect, useRef } from "react";
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
