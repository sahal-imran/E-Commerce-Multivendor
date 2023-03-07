import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Rating from "@mui/material/Rating";
import ImageGallery from "react-image-gallery";

import * as Icons from "../../../SVG/Icons";

interface Props {
  showProductDetails: boolean;
  setShowProductDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductDetails: React.FC<Props> = ({
  showProductDetails,
  setShowProductDetails,
}: Props) => {
  // Modal Close Handler
  const handleCloseProductDetails: () => void = () => {
    setShowProductDetails(false);
  };
  //Product Description Line Clamp
  const [descriptionClamp, setDescriptionClamp] = useState<boolean>(true);

  //Product Quantity
  const [productCount, setProductCount] = useState<number>(1);

  //   Descrease product count handler
  const handleDescreaseProductCount: () => void = () => {
    productCount > 0 ? setProductCount((o) => o - 1) : setProductCount(0);
  };

  //   Increase product count handler
  const handleIncreaseProductCount: () => void = () => {
    setProductCount((o) => o + 1);
  };

  //Product Description
  const productDescription: string =
    "Feast your eyes on vibrant details with the FHD+ Super AMOLED display, reaching 800 nits¹ for clarity even in bright daylight. Eye Comfort Shield² lowers blue light, and Real Smooth keeps the view smooth, whether you're gaming or scrolling. All on the expansive 6.5-inch Infinity-O Display. Galaxy A52 seen from the front. A scene of a man standing on a beach at sunset with pink and blue colors in the sky expands outside of the boundaries of the display. Text says Brightness 800 nits, Eye Comfort Shield, with the SGS logo and Real Smooth.";

  //Image Gallery data
  const images = [
    {
      original: "/Assets/Home/popular-category/p-1.png",
      thumbnail: "/Assets/Home/popular-category/p-1.png",
    },
    {
      original: "/Assets/Home/popular-category/p-1.png",
      thumbnail: "/Assets/Home/popular-category/p-1.png",
    },
    {
      original: "/Assets/Home/popular-category/p-1.png",
      thumbnail: "/Assets/Home/popular-category/p-1.png",
    },
    {
      original: "/Assets/Home/popular-category/p-1.png",
      thumbnail: "/Assets/Home/popular-category/p-1.png",
    },
    {
      original: "/Assets/Home/popular-category/p-1.png",
      thumbnail: "/Assets/Home/popular-category/p-1.png",
    },
    {
      original: "/Assets/Home/popular-category/p-1.png",
      thumbnail: "/Assets/Home/popular-category/p-1.png",
    },
    {
      original: "/Assets/Home/popular-category/p-1.png",
      thumbnail: "/Assets/Home/popular-category/p-1.png",
    },
  ];

  return (
    <Modal
      open={showProductDetails}
      onClose={handleCloseProductDetails}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <div className="w-full h-full flex items-center justify-center flex-col bg-white-main px-2 xs:px-3 sm:px-5 lg:px-10 pt-16 xs:pt-16 pb-8 lg:py-10 relative">
        <div className="w-full h-full  flex items-start justify-center overflow-y-scroll scrollbar-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coloumn 1 => Product Image gallery */}
            <div className="w-full flex flex-col items-start justify-start relative">
              <ImageGallery
                items={images}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
              />
              {/* Label => Off on the product  */}
              <div className="w-[60px] sm:w-[85px] h-[60px] sm:h-[85px] bg-lightningYellow flex items-center justify-center rounded-full text-black text-base sm:text-xl font-medium absolute top-[3%] left-[2%]">
                -10%
              </div>
            </div>
            {/* Coloumn 2 => Product Details  */}
            <div className="w-full flex flex-col items-start justify-start gap-6">
              {/* Company Name + Product Title + Product Rating  */}
              <div className="w-full flex flex-col items-start justify-start gap-2">
                {/* Company Name  */}
                <p className="text-black-cool text-xs uppercase text-left">
                  Lenovo
                </p>
                {/* Product Title  */}
                <h2 className="text-xl leading-[26px] font-semibold text-black-off text-left w-full">
                  JBL Clip 4 Orange Portable Speaker
                </h2>
                {/* Product Rating  */}
                <div className="w-full flex items-center justify-start gap-3">
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                  <p className="text-[13px]">4 Reviews</p>
                </div>
                {/* Price  */}
                <h3 className="w-full text-left text-2xl leading-[30px] text-lavaRed font-bold">
                  $133.00
                </h3>
              </div>
              {/* Product Description  */}
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <p
                  className={`${
                    descriptionClamp && "line-clamp-2"
                  } text-base text-black-cool text-left`}
                >
                  {productDescription}
                </p>
                <button
                  onClick={() => setDescriptionClamp(!descriptionClamp)}
                  className="bg-transparent text-sm font-bold border-none text-blue"
                >
                  See {descriptionClamp ? "More" : "Less"}
                </button>
              </div>
              {/*Products Avaialability Badge */}
              <div className="w-[330px] py-3 text-lg font-bold text-lightningYellow bg-lightningYellow bg-opacity-20 px-2 flex items-center justify-center capitalize">
                <span className="text-black-main">Availability : </span>{" "}
                &nbsp;20 Products Available
              </div>
              {/* Product Count Increment / Decrement  + Wishlist + Add to cart button  */}
              <div className="w-full flex items-center justify-start gap-2 xs:gap-3">
                {/* Incerment / Decrement Button + Wishlist + Add to Cart  */}
                <div className="h-[46px] border-[1px] border-solid border-qgray-border px-4 text-black-cool text-xl flex items-center justify-center gap-5">
                  <button
                    onClick={handleDescreaseProductCount}
                    className="bg-transparent border-none text-2xl font-medium cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold text-black-main">
                    {productCount < 0 ? 0 : productCount}
                  </span>
                  <button
                    onClick={handleIncreaseProductCount}
                    className="bg-transparent border-none font-medium cursor-pointer"
                  >
                    +
                  </button>
                </div>
                {/* Add to widhlist icon button  */}
                <button className="h-[46px] border-[1px] border-solid border-qgray-border px-4 text-black-cool text-xl flex items-center justify-center">
                  <Icons.WishList
                    ClassName="cursor-pointer w-[24px] h-[24px]"
                    fill="#000000"
                  />
                </button>
                {/* Add to cart button  */}
                <button className="flex-1 text-base text-white-main font-semibold text-center bg-black-main h-[46px] cursor-pointer capitalize">
                  Add to cart
                </button>
              </div>
              {/* Product Category + Product SKU  */}
              <div className="w-full flex flex-col items-start justify-start gap-2">
                <p className="text-left text-black-main text-sm font-medium">
                  Category :{" "}
                  <span className="text-black-off font-normal">Mobile</span>
                </p>
                <p className="text-left text-black-main text-sm font-medium">
                  SKU :{" "}
                  <span className="text-black-main font-normal">
                    bigshop12993452
                  </span>
                </p>
              </div>
              {/* Social Links  */}
              <div className="w-full flex items-center justify-start gap-5">
                <p className="text-left text-sm font-normal ">Share This</p>
                <div className="flex items-end justify-start gap-2">
                  <Icons.Facebook
                    ClassName="w-[23px] h-[23px] cursor-pointer"
                    fill="#3B82F6"
                  />
                  <Icons.Twitter
                    ClassName="w-[24px] h-[24px] cursor-pointer"
                    fill="#3498db"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Close Icon  */}
        <div
          onClick={handleCloseProductDetails}
          className="flex items-center justify-center p-1 cursor-pointer absolute top-[2%] xs:top-[2.5%] lg:top-[4%] right-5 border-solid border-2 border-lavaRed rounded "
        >
          <Icons.Close ClassName="w-[30px] h-[30px] " fill="#EF2623" />
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetails;
