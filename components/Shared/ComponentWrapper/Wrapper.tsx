import React, { ReactNode, useEffect, useState, createContext } from "react";

interface Props {
    children?: ReactNode;
    style?: string
}

const Wrapper: React.FC<Props> = ({ children, style }: Props) => {
    return (
        <div className={`w-full ${style}`} >
            <div className='w-full h-full max-w-[1240px] m-auto md:px-8 px-2' >
                {children}
            </div>
        </div>
    )
}

export default Wrapper