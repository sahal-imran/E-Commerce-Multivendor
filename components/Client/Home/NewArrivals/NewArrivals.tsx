import React from "react";
import Wrapper from "../../../Shared/ComponentWrapper/Wrapper";
import VerticalCard from "../../../Shared/ProductCard/VerticalCard";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";

const NewArrivals: React.FC = () => {
  return (
    <Wrapper style="py-10">
      <div className="w-full flex flex-col items-center justify-start gap-5">
        {/* => Heading + View More Arrow Button  */}
        <SectionHeader headingText="New Arrivals" href="/" />
        {/* Product Items  */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-7">
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
          <VerticalCard />
        </div>
      </div>
    </Wrapper>
  );
};

export default NewArrivals;
