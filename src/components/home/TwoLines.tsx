import React from 'react'
import ScrollingLines from './ScrollingLines'

export default function TwoLines() {
  return (
    <div className="relative  right-720 top-[-55px] "> 
<ScrollingLines rotate="down" backgroundColor="red"/>

<ScrollingLines direction="right" rotate="up" backgroundColor="black"/>
</div>
  )
}
