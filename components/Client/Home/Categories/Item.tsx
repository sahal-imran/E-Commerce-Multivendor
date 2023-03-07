import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  image: string;
  route: string;
}

const Item: React.FC<Props> = ({ title, image, route }: Props) => {
  return (
    <Link
      href={route}
      className="flex flex-col  my-2 lg:my-0   gap-4 group cursor-pointer"
    >
      {/*top image */}
      <div className="bg-white-main h-24 w-full justify-center flex text-center p-6 rounded  ">
        <div className="relative h-12 w-10  ">
          <Image
            className="group-hover:scale-110 duration-300"
            src={image}
            alt=""
            fill
          />
        </div>
      </div>

      {/* title */}
      <div className="text-center justify-center flex">
        <p className="text-black-soft/60 font-semibold">{title}</p>
      </div>
    </Link>
  );
};

export default Item;
