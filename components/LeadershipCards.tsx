//Rough Card Dimension: 491 x 292 

interface LeadershipCardProps {
    name: string;
    title: string;
    image?: string;
    pronouns?: string;
}

export default function LeadershipCards({name, title, image, pronouns} : LeadershipCardProps) {
    return (
        <div className="relative w-[491px] h-[292px] flex flex-col items-center group">
            <div className="w-40 h-40">
                 <img
                    src={image}
                    className="w-full h-full rounded-full object-cover overflow-hidden mb-7 group-hover:scale-110 transition-transform ease-in-out duration-1000"
                />
            </div>

            <div className="
                absolute bottom-0
                w-[491px] 
                h-0 group-hover:h-[292px]    
                bg-linear-to-t from-white to-transparent via-white/85
                transition-all duration-500" 
            />
            <div className="flex flex-col items-center group-hover:-translate-y-26 transition-transform duration-500">
                <p className="font-bold text-lg">
                    {name}
                </p>
                <p>
                    {title}
                </p>
                <p className="font-bold text-sm opacity-0 translate-y-15 group-hover:opacity-100 group-hover:translate-y-3 transition-all duration-500">
                    {pronouns}
                </p>
            </div>
        </div>
    )
}