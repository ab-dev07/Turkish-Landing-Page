import Image from 'next/image'
import React from 'react'

export default function Sponsor() {
    return (
        <section>
            <h1 className='text-6xl md:text-[83px] font-bold text-center uppercase leading-20 md:leading-normal'>
                <span>
                    Our
                </span>{" "}
                <span className='outline-txt'>
                    Sponsor
                </span>
            </h1>
            <div className='flex gap-5 justify-center mt-10 flex-wrap'>
                <SponsorCard src="/sponsors/casamax.svg" />
                <SponsorCard src="/sponsors/roomyDomy.svg" />
                <SponsorCard src="/sponsors/intuitMint.svg" />
            </div>
        </section>
    )
}

function SponsorCard({ src }: { src: string }) {
    return <div className='shadow-2xl rounded-lg w-[300px] flex justify-center py-6'>
        <Image src={src} alt="sponsor" height={46} width={200} className='h-[46px] w-auto' />
    </div>
}