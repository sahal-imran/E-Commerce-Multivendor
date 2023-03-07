import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  name: string;
}

const TopSection: React.FC<Props> = ({ image, name }: Props) => {
  return (
    <Link href="#" className="flex flex-col gap-6 justify-center items-center">
      {/* ======> image div */}
      <div className="w-[170px] h-[170px] flex justify-center items-center rounded-full shadow-md bg-white-main">
        <Image
          src={image}
          width={100}
          height={100}
          className="cover"
          alt="seller-top-image"
        ></Image>
      </div>
      {/* ======> text */}
      <p className="capitalize text-black-off font-semibold text-base">
        {name}
      </p>
    </Link>
  );
};

export default TopSection;
