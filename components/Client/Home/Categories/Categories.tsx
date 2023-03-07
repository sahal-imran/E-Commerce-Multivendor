import React from "react";
import Wrapper from "../../../Shared/ComponentWrapper/Wrapper";
import Item from "./Item";
import { Data } from "../../../../constants/Data/JSON";
const Categories: React.FC = () => {
  return (
    <Wrapper style="bg-[#F8F8F8] py-6">
      <div className="grid w-full md:grid-cols-4 lg:grid-cols-8 grid-cols-2 gap-6 ">
        {Data?.Features.Items.map((item: any, index: number) => {
          return (
            <Item key={index} title={item.Title} route={item.Route} image={item.Image} />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Categories;
