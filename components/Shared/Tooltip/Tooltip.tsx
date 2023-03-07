import React, { ReactNode } from 'react'

interface Props {
    Text: string;
    background?: string;
    children?: ReactNode;
}

const Tooltip: React.FC<Props> = ({ Text, background = "bg-main-brand", children }: Props) => {
    return (
        <div className='relative' >
            {children}
            <div className={`md:w-[18px] w-[14px] md:h-[18px] h-[14px] rounded-full ${background} flex justify-center items-center font-inter font-normal text-[9px] absolute -top-2 md:-right-3 -right-1`} >
                {Text}
            </div>
        </div>
    )
}

export default Tooltip