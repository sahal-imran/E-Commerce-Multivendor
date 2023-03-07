import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  route: string;
  currentPrice: string;
  offerPrice: string;
}
const Item: React.FC<Props> = ({
  image,
  route,
  currentPrice,
  offerPrice,
  name,
}: Props) => {
  return (
    <div className="flex items-center gap-4 p-4  bg-white-main border-b border-b-gray group">
      {/* Image of product here */}

      <div className="flex items-center justify-center">
        <div className="relative h-20 w-20">
          <Image
            className="group-hover:scale-105 duration-300"
            src={image}
            fill
            alt=""
          />
        </div>
      </div>

      {/* right div here with product details */}

      <div className=" flex flex-col ">
        <Link href={route}>
          <p className="font-semibold">{name}</p>
        </Link>
        <div className="flex gap-2">
          <p className="font-bold text-black-main/50 text-lg line-through">
            {currentPrice}
          </p>
          <p className="font-bold text-red-600 text-lg">{offerPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
