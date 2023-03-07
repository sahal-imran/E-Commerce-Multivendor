import Link from "next/link";
import React, { ReactNode } from "react";
import * as Icons from "../../../SVG/Icons";

interface Props {
  category: string;
  productTitle?: string;
  rightImage?: string;
  TitleTopSection?: string;
  textTopSize?: string;
  textBottomSize?: string;
  TitleSecSection?: string;
  TitleThirdSection?: string;
  style?: string;
  categoryBg?: string;
  catgeoryShadow?:string,
  categoryColor?: string;
}

const ProductCard: React.FC<Props> = ({
  category,
  rightImage,
  TitleTopSection,
  textTopSize,
  textBottomSize,
  TitleSecSection,
  TitleThirdSection,
  categoryBg,
  categoryColor,
  catgeoryShadow,
  style,
}: Props) => {
  return (
    <div
      className={`${style} w-full h-full py-12 bg-cover bg-no-repeat categoryProductClass`}
    >
      <div className="flex justify-center flex-col items-start gap-6 pl-3 sm:pl-8">
        {/* =====> category */}
        <p
          className={`${categoryColor} px-8 py-1 shadow-md ${catgeoryShadow} text-center rounded-full uppercase font-inter text-[10px] md:text-[.75rem] font-semibold ${categoryBg}`}
        >
          {category}
        </p>
        {/* ======>Product name */}
        <div className="flex flex-col justify-center items-start">
          <h1
            className={`capitalize text-black-off text-[20px] ${textTopSize}  font-medium`}
          >
            {TitleTopSection}
          </h1>
          <h1
            className={`capitalize text-black-off text-[20px] ${textBottomSize} text-[30px] font-bold`}
          >
            {TitleSecSection}
          </h1>
          <h1
            className={`capitalize text-black-off text-[20px] ${textBottomSize} text-[30px] font-bold`}
          >
            {TitleThirdSection}
          </h1>
        </div>

        {/* ======> shop now button */}
        <Link
          href="/products"
          className=" after:content-[''] relative after:absolute after:-bottom-1 after:h-[0px] after:bg-main-brand after:transition-all transition-all after:duration-300 duration-300 after:ease-linear ease-linear hover:after:h-[60%] after:w-full z-10 after:-z-10 capitalize text-[.875rem] bg-transparent text-black-off font-medium font-inter flex justify-center items-center gap-1"
        >
          Shop Now
          <Icons.ArrowRight fill="#222222" stroke="none" ClassName="" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;