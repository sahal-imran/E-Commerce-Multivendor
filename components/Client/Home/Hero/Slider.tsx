import React from "react";
import Wrapper from "../../../Shared/ComponentWrapper/Wrapper";
import ProductCard from "../../../Shared/Advertise/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper";

const Slider: React.FC = () => {
  return (
    <Wrapper style="py-16 z-10">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 md:gap-8">
        {/* ======> left portion */}
        <div className="h-full w-full col-span-1 md:col-span-2 xl:col-span-2 row-span-1 md:row-span-2">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Mousewheel]}
            className="mySwiper"
          >
            {/* =======> one slide */}
            <SwiperSlide>
              <ProductCard
                category="new released"
                TitleTopSection="Apple"
                TitleSecSection="Mackbook Pro "
                TitleThirdSection="Max"
                textTopSize="md:text-[40px]"
                textBottomSize="md:text-[52px]"
                style="w-full md:py-36 bg-[url('/Assets/Home/categoryProduct/1.png')]"
                categoryBg="bg-main-brand"
                categoryColor="text-white-main"
              />
            </SwiperSlide>
            {/* =======> sec slide */}
            <SwiperSlide>
              <ProductCard
                category="new released"
                TitleTopSection="Headphone"
                TitleSecSection="JBL Music"
                textTopSize="md:text-[40px]"
                textBottomSize="md:text-[52px]"
                style="w-full md:py-36 bg-[url('/Assets/Home/categoryProduct/2.png')]"
                categoryBg="bg-main-brand"
                categoryColor="text-white-main"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* =======> right section one product */}
        <div className="col-span-1 row-span-1">
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
        {/* =======> right section sec product */}
        <div className="col-span-1 row-span-1">
          <ProductCard
            category="gaming"
            TitleTopSection="Apple"
            TitleSecSection="Smart Watch"
            textTopSize="md:text-[30px]"
            textBottomSize="md:text-[30px]"
            style="w-full md:py-10 bg-[url('/Assets/Home/categoryProduct/4.png')]"
            categoryBg="bg-main-brand"
            categoryColor="text-white-main"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Slider;
