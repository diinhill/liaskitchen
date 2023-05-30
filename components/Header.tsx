import styles from "@/styles/Header.module.css";
import Image from "next/image";
import fruitbasket from "../public/fruitbasket-logo-header.svg";

export default function Header() {
  return (
    <section className="bg-[#fffff6] w-screen md:w-auto lg:w-auto">
      <div className="h-[760px] sm:h-[730px] md:h-[770px] lg:h-[800px]">
        <div id="fluid" className={styles.wavyBackground}>
          <div className="h-[60%] mt-14 flex justify-center ">
            <Image
              priority
              src={fruitbasket}
              alt="Fruitbasket Logo"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
