
import Image from 'next/image';
import React from 'react';
import AnimatedText from './AnimatedText';
const MissionSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="pr-0 md:pr-8">
          <div className="inline-block font-nomral px-4 py-1 bg-red-100 text-red-600 rounded-full text-xl p-10 font-medium mb-6">
            WHAT IS TURKISH WEEK?
          </div>
          <AnimatedText heading={{heading1:'MISSION',heading2:'VISION'}} paragraph=' from anatolia to istanbul&quot; featuring works by renowned turkish photographers exhibition hall, national theater complex free admission'/>
       
          {/* <AnimationText heading='MISSION' paragraph=' from anatolia to istanbul&quot; featuring works by renowned turkish photographers exhibition hall, national theater complex free admission'/> */}
          
        </div>
        <div className="relative">
          <div className="rounded-3xl   relative">
            <Image 
              src="/images/turkish-textile.png" 
              alt="Person looking at colorful textile" 
              width={510}
              height={565}
              className=" object-cover"
            />
            <div className="absolute -rotate-3 font-bold bottom-20 left-[-18px] bg-red-600 rounded-full md:w-39 md:h-39 w-24 h-24  flex flex-col items-center justify-center text-center md:text-3xl text-xl text-transparent" style={{ WebkitTextStroke: '1.5px #FFFFFF' }}>
           <div className='flex flex-col items-center'>
          <span >TURK</span>
              <span >ISH</span>
              <span >EXPO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

