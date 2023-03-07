import React from "react";
import Timer from "./counterItem";
import Link from "next/link";
import * as Icons from "../../../../../SVG/Icons";
const FlashSale: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col  p-4 bg-[url('/shopByBrand/flash_sale.png')] bg-cover  bg-center bg-no-repeat categoryProductClass">
      {/* Timer here */}
      <div className="grid grid-cols-4 gap-2">
        <Timer title="Days" number="92" color="text-[#EB5757]" />
        <Timer title="Hours" number="12" color="text-[#2F80ED]" />
        <Timer title="Minutes" number="22" color="text-[#8EC9A7]" />
        <Timer title="Seconds" number="32" color="text-[#EB5757]" />
      </div>
      <div className="my-10 p-2">
        <p className="text-5xl font-semibold ">WOO! Flash Sale</p>
      </div>

      <div className="w-20 ml-2 my-4">
        <Link
          href=""
          className=" after:content-[''] relative after:absolute after:-bottom-1 after:h-[0px] after:bg-main-brand after:transition-all transition-all after:duration-300 duration-300 after:ease-linear ease-linear hover:after:h-[60%] after:w-full z-10 after:-z-10 capitalize text-[.875rem] bg-transparent text-black-off font-medium font-inter flex justify-center items-center gap-1"
        >
          Shop Now
          <Icons.ArrowRight fill="#222222" stroke="none" ClassName="" />
        </Link>
      </div>
    </div>
  );
};

export default FlashSale;
