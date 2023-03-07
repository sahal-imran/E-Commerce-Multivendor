import React, { useEffect, useRef, useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri';
import * as Icons from "../../../SVG/Icons"
import Link from 'next/link';
import { Data } from "../../../constants/Data/JSON"




const AllCategoriesMenu: React.FC = () => {
    const [ShowDropdownItem, Set_DropdownItem] = useState<boolean>(false)

    let useClickOutside = (handler: any) => {
        let domNode = useRef<any>();

        useEffect(() => {
            let maybeHandler = (event: any) => {
                if (!domNode.current.contains(event.target)) {
                    handler();
                }
            };

            document.addEventListener("mousedown", maybeHandler);

            return () => {
                document.removeEventListener("mousedown", maybeHandler);
            };
        });

        return domNode;
    };
    let domNode = useClickOutside(() => {
        Set_DropdownItem(false);
    });
    return (
        <div ref={domNode} className='h-[90%] relative w-[270px] self-end' >
            <button onClick={() => Set_DropdownItem(!ShowDropdownItem)} className='bg-white-off w-full h-full flex justify-between items-center px-4 text-[14px] leading-[1.25rem] text-black-soft font-inter font-semibold rounded-tr-lg rounded-tl-lg' >
                <span className='flex justify-center items-center gap-2 capitalize' >
                    <Icons.Menu ClassName='w-[16px] h-[9px] cursor-pointer' fill='#1D1D1D' />
                    All Categories
                </span>
                <RiArrowDownSLine color='#1D1D1D' />
            </button>
            {
                ShowDropdownItem &&
                <div className='w-full bg-white-main relative z-50' style={{ boxShadow: "rgb(0 0 0 / 14%) 0px 15px 30px 0px" }} >
                    {
                        Data.Navbar.AllCategories?.map((item: any, index: number) => {
                            return <Link onClick={() => Set_DropdownItem(!ShowDropdownItem)} key={index} href={item.Route} className='w-full h-[40px] px-4 flex justify-start items-center text-[.75rem] leading-[1rem] font-inter font-normal text-black-soft gap-3 border-b-[1px] border-gray' >
                                {item.Icon}
                                {item.Name}
                            </Link>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default AllCategoriesMenu