import React, { useState } from 'react'
import Wrapper from '../../../Shared/ComponentWrapper/Wrapper'
import Image from 'next/image'
import AddToCart from './AddToCart'
import WishList from './WishList'
import * as Icons from "../../../../SVG/Icons"
import Search from '../../../Shared/Search/Search'
import Link from 'next/link'
import Tooltip from '../../../Shared/Tooltip/Tooltip'
import Divider from '../../../Shared/Divider/Divider'
// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Data } from '../../../../constants/Data/JSON'


const SearchHeader: React.FC = () => {

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const [IsMainMenu, setMainMenu] = React.useState(true)


    return (
        <Wrapper style='bg-white h-[86px]' >
            <div className='w-full h-full flex justify-between items-center ' >
                {/* Hamburger for phone */}
                <button className='md:hidden block' onClick={toggleDrawer} ><Icons.Menu ClassName='w-[24px] h-[24px] cursor-pointer' fill='#1D1D1D' /></button>

                {/* Logo */}
                <Link href={"/"} className='relative w-[153px] h-[44px] ' >
                    <Image src={"/logo.webp"} alt="" fill className='object-contain' />
                </Link>

                {/* Search bar for desktop */}
                <div className='md:block hidden' >
                    <Search />
                </div>

                {/* Add to cart, wish-list */}
                <div className='md:flex hidden justify-center items-center gap-7' >
                    <WishList />
                    <AddToCart />
                    <Link href={""} className="md:block hidden" >
                        <Icons.User ClassName='w-[20px] h-[20px] cursor-pointer' fill='#222222' />
                    </Link>
                </div>
                {/* For Phone */}
                <Link href={""} className='md:hidden block mr-1' >
                    <Tooltip Text='2' >
                        <Icons.AddToCart ClassName='w-[18px] h-[20px] cursor-pointer' fill='#222222' />
                    </Tooltip>
                </Link>
            </div>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                style={{ width: "75%" }}
            >
                <div className='w-full h-full p-4' >
                    <div className='w-full flex justify-between items-center' >
                        <div className='flex justify-center items-center gap-4' >
                            <Link href={""} className='md:hidden block mr-1' >
                                <Tooltip Text='2' >
                                    <Icons.WishList ClassName='w-[22px] h-[24px] cursor-pointer' fill='#222222' />
                                </Tooltip>
                            </Link>
                            <Link href={""} className='md:hidden block mr-1' >
                                <Tooltip Text='2' >
                                    <Icons.AddToCart ClassName='w-[22px] h-[22px] cursor-pointer' fill='#222222' />
                                </Tooltip>
                            </Link>
                        </div>
                        <button onClick={toggleDrawer} >
                            <Icons.Cross ClassName='w-[34px] h-[34px] cursor-pointer' fill='red' />
                        </button>
                    </div>
                    <div className={`w-full flex justify-center items-center my-3`} >
                        <button onClick={() => setMainMenu(true)} className={`font-inter text-[1rem] leading-[1.5rem] ${IsMainMenu ? "text-black-off" : "text-black-cool"} capitalize font-semibold`} >Menu</button>
                        <Divider styles='w-[1px] h-[18px] bg-gray mx-4 ' />
                        <button onClick={() => setMainMenu(false)} className={`font-inter text-[1rem] leading-[1.5rem] ${!IsMainMenu ? "text-black-off" : "text-black-cool"} capitalize font-semibold`} >All categories</button>
                    </div>
                    {
                        !IsMainMenu ?
                            <div>
                                {
                                    Data.Navbar.AllCategories?.map((item: any, index: number) => {
                                        return <Link key={index} href={item.Route} className='w-full h-[44px] px-4 flex justify-start items-center text-[.9rem] leading-[1rem] font-inter font-normal text-black-soft gap-3 border-b-[1px] border-gray' >
                                            {item.Icon}
                                            {item.Name}
                                        </Link>
                                    })
                                }
                            </div>
                            :
                            <div className='flex justify-center items-start flex-col w-full' >
                                {
                                    Data.Navbar.Menu.map((item: any, index: number) => {
                                        return <Link key={index} href={item.Route} className="w-full h-[44px] px-4 flex justify-start items-center text-[.9rem] leading-[1rem] font-inter font-normal text-black-soft gap-3 border-b-[1px] border-gray"  >
                                            {item.Name}
                                        </Link>
                                    })
                                }
                            </div>
                    }
                </div>
            </Drawer>
        </Wrapper>
    )
}

export default SearchHeader