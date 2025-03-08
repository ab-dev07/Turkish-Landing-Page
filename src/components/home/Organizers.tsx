import Image from "next/image";

export default function Organizers({ className = "" }) {
    const marqueeOrganizers = organizers.concat(organizers).concat(organizers).concat(organizers).concat(organizers).concat(organizers).concat(organizers)

    return (
        <section className={`overflow-hidden shadow-2xl bg-white py-3 ${className}`}>
            <div className="flex flex-nowrap marquee w-max">
                {
                    marqueeOrganizers.map((organizer, index) => (
                        <Image key={index} src={organizer.img} alt="organizer" width={100} height={97} className="w-auto h-[97px] ml-32" />
                    ))
                }
            </div>
        </section>
    )
}

const organizers = [
    { img: "/organizers/turkiyeCumhuriyetiBaskonsoloslugu.png" },
    { img: "/organizers/costaRicaChamberOfCommerce.png" },
    { img: "/organizers/essentialCostaRica.png" },
    { img: "/organizers/culturaJuventud.png" },
    { img: "/organizers/90events.png" }
]