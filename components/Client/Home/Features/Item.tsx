import React, { ReactNode } from "react";

interface Props {
  item: {
    title: string,
    icon: ReactNode,
    description: string,
  },
}

const Item: React.FC<Props> = ({ item }: Props) => {
  return (
    <div className="w-full flex md:justify-center justify-start items-center gap-4">
      {/* svg icon here */}
      <div className=" items-center flex justify-center cursor-pointer ">{item.icon}</div>

      {/* TITLE AND DESCRITION */}

      <div className="flex flex-col  gap-1 ">
        <p className="font-bold">{item.title}</p>
        <p className="text-black-soft/60 font-medium">{item.description}</p>
      </div>
    </div>
  );
};

export default Item;
