import React from "react";
import TitleHeading from "../../../../Shared/Heading/TitleHeading";
import Button from "./button";
const Mobileapp: React.FC = () => {
  return (
    <div className=" w-full h-full flex flex-col gap-4  p-10 bg-[url('/shopByBrand/Mobileapp/Mega.png')] bg-cover  bg-center bg-no-repeat">
      <p className="font-medium text-sm">MOBILE APP VERSION</p>

      <TitleHeading Text="Get Our Mobile App" />

      <TitleHeading Text="It's Make easy for you life!" />

      <div className="flex items-center gap-4 my-4">
        {/* first buton */}

        <Button image="/shopByBrand/Mobileapp/playstoreLogo.svg" />

        {/* second button */}
        <Button image="/shopByBrand/Mobileapp/appleStoreLogo.svg" />
      </div>
    </div>
  );
};

export default Mobileapp;
