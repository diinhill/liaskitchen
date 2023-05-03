import Image from "next/image";
import Link from "next/link";
import cow from "../public/cow.svg";
import tripadvisor from "../public/tripadvisor.svg";

export default function SocialMediaIcons() {
  return (
    <>
      <div className="flex justify-center gap-2 mt-2">
        <Link
          className="w-[17%]"
          rel="noopener noreferrer"
          href={
            "https://www.tripadvisor.de/Restaurant_Review-g187323-d11843585-Reviews-Lia_s_Kitchen_100_Vegan-Berlin.html"
          }
          target="_blank"
        >
          <Image priority src={tripadvisor} alt="Tripadvisor" />
        </Link>
        <Link
          className="w-[17%]"
          rel="noopener noreferrer"
          href={"https://www.happycow.net/reviews/lias-kitchen-berlin-82729"}
          target="_blank"
        >
          <Image priority src={cow} alt="Happy Cow" />
        </Link>
      </div>
    </>
  );
}
