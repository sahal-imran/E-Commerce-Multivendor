import Link from 'next/link'
import React from 'react'
import ProductCard from '../../Shared/Advertise/ProductCard';
import { RiArrowDownSLine } from "react-icons/ri";




interface Props {
    Items: any
}

function FullWidthNavDropdown({ Items }: Props) {
    return (
        <div className="Full_Menu flex justify-center items-center h-[100%]">
            <button className="font-inter font-semibold text-[14px] leading-[1.25rem] text-black-soft flex justify-center items-center gap-1">
                {Items.Title}
                <RiArrowDownSLine color="#1D1D1D" />
            </button>
            <div
                className="absolute bg-white-main hidden z-50 w-full py-8 px-12 top-[60px] left-0 right-0 justify-center items-center"
                style={{ boxShadow: "rgb(0 0 0 / 14%) 0px 15px 30px 0px" }}
            >
                <div className=" w-[20%] h-full flex flex-col">
                    <h2 className="font-inter font-[700] text-[13px] text-black-off mb-4 uppercase">
                        {Items.Category1.Title}
                    </h2>
                    <div className="flex justify-start items-start flex-col gap-2" >
                        {
                            Items.Category1.Items.map((item: any, index: number) => {
                                return <Link
                                    key={index}
                                    href={item.Route}
                                    className="font-inter font-normal text-black-cool text-[.875rem] leading-[1.25rem] hover:underline hover:text-main-brand cursor-pointer"
                                >
                                    {item.Name}
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className=" w-[20%] h-full flex flex-col">
                    <h2 className="font-inter font-[700] text-[13px] text-black-off mb-4 uppercase">
                        {Items.Category2.Title}
                    </h2>
                    <div className="flex justify-start items-start flex-col gap-2" >
                        {
                            Items.Category2.Items.map((item: any, index: number) => {
                                return <Link
                                    key={index}
                                    href={item.Route}
                                    className="font-inter font-normal text-black-cool text-[.875rem] leading-[1.25rem] hover:underline hover:text-main-brand cursor-pointer"
                                >
                                    {item.Name}
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className=" w-[20%] h-full flex flex-col">
                    <h2 className="font-inter font-[700] text-[13px] text-black-off mb-4 uppercase">
                        {Items.Category3.Title}
                    </h2>
                    <div className="flex justify-start items-start flex-col gap-2" >
                        {
                            Items.Category3.Items.map((item: any, index: number) => {
                                return <Link
                                    key={index}
                                    href={item.Route}
                                    className="font-inter font-normal text-black-cool text-[.875rem] leading-[1.25rem] hover:underline hover:text-main-brand cursor-pointer"
                                >
                                    {item.Name}
                                </Link>
                            })
                        }
                    </div>
                </div>
                <div className="w-[40%] h-[300px] relative">
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
        </div>
    )
}

export default FullWidthNavDropdown