import React from "react";
import Wrapper from "../../../Shared/ComponentWrapper/Wrapper";
import { Data } from "../../../../constants/Data/JSON";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import Card from "./Card";


const BestProducts: React.FC = () => {
  return (
    <Wrapper style="py-10">
      <SectionHeader headingText="Best Product" href="/" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0  md:gap-x-6 md:gap-y-0 mt-6">
        {Data?.BestProduts.Products.map((item: any, index: number) => {
          return (
            <Card
              key={index}
              name={item.Name}
              currentPrice={item.CurrentPrice}
              offerPrice={item.OfferPrice}
              route={item.Route}
              image={item.Image}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default BestProducts;
