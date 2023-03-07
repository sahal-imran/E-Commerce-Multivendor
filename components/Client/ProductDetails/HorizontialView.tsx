import React from "react";
import HorizontalCard from "../../Shared/ProductCard/HorizontalCard";
import BannerWithCategory from "../../Shared/Advertise/BannerWithCategory";

function HorizentialFormProduct() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center py-8">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, index) => {
        if (index === 6) {
          return (
            <div className="col-span-1 md:col-span-2">
              <BannerWithCategory />
            </div>
          );
        }
        return <HorizontalCard key={index} />;
      })}
    </div>
  );
}

export default HorizentialFormProduct;
