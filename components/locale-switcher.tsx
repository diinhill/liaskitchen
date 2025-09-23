'use client';

import { useLocale } from "./LocaleProvider";

export default function LocaleSwitcher() {
  const { locale, setLocale } = useLocale();
  
  const toggleLocale = () => {
    setLocale(locale === "de" ? "en" : "de");
  };

  return (
    <button onClick={toggleLocale} className="cursor-pointer">
      <li>{locale === "de" ? "EN" : "DE"}</li>
    </button>
  );
}
