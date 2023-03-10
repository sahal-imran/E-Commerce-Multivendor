import Divider from '../Divider/Divider'
import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import { Data } from '../../../constants/Data/JSON'

function Search() {
    const [SearchedCategory, setSearchCategory] = useState<string | null>("all categories")
    const [SearchInput, setSearchInput] = useState<string | null>("all categories")
    return (
        <div className='md:w-[520px] w-full h-[44px] border-[1px] border-gray grid grid-cols-[35%_1px_calc(100%-35%-95px)_94px]' >
            <div className='w-full h-full' >
                <input onChange={e => setSearchInput(e.target.value)} type="text" className={`w-full h-full bg-transparent border-none outline-none font-inter font-medium text-[.75rem] text-input leading-[1rem] pl-4`} placeholder='Search products...' />
            </div>
            <div className='w-full h-full flex justify-center items-center' >
                <Divider styles='w-[1px] bg-gray h-[22px]' />
            </div>
            <div className='w-full h-full' >
                <Dropdown Title='all categories' item={Data.SearchHeader.SearchCategory} Event={setSearchCategory} />
            </div>
            <div className='w-full h-full' >
                <button className='w-full h-full bg-main-brand font-inter font-semibold text-[.875rem] text-black-main leading-[1.25rem] capitalize ' >
                    search
                </button>
            </div>
        </div>
    )
}

export default Search