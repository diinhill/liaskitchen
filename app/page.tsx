'use client';

import styles from "@/styles/Home.module.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import DeliverReserve from "@/components/DeliverReserve";
import ReservationWidget from "@/components/ReservationWidget";

export default function Home() {
  const menuRef = useRef<null | HTMLDivElement>(null);
  const executeScroll = () =>
    menuRef?.current &&
    menuRef.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });

  useEffect(() => {
    executeScroll();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.noiseTexture}>
        <Navbar />
        <Header />
        <div className="mt-52 absolute" ref={menuRef} />
        <Menu />
        <DeliverReserve />
        <Footer />
      </div>

      <div className={styles.containerBackToTopButton}>
        <a className={styles.backToTopButton} href="#" />
      </div>

      <CookieConsent />
      <JsonLd />
    </main>
  );
}
