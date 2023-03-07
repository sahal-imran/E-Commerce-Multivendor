import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  route: string
}
const brandItem: React.FC<Props> = ({ image, route }: Props) => {
  return (
    <Link href={route}>
      <div className="flex items-center justify-center p-10 border-r border-b border-b-gray border-r-gray ">
        <div className="relative h-8 w-28">
          <Image src={image} fill alt="" />
        </div>
      </div>
    </Link>
  );
};

export default brandItem;
