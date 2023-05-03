import React from "react";

type Props = {
  description: string;
};

const MenuItemDescription = (props: Props) => {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <div className="opacity-0 transition-opacity ease-in-out duration-300 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 delay-100 bg-[#7ecbe9e7] border-t-6 border-[#7ecbe94c] rounded-t-xl">
        <p className='text-2xl m-2 p-4 text-[#581b34] font-["Architects_Daughter"]'>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default MenuItemDescription;
