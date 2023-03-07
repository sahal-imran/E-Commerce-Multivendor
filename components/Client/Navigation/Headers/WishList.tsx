import React from 'react'
import * as Icons from "../../../../SVG/Icons"
import Divider from '../../../Shared/Divider/Divider';
import Link from 'next/link';
import Tooltip from '../../../Shared/Tooltip/Tooltip';

interface Props {

}

const WishList: React.FC<Props> = ({ }: Props) => {
    return (
        <div className='relative z-50 inline-block Add-to-cart pt-[3px]' >
            <Tooltip Text='2' >
                <Icons.WishList ClassName='w-[20px] h-[22px] cursor-pointer' fill='#222222' />
            </Tooltip>
            <div className='hidden bg-transparent absolute z-10 -right-6 w-[300px] Add-to-cart-item' >
                <div className='w-full p-4 mt-4 item-shadow border-t-[3px] border-main-brand bg-white-main' >
                    {/* added items */}
                    <div className='w-full h-[300px] overflow-y-auto ' >

                    </div>
                    {/* Divider */}
                    <Divider styles='w-full h-[.5px] bg-black-cool/40' />
                    <div className='w-full flex justify-center items-center flex-col gap-2 my-4' >
                        <Link href={""} className={`w-full h-[50px] flex justify-center items-center bg-[#f0f1f3] font-inter font-bold text-[.875rem] text-black-main leading-[1.25rem] capitalize`} >
                            view cart
                        </Link>
                        <Link href={""} className={`w-full h-[50px] flex justify-center items-center bg-main-brand font-inter font-bold text-[.875rem] text-black-main leading-[1.25rem] capitalize`} >
                            checkout now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList