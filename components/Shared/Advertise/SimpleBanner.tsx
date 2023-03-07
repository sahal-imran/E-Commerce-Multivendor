import React from "react";
import Wrapper from "../ComponentWrapper/Wrapper";
import Link from "next/link";
import * as Icons from "../../../SVG/Icons";

interface Props {
  style?: string;
}

const SimpleBanner: React.FC<Props> = ({ style }: Props) => {
  return (
    <Wrapper>
      <div
        className={`${style} w-full bg-cover py-5 sm:py-10 md:py-16 px-2 md:px-20 flex flex-col gap-2 md:gap-4 justify-center items-start bg-center bg-[url('/Assets/Home/Advertise/simple.jpg')] categoryProductClass `}
      >
        <h1 className="text-[20px] md:text-[30px] font-semibold leading-[40px] font-inter text-white-main">
          Get the best deal for Headphones
        </h1>
        {/* ======> shop now button */}
        <Link
          href="#"
          className=" after:content-[''] relative after:absolute text-red after:-bottom-1 after:h-[0px] after:bg-main-brand after:transition-all transition-all after:duration-100 duration-300 after:ease-linear ease-linear hover:after:h-[70%] after:w-full z-10 after:-z-10 capitalize text-[.975rem] font-semibold bg-transparent font-inter flex justify-center items-center gap-1"
        >
          Shop Now
          <Icons.ArrowRight fill="#EF262C" stroke="none" ClassName="" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default SimpleBanner;
