import React, { useState } from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";

import * as Icons from "../../../SVG/Icons";
import ProductDetails from "../Popups/ProductDetails";

const VerticalCard: React.FC = () => {
  const [showProductDetails, setShowProductDetails] = useState<boolean>(false);

  const handleOpenProductDetails: () => void = () => {
    setShowProductDetails(true);
  };

  return (
    <React.Fragment>
      <div className="w-full bg-white-main product-card-vertical  main-wrapper-card overflow-hidden shadow relative p-4">
        <div className="product-card-one w-full flex flex-col items-center justify-start gap-12 relative z-10 px-1 py-6 ">
          {/* Image  */}
          <div className="w-full h-[220px] flex items-center justify-center relative transition-all duration-300 ease-in-out scale-100 hover:scale-110 ">
            <Image
              src="/Assets/Home/popular-category/p-1.png"
              alt=""
              fill
              className="object-contain sm:object-cover"
            />
          </div>
          {/* Product Details  */}
          <div className="w-full flex flex-col items-center justify-center pt-2 pb-4 px-[6px] gap-2 ">
            {/* --> Product Rating  */}
            <div className="w-full flex items-center justify-start">
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                size="medium"
                readOnly
              />
            </div>
            {/* --> Product Title  */}
            <h2 className="text-base leading-[24px] font-semibold text-black-off text-left w-full">
              JBL Clip 4 Orange Portable Speaker
            </h2>
            {/* --> Price  */}
            <h3 className="w-full text-left text-xl leading-[26px] text-lavaRed font-bold">
              $133.00
            </h3>
            {/* Elements that would show on hover  */}
            <div className="w-full relative flex items-center justify-center">
              <div className="w-full absolute -bottom-40 animated-button  transition-all duration-500 ease-in-out">
                <button className="relative w-full py-[10px] bg-lightningYellow border-0 flex items-center justify-center gap-3 cursor-pointer hover:text-white-main   transition-all duration-700 ease-in-out z-10">
                  <Icons.AddToCart
                    ClassName="w-[16px] h-[18px] cursor-pointer transition-all duration-300 ease-in-out "
                    fill="#222222"
                  />
                  <p className="text-[13px] font-semibold capitalize text-black-main transition-all duration-300 ease-in-out ">
                    Add To Cart
                  </p>
                </button>
              </div>
            </div>
            {/* Icons => Expand, add to wishlish, refresh  */}
            <div className="flex flex-col items-center justify-start gap-2 absolute bottom-[50%] right-4">
              {/* --> Exapand  */}
              <div
                onClick={handleOpenProductDetails}
                className="-mr-36 p-[10px] animated-icon flex items-center justify-center transition-all  ease-in-out bg-white-off hover:bg-lightningYellow rounded"
              >
                <Icons.Expand
                  ClassName="w-[20px] h-[20px] cursor-pointer"
                  fill="#222222"
                />
              </div>

              {/* --> Add to wishlist  */}
              <div className="-mr-36 p-[10px] animated-icon flex items-center justify-center transition-all duration-300 ease-in-out bg-white-off hover:bg-lightningYellow rounded">
                <Icons.WishList
                  ClassName="w-[19px] h-[19px] cursor-pointer "
                  fill="#222222"
                />
              </div>

              {/* --> Refresh */}
              <div className="-mr-36 p-[10px] animated-icon flex items-center justify-center transition-all duration-500 ease-in-out bg-white-off hover:bg-lightningYellow rounded">
                <Icons.Refresh
                  ClassName="w-[19px] h-[19px] cursor-pointer "
                  fill="#222222"
                />
              </div>
            </div>
          </div>
        </div>
        <span className="anim bottom"></span>
        <span className="anim top"></span>
        <span className="anim right"></span>
        <span className="anim left"></span>
      </div>

      {showProductDetails && (
        <ProductDetails
          showProductDetails={showProductDetails}
          setShowProductDetails={setShowProductDetails}
        />
      )}
    </React.Fragment>
  );
};

export default VerticalCard;
