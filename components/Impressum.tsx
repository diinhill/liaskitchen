import data from "../data.json";
type ImpressumT = {
  name: string;
  address: string;
  contact: string;
  number: string;
  vat: string;
  info: string;
  [key: string]: string;
};
const impressum: ImpressumT = data.impressum;
export default function Impressum() {
  return (
    <section id="menu" className="bg-[#fdfbc8]">
      <div className="relative pl-8 pr-8 pt-8 pb-24 bg-[#fdfbc8]">
        {Object.keys(impressum).map((key: keyof ImpressumT) => (
          <div key={key} className="">
            <p className='text-2xl font-["Annie_Use_Your_Telescope"] text-black mb-2'>
              {key}: {impressum[key]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
