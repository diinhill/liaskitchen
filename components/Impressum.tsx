import Link from "next/link";
import data from "../data.json";
import Navbar from "./Navbar";
type ImpressumT = {
  name: string;
  street: string;
  city: string;
  phone: string;
  email: string;
  handelsregister: string;
  registergericht: string;
  vat: string;
  responsible: string;
  info: string;
  [key: string]: string;
};
const impressum: ImpressumT = data.impressum;
export default function Impressum() {
  return (
    <section
      id="impressum"
      className="bg-secondary w-screen md:w-auto lg:w-auto overflow-x-hidden"
    >
      <Navbar />
      <div className="ml-8 mr-8 pt-8 pb-24 font-['Annie_Use_Your_Telescope'] text-black text-xl">
        <Link href="/">
          <p className="text-2xl mb-2">&larr;</p>
        </Link>
        <h1 className="text-4xl mb-2">Impressum</h1>
        <h2 className="text-3xl mb-2 mt-2">Angaben gemäß § 5 TMG</h2>
        <p className="mb-2">
          {impressum.name}
          <br></br>
          {impressum.street}
          <br></br>
          {impressum.city}
        </p>
        <p className="mb-2 mt-2">
          Handelsregister: {impressum.handelsregister}
          <br></br>Registergericht: {impressum.registergericht}
        </p>
        <p className="mb-2 mt-2">
          Vetreten durch:
          <br></br>
          {impressum.responsible}
        </p>
        <h2 className="text-3xl mb-2 mt-4">Kontakt</h2>
        <p className="mb-2">
          Telefon: {impressum.phone}
          <br></br>E-mail: {impressum.email}
        </p>
        <h2 className="text-3xl mb-2 mt-4">Umsatzsteuer-ID</h2>
        <p className="mb-2">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br></br>
          {impressum.vat}
        </p>
        <h2 className="text-3xl mb-2 mt-4">Redaktionell verantwortlich</h2>
        <p className="mb-2">{impressum.responsible}</p>
        <h2 className="text-3xl mb-2 mt-4">EU-Streitschlichtung</h2>
        <p className="mb-2">
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:
          <br></br>https://ec.europa.eu/consumers/odr/.
          <br></br>Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <h2 className="text-3xl mb-2 mt-4">
          Verbraucherstreitbeilegung/ Universalschlichtungsstelle
        </h2>
        <p className="mb-2">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </section>
  );
}
