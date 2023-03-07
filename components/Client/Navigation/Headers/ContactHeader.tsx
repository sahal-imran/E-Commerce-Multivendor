import React from 'react';
import Wrapper from '../../../Shared/ComponentWrapper/Wrapper';
import Link from 'next/link';
import * as Icons from "../../../../SVG/Icons"
import { Data } from '../../../../constants/Data/JSON';

const ContactHeader: React.FC = () => {
    return (
        <Wrapper style='bg-white h-[40px] border-[1px] border-gray' >
            <div className='w-full h-full flex justify-between items-center' >
                {/* Nav items */}
                <div className='flex justify-center items-center md:gap-6 gap-4' >
                    {
                        Data?.ContactHeader.NavItem.map((nav: any, index: number) => {
                            return <Link key={index} href={nav.Route} className='font-inter font-medium text-black-off text-[.75rem] leading-[1.5rem] capitalize' >
                                {nav.Name}
                            </Link>
                        })
                    }
                </div>
                {/* Contact Info => Will be visible on desktop */}
                <div className='md:flex hidden justify-center items-center gap-10' >
                    <div className='flex justify-center items-center gap-1' >
                        <Icons.Phone ClassName={"w-[16px] h-[16px]"} fill="none" stroke='#222222' />
                        <p className='font-inter font-medium text-black-off text-[.75rem] leading-[1.5rem]'>{Data.ContactHeader.ContactInFo.Phone}</p>
                    </div>
                    <div className='flex justify-center items-center gap-2' >
                        <Icons.Email ClassName={"w-[16px] h-[16px]"} fill="none" stroke='#222222' />
                        <p className='font-inter font-medium text-black-off text-[.75rem] leading-[1.5rem]'>{Data.ContactHeader.ContactInFo.Email}</p>
                    </div>
                </div>
                {/* Button That will show on Phone view */}
                <button className='text-[.80rem] leading-[1.25rem] w-[115px] h-[26px] font-inter font-semibold bg-main-brand text-black-off capitalize whitespace-nowrap md:hidden block' >
                    Become Seller
                </button>
            </div>
        </Wrapper>
    )
}

export default ContactHeader