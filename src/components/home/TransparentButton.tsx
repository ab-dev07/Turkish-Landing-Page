import Link from 'next/link'
import React from 'react'
import { CircleArrow } from '../shared';

export default function TransparentButton({ href = "/",text ,textColor= "white",backgroundColor="#ED1E24"}: { href?: string,text:string,textColor?:string ,backgroundColor?:string}) {
  return (
    <Link 
      href={href} 
      className={`group flex items-center justify-between gap-4 border-2 border-[${backgroundColor}] hover:text-white hover:bg-[#ED1E24] text-${textColor} pl-6 pr-1 py-1 rounded-full transition`}
    >
      {text}
      <CircleArrow/>
    </Link>
  );
}
