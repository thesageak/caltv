import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import halfCircle from "@/public/CalTV-Accent.png"

export interface SectionProps {
    title: string;
    primaryColor: string;
    secondaryColor: string;
    navbarColor: string;
    textColor?: string;
    currentPage?: string;
    //children: React.ReactNode
}

export const SectionLayout = ({
    title,
    primaryColor,
    secondaryColor,
    navbarColor,
    // children
}: SectionProps) => {
    return (
        <div>
            <Navbar barColor={navbarColor} textColor={primaryColor} currentPage={title.toLowerCase()} />
            <div className="w-full relative">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1280 720"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                        points="0 0 0 329.14 1558.26 399.3 1558.26 .25 0 0"
                        className={`fill-current ${primaryColor}`}
                    />

                    <polygon
                        points="0 329.14 1558.26 429.37 1558.26 399.3 0 329.14"
                        className={`fill-current ${secondaryColor}`}
                    />
                </svg>

                <img
                    src={halfCircle.src}
                    className="flex justify-end absolute h-85 top-0 right-0"
                />

                <div className="flex flex-col md:w-[1100px] mx-auto absolute inset-0 top-15 z-10">
                    <h1 className="text-[6.5rem] font-bold text-white">{title}</h1>
                </div>

            </div>

            {/* <main>
                {children}
            </main> */}

            {/*temporary spacing*/}
            <div className="h-[1000px]" />
            <Footer />
        </div>
    )
}