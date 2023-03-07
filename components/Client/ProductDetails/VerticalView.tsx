import React from "react";
import VerticalCard from "../../Shared/ProductCard/VerticalCard";
import SimpleBanner from "../../Shared/Advertise/SimpleBanner";

function InVerticalFormProduct() {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center py-8">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product, index) => {
        if (index === 6) {
          return (
            <div className="col-span-1 md:col-span-2 xl:col-span-3">
              <SimpleBanner />
            </div>
          );
        }
        return <VerticalCard key={index} />;
      })}
    </div>
  );
}

export default InVerticalFormProduct;
