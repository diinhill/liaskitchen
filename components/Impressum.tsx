import Link from "next/link";
import data from "../data.json";
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
    <section id="impressum" className="bg-secondary">
      <div className="relative pl-8 pr-8 pt-8 pb-24 bg-secondary">
        <Link href='/'>
          <p className='text-2xl font-["Annie_Use_Your_Telescope"] text-black mb-2'>&larr;</p>
        </Link>
        <h1 className='text-4xl font-["Annie_Use_Your_Telescope"] text-black mb-2'>Impressum</h1>
        <h2 className='text-3xl font-["Annie_Use_Your_Telescope"] text-black mb-2 mt-2'>Angaben gemäß § 5 TMG</h2>
        <p className='text-xl font-["Annie_Use_Your_Telescope"] text-black mb-2'>{impressum.name}
          <br></br>{impressum.street}
          <br></br>{impressum.city}
        </p>
        <p className='text-xl font-["Annie_Use_Your_Telescope"] text-black mb-2 mt-2'>Handelsregister: {impressum.handelsregister}
          <br></br>Registergericht: {impressum.registergericht}
        </p>
        <p className='text-xl font-["Annie_Use_Your_Telescope"] text-black mb-2 mt-2'>Vetreten durch:
          <br></br>{impressum.responsible}
        </p>
        <h2 className='text-3xl font-["Annie_Use_Your_Telescope"] text-black mb-2 mt-4'>Kontakt</h2>
        <p className='text-xl font-["Annie_Use_Your_Telescope"] text-black mb-2'>Telefon: {impressum.phone}
          <br></br>E-mail: {impressum.email}
        </p>
        <h2 className='text-3xl font-["Annie_Use_Your_Telescope"] text-black mb-2 mt-4'>Umsatzsteuer-ID</h2>
        <p className='text-xl font-["Annie_Use_Your_Telescope"] text-black mb-2'>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
          <br></br>{impressum.vat}
        </p>
        <h2 className='text-3xl font-["Annie_Use_Your_Telescope"] text-black mb-2 mt-4'>Redaktionell verantwortlich</h2>
        <p className='text-xl font-["Annie_Use_Your_Telescope"] text-black mb-2'>{impressum.responsible}</p>
        <h2 className='text-3xl font-["Annie_Use_Your_Telescope"] text-black mb-2 mt-4'>EU-Streitschlichtung</h2>
        <p className='text-xl font-["Annie_Use_Your_Telescope"] text-black mb-2'>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <br></br>https://ec.europa.eu/consumers/odr/.
          <br></br>Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <h2 className='text-3xl font-["Annie_Use_Your_Telescope"] text-black mb-2 mt-4'>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
        <p className='text-xl font-["Annie_Use_Your_Telescope"] text-black mb-2'>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        {/* {Object.keys(impressum).map((key: keyof ImpressumT) => (
          <div key={key} className="">
            <p className='text-2xl font-["Annie_Use_Your_Telescope"] text-black mb-2'>
              {key}: {impressum[key]}
            </p>
          </div>
        ))} */}
      </div>
    </section>
  );
}
