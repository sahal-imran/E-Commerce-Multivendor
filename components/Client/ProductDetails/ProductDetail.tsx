import React, { useState } from "react";
import Wrapper from "../../Shared/ComponentWrapper/Wrapper";
import Filters from "./Filters";
import ProductCard from "../../Shared/Advertise/ProductCard";
import * as Icons from "../../../SVG/Icons";
import InVerticalFormProduct from "./VerticalView";
import HorizentialFormProduct from "./HorizontialView";
import { RxViewHorizontal } from "react-icons/rx";
import { GrFilter } from "react-icons/gr";
function ProductDetail() {
  const [Is_Vertical, Set_Vertical] = useState(true);
  const [ShowFilter, setShowFilter] = useState(false);

  const [Product_Categories, Set_Product_Categories] = useState([
    {
      label: "Electronics",
      name: "electronics",
      state: "electronics",
    },
    {
      label: "Game",
      name: "game",
      state: "game",
    },
    {
      label: "Mobile",
      name: "mobile",
      state: "mobile",
    },
    {
      label: "Lifestyle",
      name: "lifestyle",
      state: "lifestyle",
    },
    {
      label: "Babies & Toys",
      name: "babiesToys",
      state: "babies-toys",
    },
    {
      label: "Bike",
      name: "bike",
      state: "bike",
    },
    {
      label: "Men's Fasion",
      name: "menFashion",
      state: "men-fashion",
    },
    {
      label: "Woman Fashion",
      name: "woman-fashion",
    },
    {
      label: "Talevision",
      name: "talevision",
      state: "talevision",
    },
    {
      label: "Accessories",
      name: "accessories",
      state: "accessories",
    },
    {
      label: "John Doe",
      name: "johnDoe",
      state: "john-doe",
    },
  ]);

  const [Brands_Filter, Set_Brands_Filter] = useState([
    {
      label: "Oneplus",
      name: "oneplus",
      state: "oneplus",
    },
    {
      label: "Tencent",
      name: "tencent",
      state: "tencent",
    },
    {
      label: "Apple",
      name: "apple",
      state: "apple",
    },
    {
      label: "Mircrosoft",
      name: "mircrosoft",
      state: "mircrosoft",
    },
    {
      label: "Lenovo",
      name: "lenovo",
      state: "lenovo",
    },
    {
      label: "Huawei",
      name: "huawei",
      state: "huawei",
    },
    {
      label: "Nexus",
      name: "nexus",
      state: "nexus",
    },
    {
      label: "Google",
      name: "google",
      state: "google",
    },
    {
      label: "Firefox",
      name: "firefox",
      state: "firefox",
    },
    {
      label: "Tesla",
      name: "tesla",
      state: "tesla",
    },
    {
      label: "Brave",
      name: "brave",
      state: "brave",
    },
    {
      label: "Facebook",
      name: "facebook",
      state: "Facebook",
    },
    {
      label: "VIVO",
      name: "vivo",
      state: "vivo",
    },
  ]);

  const [Color_Filter, Set_Color_Filter] = useState([
    {
      label: "Red",
      name: "red",
      state: "red",
    },
    {
      label: "Silver",
      name: "silver",
      state: "silver",
    },
  ]);

  const [Ram_Filter, Set_Ram_Filter] = useState([
    {
      label: "4GB",
      name: "4gb",
      state: "4gb",
    },
  ]);

  return (
    <Wrapper style="">
      <div className="w-full flex  justify-between items-start my-6 ">
        {/* =======> filters */}
        <div className="w-[270px] hidden lg:flex flex-col gap-8">
          <Filters
            ProductCategory={Product_Categories}
            BrandFilter={Brands_Filter}
            ColorFilter={Color_Filter}
            RamFilter={Ram_Filter}
          />
          {/* ========>one product */}
          <div className="w-full">
            <ProductCard
              category="gaming"
              TitleTopSection="Apple"
              TitleSecSection="Smart Watch"
              textTopSize="md:text-[30px]"
              textBottomSize="md:text-[30px]"
              style="w-full md:py-10 bg-[url('/Assets/Home/categoryProduct/3.png')]"
              categoryBg="bg-main-brand"
              categoryColor="text-white-main"
            />
          </div>
        </div>

        {/* =======> products */}
        <div className="w-full lg:w-[calc(100%-270px)] pl-0 lg:pl-6">
          <div className="w-full flex flex-col justify-center items-center">
            {/* =======> Header */}
            <div className="w-full flex justify-between items-center bg-white-main p-5 shadow-md">
              <p className="select-none font-normal font-inter text-[0.75rem] leading-[16px] text-black-main">
                <span className="text-black-cool">Showing</span> 1–7 of 7
                results
              </p>
              {/* ========> filter icon */}
              <GrFilter
                onClick={() => {
                  setShowFilter(!ShowFilter);
                }}
                className="lg:hidden flex text-[28px] text-black-main cursor-pointer"
              />
              {/* ====> view by  */}
              <div className="flex justify-center items-center gap-4">
                <p className="select-none font-semibold text-[14px] font-inter leading-[16px] text-black-main">
                  View by:
                </p>
                <div className="flex justify-center items-center gap-1">
                  <button onClick={() => Set_Vertical(true)}>
                    <Icons.VerticalView
                      // stroke={Is_Vertical ? "#000000" : "#797979"}
                      stroke="none"
                      fill="none"
                      ClassName="h-6 w-6"
                    />
                  </button>
                  <button onClick={() => Set_Vertical(false)}>
                    <Icons.HorizentialView
                      // stroke={Is_Vertical ? "#797979" : "#000000"}
                      stroke="none"
                      fill="none"
                      ClassName="h-6 w-6"
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* ========> Vertical form product + Horizential form product */}
            {Is_Vertical ? (
              <div className="w-full">
                <InVerticalFormProduct />
              </div>
            ) : (
              <div className="w-full">
                <HorizentialFormProduct />
              </div>
            )}
          </div>
        </div>
        {/* ========> filter on small screen */}
        {ShowFilter && (
          <div className="w-[270px] flex flex-col gap-8 absolute top-80 z-40">
            <Filters
              ProductCategory={Product_Categories}
              BrandFilter={Brands_Filter}
              ColorFilter={Color_Filter}
              RamFilter={Ram_Filter}
            />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default ProductDetail;
