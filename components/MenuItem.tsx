'use client';

import React, { useState } from "react";
import Image from "next/image";
import MenuItemDescription from "./MenuItemDescription";
import { LocalesI } from "@/types/locale";
import { useLocale } from "./LocaleProvider";

type MenuItem = {
  id: number;
  name: { de: string; en: string };
  price: number;
  description?: { de: string; en: string };
  image: string;
  key?: number;
};

const MenuItem = ({ item }: { item: MenuItem }) => {
  const { locale } = useLocale();
  const lang = locale as keyof LocalesI;

  const { description, name, image, price } = item;

  return (
    <div className="group relative flex justify-center items-center w-[350px] h-[350px] bg-[#7ECBE9] rounded-xl shadow-[#366477] shadow-md transition duration-300 ease-in-out hover:w-[351] hover:h-[351px]">
      <div>
        <div className="flex justify-center -mt-44 group-hover:translate-y-[-30px]">
          <Image
            src={image}
            alt={`${name[lang]} - Vegan ${description ? 'burger' : 'side'} at Lia's Kitchen Berlin`}
            width={300}
            height={300}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            className="group-hover:translate-x-[-10px] group-hover:translate-y-[-20px] group-hover:rotate-[-5deg] group-hover:scale-[1.1]"
          />
        </div>

        <div className='absolute inset-x-4 bottom-5 font-["Annie_Use_Your_Telescope"]'>
          {description ? (
            <div>
              <h2 className="text-4xl text-[#581b34] group-hover:text-[#7ecbe9b5]">
                {name[lang]}
              </h2>
              <h3 className="text-3xl text-black group-hover:text-[#7ecbe9b5]">
                {price}
              </h3>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl text-[#581b34] group-hover:text-4xl">
                {name[lang]}
              </h2>
              <h3 className="text-2xl text-black group-hover:text-3xl">
                {price}
              </h3>
            </div>
          )}
        </div>

        {description && <MenuItemDescription description={description[lang]} />}
      </div>
    </div>
  );
};
export default MenuItem;
