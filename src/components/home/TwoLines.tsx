import React from 'react'
import ScrollingLines from './ScrollingLines'

export default function TwoLines() {
  return (
    <div className="relative xl:right-[720]  lg:right-920 md:top-[-55px] "> 
<ScrollingLines rotate="down" backgroundColor="red"/>
<div className='relative xl:top-[-120px]'>
<ScrollingLines direction="right" rotate="up" backgroundColor="black"/>
</div>
</div>
  )
}
