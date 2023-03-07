import React from "react";
import * as Icons from '../../../../SVG/Icons'
import Wrapper from "../../../Shared/ComponentWrapper/Wrapper";
import Item from "./Item";


const items = [
  {
    title: "Free Shipping",
    description: 'Free Shipping on Payment',
    icon: <Icons.Shipping fill="#FFBB38" ClassName="h-8 w-8" stroke="none" />,

  },
  {
    title: "Return Policy",
    description: '24 Hours Return Policy',
    icon: <Icons.ReturnPolicy fill="#FFBB38" ClassName="h-8 w-8" stroke="none" />,

  },
  {
    title: "Secured Payment",
    description: 'Secure Card Payments',
    icon: <Icons.Payment fill="#FFBB38" ClassName="h-8 w-8 " stroke="none" />,

  },
  {
    title: "Best Quality",
    description: 'Best Quality Products',
    icon: <Icons.Quality fill="#FFBB38" ClassName="h-8 w-8 " stroke="none" />,

  },
];


const Features: React.FC = () => {
  return <Wrapper style="py-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white-main p-6">
      {
        items.map((item: any, index: number) => {
          return <Item key={index} item={item} />
        })
      }
    </div>
  </Wrapper>;
};

export default Features;
