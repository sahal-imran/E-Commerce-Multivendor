import React, { useState } from "react";
import Checkbox from "../../Shared/Checkbox/Checkbox";
import Slider from "@mui/material/Slider";

interface Props {
  ProductCategory: Array<object>;
  BrandFilter: Array<object>;
  ColorFilter: Array<object>;
  RamFilter: Array<object>;
}

const Filters: React.FC<Props> = ({
  ProductCategory,
  BrandFilter,
  ColorFilter,
  RamFilter,
}: Props) => {
  const [value, setValue] = useState([11, 250000]);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className="w-full bg-white-main shadow-md p-7 py-8 ">
      {/* =======> product Catgegory */}
      <div className="w-full flex flex-col gap-6">
        <h1 className="text-base leading-[24px] font-medium font-inter">
          Product categories
        </h1>
        {/* =======> one checkbox */}
        {ProductCategory.map((filter: any, index: number) => {
          return (
            <Checkbox
              key={filter.label}
              label={filter.label}
              name={filter.name}
              state={filter.state}
            />
          );
        })}
      </div>
      {/* ========> bottom border */}
      <div className="w-full border-b-[1px] border-solid border-lightGray py-4 opacity-60"></div>
      {/* =======> price range */}
      <div className="flex flex-col gap-4 py-10">
        <p className="select-none font-normal text-[20px] leading-[16px] text-black-main mb-5">
          Price Range
        </p>
        <Slider
          sx={{ color: "#FFBB38" }}
          value={value}
          min={11}
          max={250000}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={(value) => `$${value}`}
          onChange={handleChange}
        />
        <p className="select-none font-normal text-[0.75rem] leading-[16px] text-black-main">
          Price: ${value[0]} - ${value[1]}
        </p>
      </div>
      {/* ========> bottom border */}
      <div className="w-full border-b-[1px] border-solid border-lightGray py-0 opacity-60"></div>
      {/* =======> Brands */}
      <div className="w-full flex flex-col gap-6 py-8">
        <h1 className="text-base leading-[24px] font-medium font-inter">
          Brands
        </h1>
        {/* =======> one checkbox */}
        {BrandFilter.map((filter: any, index: number) => {
          return (
            <Checkbox
              key={filter.label}
              label={filter.label}
              name={filter.name}
              state={filter.state}
            />
          );
        })}
      </div>

      {/* ========> bottom border */}
      <div className="w-full border-b-[1px] border-solid border-lightGray py-0 opacity-60"></div>
      {/* =======> Color Filter */}
      <div className="w-full flex flex-col gap-6 py-8">
        <h1 className="text-base leading-[24px] font-medium font-inter">
          Color
        </h1>
        {/* =======> one checkbox */}
        {ColorFilter.map((filter: any, index: number) => {
          return (
            <Checkbox
              key={filter.label}
              label={filter.label}
              name={filter.name}
              state={filter.state}
            />
          );
        })}
      </div>

      {/* ========> bottom border */}
      <div className="w-full border-b-[1px] border-solid border-lightGray py-0 opacity-60"></div>
      {/* ===========> Ram Filter */}
      <div className="w-full flex flex-col gap-6 py-8">
        <h1 className="text-base leading-[24px] font-medium font-inter">
          Ramm
        </h1>
        {/* =======> one checkbox */}
        {RamFilter.map((filter: any, index: number) => {
          return (
            <Checkbox
              key={filter.label}
              label={filter.label}
              name={filter.name}
              state={filter.state}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Filters;
