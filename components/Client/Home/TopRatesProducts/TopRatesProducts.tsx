import React from "react";
import Wrapper from "../../../Shared/ComponentWrapper/Wrapper";
import HorizontalCard from "../../../Shared/ProductCard/HorizontalCard";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";

const TopRatesProducts: React.FC = () => {
  return (
    <Wrapper style="py-16">
      <div className="w-full flex flex-col items-center justify-start gap-5">
        {/* => Heading + View More Arrow Button  */}
        <SectionHeader headingText="Top Rarted Products" href="/" />
        {/* Product Items  */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-7">
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
        </div>
      </div>
    </Wrapper>
  );
};

export default TopRatesProducts;
