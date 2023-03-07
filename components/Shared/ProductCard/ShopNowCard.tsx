import React from "react";
import * as Icons from "../../../SVG/Icons";

const ShopNowCard: React.FC = () => {
  return (
    <div className="hidden lg:inline-block w-full bg-[url('/Assets/Home/popular-category/p-bg-1.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden shadow">
      <div className="w-full flex flex-col items-start justify-start gap-3 relative z-10 px-4 py-4">
        <h1 className="text-black-off text-base font-bold w-full text-left">
          Product Category
        </h1>
        <ul className="w-full list-none flex flex-col items-start justify-start gap-1">
          <li className="text-sm text-black-off hover:text-black hover:underline cursor-pointer underline-offset-3 transition-all duration-300 ease-in-out">
            Mobile
          </li>
          <li className="text-sm text-black-off hover:text-black hover:underline cursor-pointer underline-offset-3 transition-all duration-300 ease-in-out">
            Electronics
          </li>
          <li className="text-sm text-black-off hover:text-black hover:underline cursor-pointer underline-offset-3 transition-all duration-300 ease-in-out">
            Game
          </li>
        </ul>
        <button className="bg-transparent border-none flex items-center justify-start gap-[6px] cursor-pointer">
          <h2 className="text-base text-black-off font-bold">Shop Now</h2>
          <Icons.ArrowRight ClassName="w-[10px] h-[10px] mt-1" fill="#222222" />
        </button>
      </div>
    </div>
  );
};

export default ShopNowCard;
