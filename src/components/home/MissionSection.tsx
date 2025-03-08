
import Image from 'next/image';
import React from 'react';

const MissionSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="pr-0 md:pr-8">
          <div className="inline-block font-nomral px-4 py-1 bg-red-100 text-red-600 rounded-full text-xl p-10 font-medium mb-6">
            WHAT IS TURKISH WEEK?
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            MISSION
          </h2>
          
          <p className="text-gray-500 mb-16">
            from anatolia to istanbul&quot; featuring works by renowned turkish photographers exhibition hall, national theater complex free admission
          </p>
          <div className="border-t border-gray-200 mt-8 pt-8">
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-200 mb-6">
            VISION
          </h2>
          
          <p className="text-gray-500  mb-6">
            from anatolia to istanbul&quot; featuring works by renowned turkish photographers exhibition hall, national theater complex free admission
          </p>
          
          <div className="border-t border-gray-200 mt-8 pt-8">
          </div>
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
            <div className="absolute -rotate-3 font-bold bottom-20 left-[-18px] bg-red-600 rounded-full md:w-39 md:h-39 w-24 h-24  flex flex-col items-center justify-center text-center text-3xl text-transparent" style={{ WebkitTextStroke: '1.5px #FFFFFF' }}>
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