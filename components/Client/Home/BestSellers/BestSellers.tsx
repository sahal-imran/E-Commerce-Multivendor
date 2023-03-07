import React from "react";
import Wrapper from "../../../Shared/ComponentWrapper/Wrapper";
import TopSection from "./TopSection";
import { Data } from "../../../../constants/Data/JSON";
import ProductCard from "../../../Shared/Advertise/ProductCard";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";

const BestSellers: React.FC = () => {
  return (
    <Wrapper style="">
      <div className="w-full flex flex-col">
        <SectionHeader headingText="Best Sellers" href="/" />

        {/* ====> top section */}
        <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 justify-center items-center mt-6">
          {Data.BestSeller.topSection.map((node, index) => {
            return (
              <TopSection key={index} image={node.image} name={node.title} />
            );
          })}
        </div>
        {/* =====> bottom section */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 justify-center items-center gap-2 py-12">
          <div className="col-span-1">
            <ProductCard
              category="headset"
              TitleSecSection="Beat wireless"
              TitleThirdSection="Headphone"
              categoryBg="bg-transparent"
              catgeoryShadow="shadow-none"
              style="w-full md:py-16 bg-[url('/Assets/Home/BestSeller/BottomSection/1.png')]"
            />
          </div>
          {/*  */}
          <div className="col-span-1">
            <ProductCard
              category="headset"
              catgeoryShadow="shadow-none"
              TitleThirdSection="Smart Watch II"
              TitleSecSection="Headphone"
              categoryBg="bg-transparent"
              style="w-full md:py-16 bg-[url('/Assets/Home/BestSeller/BottomSection/2.png')]"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BestSellers;
