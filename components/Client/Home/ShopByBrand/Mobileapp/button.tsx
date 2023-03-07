import React from "react";
import Image from "next/image";
interface Props {
  image: string;
}

const Button: React.FC<Props> = ({ image }: Props) => {
  return (
    <div className="bg-white-main px-3 py-2 cursor-pointer ">
      <div className="relative h-10 w-28 md:w-36">
        <Image src={image} fill alt="" />
      </div>
    </div>
  );
};

export default Button;
