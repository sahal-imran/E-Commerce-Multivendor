import React from "react";
import Wrapper from "../ComponentWrapper/Wrapper";
import * as Icons from "../../../SVG/Icons";

function BannerWithCategory() {
  return (
    <Wrapper style="">
      <div className="w-full bg-cover py-5 sm:py-10 md:py-16 flex flex-col gap-4 justify-center items-center bg-center bg-[url('/Assets/Home/Advertise/Category.jpg')] bannerClass">
        {/* ======> Category */}
        <p className="uppercase font-semibold text-[.75rem] font-inter text-black-main">
          Headphone
        </p>
        <h1 className="text-[30px] w-full max-w-[300px] text-center leading-[40px] font-semibold font-inter">
          Get the best deal for Headphones
        </h1>
        {/* Add to cart button  */}
        <button className="bannerAnimatesButton relative w-[130px] text-main-brand lg:w-[150px] py-[10px] bg-white-main border-0 flex items-center justify-center gap-3 cursor-pointer hover:text-white-main transition-all duration-100 ease-in-out z-10">
          <p className="text-[.875rem] font-semibold capitalize text-main-brand transition-all duration-300 ease-in-out ">
            Shop Now
          </p>
          <Icons.ArrowRight fill="#FFBB38" stroke="none" ClassName="" />
        </button>
      </div>
    </Wrapper>
  );
}

export default BannerWithCategory;
