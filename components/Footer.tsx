import asucLogo from '@/public/ASUCLogoWhite.png'
export default function Footer() {
    return (
        <footer className="flex flex-row justify-between items-center h-36 px-50 bg-black text-2xl">
            <div>
                <p className="text-[1rem] text-darkGrey">Copyright © 2005-2026 CalTV. All rights reserved.</p>
                <div>
                    <a href="#" className="text-[1rem] text-orange-600">ASUC</a>
                    <span> | </span>
                    <a href="#" className= "text-[1rem] text-orange-600">UC Berkeley</a>
                </div>
            </div>
            <img
                src={asucLogo.src}
                alt="ASUC logo"
                className="w-auto h-25.5"
            />
        </footer>
    )
}