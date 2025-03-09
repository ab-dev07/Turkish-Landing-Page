import Image from "next/image";

interface EventType {
  id: number;
  title: string;
  image: string;
  location: string;
  time: string;
  date: string;
}

const EventCards = ({ event }: { event: EventType }) => {
  return (
    <div 
      className={`rounded-xl overflow-hidden shadow-lg`}
    >
      <div className="relative">
        <Image
        width={394}
        height={294}
          src={event.image} 
          alt={event.title}
          layout='responsive'
          objectFit="cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
        />
        <div className="absolute w-17 h-19 bottom-[-35px] right-8 bg-[#ED1E24] text-white rounded-xl p-2 flex flex-col items-center">
          <span className="text-3xl font-bold">{event.date.split(' ')[0]}</span>
          <span className="text-xs">{event.date.split(' ')[1]}</span>
        </div>
        
      </div>
      <div className="p-4 bg-white">
        <div className="flex items-center gap-1  mb-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" >
<path d="M8.12961 14.4267C11.736 14.4267 14.6596 11.5031 14.6596 7.8967C14.6596 4.29028 11.736 1.3667 8.12961 1.3667C4.52319 1.3667 1.59961 4.29028 1.59961 7.8967C1.59961 11.5031 4.52319 14.4267 8.12961 14.4267Z" stroke="#ED1E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.12891 4.08752V7.89669H11.9381" stroke="#ED1E24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 <span className="text-[14px] font-normal">{event.time}</span>
        </div>
        <h2 className="font-bold text-xl mb-2">{event.title}</h2>
        <div className="flex items-center  mb-4">
         <span className="text-[14px]">{event.location}</span>
        </div>
      
        <button className="bg-[#ED1E24] hover:bg-red-600 text-white font-bold py-2 px-6 w-35 h-11 rounded-full text-sm transition duration-200">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCards;