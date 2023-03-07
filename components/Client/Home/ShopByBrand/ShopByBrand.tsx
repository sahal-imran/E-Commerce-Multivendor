
import React from "react";
import Wrapper from "../../../Shared/ComponentWrapper/Wrapper";
import TitleHeading from "../../../Shared/Heading/TitleHeading";
import BrandItem from "./brandItem";
import { Data } from "../../../../constants/Data/JSON";
import Mobileapp from "./Mobileapp/Index";
import FlashSale from "./FlashSale";
import SectionHeader

  from "../../../Shared/SectionHeader/SectionHeader";
const ShopByBrand: React.FC = () => {
  return (
    <Wrapper style="py-10">
      <SectionHeader headingText="Shop By Brand" href="/" IsMoreProduct={false} />
      {/* Brands */}
      <div className="bg-white-main my-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
        {Data?.ShopByBrand.Brands.map((item: any, index: number) => {
          return (
            <BrandItem key={index} route={item.Route} image={item.Image} />
          );
        })}
      </div>
      {/* Whole sale and mobile app component here */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[450px] lg:min-h-[430px] gap-6">
        {/* Flash  sale component here */}
        <FlashSale />
        {/* mobile app component here */}
        <Mobileapp />
      </div>
    </Wrapper>
  );
};

export default ShopByBrand;
