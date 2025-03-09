import React from 'react';

import TransparentButton from './TransparentButton';
import AnimationText from './AnimationText';
interface Event {
  startTime: string;
  endTime: string;
  category: string;
  title: string;
  description: string;
}

interface TimingSectionProps {
  date: string;
  events: Event[];
  selectedDay?: number;
  onDaySelect?: (day: number) => void;
}

const TimingSection: React.FC<TimingSectionProps> = ({ 
  date, 
  events, 
  selectedDay = 1,
  onDaySelect = () => {}
}) => {
  return (
    <div className=" ">
     <div>
      <section className="py-16 px-6 md:px-10 lg:px-12 bg-white">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-10  justify-evenly">
        <div className=" gap-2 mb-6">
      <div className='flex items-start gap-2 text-sm font-bold '>
      <div className="inline-block bg-red-600 font-normal text-white px-4 py-2 rounded-full text-xl p-10">
          PANAMA
        </div>
        
        <div className="inline-block px-4 py-2 bg-red-100 font-normal text-red-600 rounded-full mb-6 text-xl p-10">
           Costa Rica
          </div>
      </div>
      <div className='text-xl mb-2'>{date}</div>
          <AnimationText heading='PANAMA' paragraph='from anatolia to istanbul* featuring works by'/>
          <AnimationText heading=' COSTA RICA' paragraph='from anatolia to istanbul* featuring works by'/>
        
         
<div className='flex items-start gap-2'>
          <TransparentButton text='Download Agenda' textColor='black'/>
        </div> </div>
        
        <div className="md:w-[50%] flex flex-col ">
      <div className="flex justify-center items-center flex-wrap  gap-2 ">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            onClick={() => onDaySelect(day)}
            className={`py-2 px-4  rounded-xl text-center ${
              selectedDay === day 
                ? "bg-red-600 text-white" 
                : "bg-slate-100 text-black"
            }`}
          >
            <div className="text-xl font-bold">DAY {day}</div>
            <div className="text-xs uppercase">
              PANAMA<br />PROGRAM
            </div>
          </button>
        ))}
      </div>
      <div className="mt-8 border-t border-gray-200">
        {events?.map((event, index) => (
          <div key={index} className="py-6 border-b border-gray-200 text-[#28303F]">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <div className="font-bold text-xl">{event.startTime}</div>
                <div className="font-bold text-xl">{event.endTime}</div>
              </div>
              <div className="w-full md:w-3/4">
                <div className="text-red-500 text-sm mb-1">{event.category}</div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className=" text-sm text-[#838490]">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      
      </div>
    </section>
      </div>
     
    </div>
  );
};

export default TimingSection;
