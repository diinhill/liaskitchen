import React from "react";
import styles from "@/styles/MenuItem.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

type MenuItem = {
  item: {
    id: number;
    name: string;
    price: number;
    descriptionDeutsch: string;
    descriptionEnglish?: string;
    image: string;
    key?: number;
  };
};

const MenuItem = (item: MenuItem) => {
  const router = useRouter();
  const { locale: activeLocale } = router;
  const description =
    activeLocale === "de"
      ? item.item.descriptionDeutsch
      : item.item.descriptionEnglish;
  return (
    <div className="group relative flex justify-center items-center w-[350px] h-[350px] bg-[#7ECBE9] rounded-xl shadow-[#366477] shadow-md transition duration-300 ease-in-out hover:w-[351] hover:h-[351px]">
      <div className="">
        <div className="flex justify-center -mt-24 mb-4 group-hover:translate-y-[-30px]">
          <Image
            src={item.item.image}
            alt={item.item.name}
            width={300}
            height={300}
            className="group-hover:translate-x-[-10px] group-hover:translate-y-[-20px] group-hover:rotate-[-5deg] group-hover:scale-[1.1]"
          />
        </div>

        {item.item.descriptionDeutsch != "" ? (
          <div className="ml-2 -mt-3">
            <h2 className='text-4xl font-["Annie_Use_Your_Telescope"] text-[#581b34] group-hover:text-[#7ecbe9b5]'>
              {item.item.name}
            </h2>
            <h3 className='text-3xl font-["Annie_Use_Your_Telescope"] text-black group-hover:text-[#7ecbe9b5]'>
              {item.item.price}
            </h3>
          </div>
        ) : (
          <div className="ml-2 -mt-3">
            <h2 className='text-3xl font-["Annie_Use_Your_Telescope"] text-[#581b34] group-hover:text-4xl'>
              {item.item.name}
            </h2>
            <h3 className='text-2xl font-["Annie_Use_Your_Telescope"] text-black group-hover:text-3xl'>
              {item.item.price}
            </h3>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0">
          <div className="opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100 delay-100 bg-[#7ecbe9e7] border-t-6 border-[#7ecbe94c] rounded-t-xl">
            <p className='text-2xl m-2 p-4 text-[#581b34] font-["Architects_Daughter"]'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
