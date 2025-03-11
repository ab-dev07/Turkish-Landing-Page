import Link from 'next/link'
import React from 'react'
import { CircleArrow } from '../shared';

export default function TransparentButton({ href = "/",text ,textColor= "white"}: { href?: string,text:string,textColor?:string }) {

  return (
    <Link 
      href={href} 
      className={`group flex items-center justify-between gap-4 border-2 border-[#ED1E24] hover:text-white hover:bg-[#ED1E24] text-${textColor} pl-6 pr-1 py-1 rounded-full transition`}
    >
      {text}
      <CircleArrow/>
    </Link>
  );
}
