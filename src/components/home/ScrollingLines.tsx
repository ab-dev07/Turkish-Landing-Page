import React from 'react'
import  styles  from './ScrollinLines.module.css'
import Star from '@/icons/Star'
import FillStar from '@/icons/FillStar'
export default function ScrollingLines({direction="forward",backgroundColor,rotate="no"}:{direction?:string,backgroundColor:string,rotate?:string}) {
  return (
    <>
  <div className={` ${direction=="forward"? styles.scrollingLines:styles.scrollingLinesReverse}
       ${rotate==="down"?" lg:rotate-3 xl:rotate-2":"lg:-rotate-3 xl:-rotate-3"}
        h-21 w-[9600px] relative overflow-hidden flex gap-3 px-5 items-center font-extrabold text-4xl text-white
     ${backgroundColor==='red'?'bg-[#ED1E24]  ':'bg-[#222222] '}
     
     `}
     >
        <Data/>
          <Data/>
          <Data/>
          <Data/>
          <Data/>
          <Data/>
          <Data/>
          
          <Data/>
          <Data/>
          
          <Data/>
          <Data/>
     </div>
 
   </>)
}

function Data() {
  return (
    <>
       <FillStar/>
        TURKISH WEEK
        <Star/>
        <span className='text-transparent' style={{WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: '#fff'}}>
         TURKISH EXPO
        </span>
    </>
  )
}