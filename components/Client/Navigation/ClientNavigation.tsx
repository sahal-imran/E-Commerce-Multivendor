import React, { useEffect, useRef, useState } from "react";
import ContactHeader from "./Headers/ContactHeader";
import SearchHeader from "./Headers/SearchHeader";
import Wrapper from "../../Shared/ComponentWrapper/Wrapper";
import AllCategoriesMenu from "./AllCategoriesMenu";
import FullWidthNavDropdown from "./FullWidthNavDropdown";
import { Data } from "../../../constants/Data/JSON"
import Link from "next/link";
import Search from "../../Shared/Search/Search";

interface Props {
    Items: object
}

const Navbar: React.FC = () => {

    return (
        <React.Fragment>
            <ContactHeader />
            <SearchHeader />
            <Wrapper style="md:hidden block">
                <Search />
            </Wrapper>
            <Wrapper style="bg-main-brand md:block hidden h-[60px]">
                <div className="w-full h-full relative flex justify-between items-center ">
                    <div className="h-full md:flex justify-center items-center gap-8">
                        {/* All Categories */}
                        <AllCategoriesMenu />
                        {/* Shop */}
                        <FullWidthNavDropdown Items={Data.Navbar.Shop} />
                        {/* Remaining nav items */}
                        {
                            Data.Navbar.Menu.map((item: any, index: number) => {
                                return <Link key={index} href={item.Route} className="font-inter font-semibold text-[14px] leading-[1.25rem] text-black-soft"  >
                                    {item.Name}
                                </Link>
                            })
                        }
                    </div>
                    <button className="text-[.85rem] leading-[1.25rem] w-[150px] h-[40px] font-inter font-semibold bg-black-off text-white-off capitalize whitespace-nowrap">
                        Become Seller
                    </button>
                </div>
            </Wrapper>
        </React.Fragment>
    );
};

export default Navbar;
