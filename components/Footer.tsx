import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import chicken from "../public/footer-chicken.svg";
import Contact from "./Contact";
import SocialMediaIcons from "./SocialMediaIcons";
import soundcloud from "../public/soundcloud.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className={styles.wavyBackground}>
      <div className="flex flex-col items-center justify-end">
        <div className="flex justify-center items-center">
          <div className="mt-20">
            <SocialMediaIcons />
            <Contact />
            <Link
              className="flex justify-center mt-4"
              rel="noopener noreferrer"
              href={
                "https://open.spotify.com/playlist/61thhSN7YfEEhSV0EuMW8t?si=mItz8GK3TG-C6QPBTMIfkA"
              }
              target="_blank"
            >
              <Image
                className="w-[40%]"
                priority
                src={soundcloud}
                alt="Soundcloud"
              />
            </Link>
            <Link href="/impressum" className="flex justify-center gap-3 -mt-4">
              <p className="w-[50%] mb-8 text-[#55ba48] text-center font-['Annie_Use_Your_Telescope'] text-2xl bg-black border-black border-t-2 rounded">
                Impressum
              </p>
            </Link>
          </div>
        </div>
        <div className="sm:w-[75%] md:w-[65%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%]">
          <Image
            priority
            src={chicken}
            alt="Footer Chicken"
            height={3000}
            width={3000}
          />
        </div>
      </div>
    </footer>
  );
}
