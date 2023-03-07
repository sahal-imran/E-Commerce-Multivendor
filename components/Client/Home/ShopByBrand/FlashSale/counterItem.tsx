import React from 'react'

interface Props{
    number:string ,
    title: string ,
    color: string
}

const Timer:React.FC<Props> = ({number,title,color}:Props) => {
  return (
    
    <div className='flex flex-col gap-1 items-center'>
      <div className='bg-white-main p-6 md:px-10 md:py-9 rounded-full'>
        <p className={`font-bold ${color} text-xl md:text-3xl`}>{number}</p>
      </div>
   <p className='font-medium text-lg md:text-xl'>{title}</p>
    </div>
    
  )
}

export default Timer