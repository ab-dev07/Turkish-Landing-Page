import Image from "next/image";
import CircleArrow from "../shared/CircleArrow";

export default function Speakers() {
    return (
        <section className="mt-32">
            <h1 className="text-6xl md:text-[83px] font-bold uppercase text-center px-10 text-wrap leading-tight">
                <span>Meet our </span>
                <span className="outline-txt -tracking-wider">Speaker</span>
            </h1>
            <p className="font-geist px-10 md:w-[695px] mx-auto text-center">Our speaker lineup comprises leaders from Stripe and beyond, who’ll share knowledge and advice on the most pressing topics facing companies today. Stay tuned for more announcements.</p>
            <div className="flex px-4 gap-4 mt-7 overflow-scroll">
                <SpeakerCard name="Dylan Field" img="/speakers/dylanField.png" />
                <SpeakerCard name="Jane Cooper" img="/speakers/janeCooper.png" />
                <SpeakerCard name="Jacob Jones" img="/speakers/jacobJones.png" />
                <SpeakerCard name="Albert Flores" img="/speakers/albertFlores.png" />
            </div>
            <div className="flex gap-2 justify-center mt-7">
                <span className="bg-[#ed1e24] rounded-[88px] w-[34px] cursor-pointer" />
                <span className="bg-[#eee] rounded-full aspect-square w-[12px] cursor-pointer" />
                <span className="bg-[#eee] rounded-full aspect-square w-[12px] cursor-pointer" />
                <span className="bg-[#eee] rounded-full aspect-square w-[12px] cursor-pointer" />
            </div>
        </section>
    )
}


interface Speaker {
    name: string;
    img: string;
}

function SpeakerCard(props: Speaker) {
    return (
        <div className="relative w-full md:w-[427px] aspect-square overflow-hidden shrink-0 bg-gray-400">
            <Image src={props.img} alt="speaker" fill />
            <div className="speaker-overlay" />
            <Image src="/speakers/speakerCircle.svg" alt="speaker" width={169} height={169} className="absolute top-0 left-0 w-[100px] md:w-[169px]" />
            <div className="absolute bottom-2 left-2 flex gap-3 group cursor-pointer items-center text-white">
                <h3 className="text-3xl md:text-[47px] font-bold">{props.name}</h3>
                <CircleArrow />
            </div>
        </div>)
}