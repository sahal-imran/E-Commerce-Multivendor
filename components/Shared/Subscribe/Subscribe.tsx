import React from 'react';
import Wrapper from '../ComponentWrapper/Wrapper';
import * as Icons from "../../../SVG/Icons"

const Subscribe: React.FC = () => {
    const Submit = (e: any) => {
        e.preventDefault();
    }
    return (
        <Wrapper style="h-[300px] bg-[url(/Subscribe/background.png)] bg-center bg-no-repeat" >
            <div className='w-full h-full py-6 flex justify-center items-center flex-col' >
                <h1 className='font-inter font-extrabold text-[1.875rem] leading-[2.25rem] text-black-off' >
                    Get our latest offer
                </h1>
                <p className='font-inter font-normal text-[18px] text-black-main'>Newsletter</p>
                {/* Input */}
                <form onSubmit={Submit} className='w-full max-w-[540px] h-[54px] mt-6 grid md:grid-cols-[50px_calc(100%-140px-50px)_140px] grid-cols-[50px_calc(100%-100px-50px)_100px] grid-rows-1 bg-white-main' >
                    <div className='w-full h-full flex justify-center items-center' >
                        <Icons.Email ClassName='w-[19px] h-[17px]' stroke='#222222' fill='none' />
                    </div>
                    <input required autoComplete='off' type="email" className='w-full h-full bg-transparent outline-none border-none font-inter font-normal text-[.875rem] leading-[1.45rem] text-black-off placeholder:uppercase placeholder:text-black-off' placeholder='Email Address' />
                    <button type='submit' className='w-full h-full bg-main-brand font-inter font-bold text-[.875rem] leading-[1.45rem] tracking-wider text-black-off' >
                        Subscribe
                    </button>
                </form>
            </div>
        </Wrapper>
    )
}

export default Subscribe;