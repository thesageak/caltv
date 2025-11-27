import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import colorBarAsset from '@/public/ColorBarAsset.svg'

export default function Contact() {
    return (
        <div>
            <Navbar barColor="bg-darkGrey" />
            <div className="w-[1100px] mx-auto mt-25 flex flex-row gap-25">
                <div className="w-[15vw] -translate-y-10">
                    <h1 className="text-[3rem] leading-30">
                        Contact Us.
                    </h1>
                    <p className="font-bold mb-10">
                        Reach out to us through this form for general inqfuiries.
                        For collaboration or feature requests, please use the Get Featured form.
                    </p>
                    <p className="font-bold">
                        Executive Directors: <br />
                        Citlali Gonzalez: <br /> cggonzalez2081@berkeley.edu <br />
                        Spencer Douangphouxay: <br /> douangphouxay@berkeley.edu <br />
                    </p>
                </div>
                <form action="#" method="POST" className="flex flex-col gap-5">
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-col">
                            <label>Name <span className="text-red-600">*</span></label>
                            <input type="text" id="firstname" name="firstname" className=" w-[20vw] p-2 rounded text-white border-2 border-gray-300" />
                            <label htmlFor="firstname" className="text-sm">First</label>
                        </div>

                        <div className="flex flex-col">
                            <label className="invisible">...</label>
                            <input type="text" id="lastname" name="lastname" className=" w-[20vw] p-2 rounded text-white border-2 border-gray-300" />
                            <label htmlFor="lastname" className="text-sm">Last</label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label>Email <span className="text-red-600"> * </span> </label>
                        <input type="text" id="email" name="email" className=" w-[41vw] p-2 rounded text-white border-2 border-gray-300" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message">Comment or Message  <span className="text-red-600"> * </span> </label>
                        <textarea id="message" name="message" rows={4} className=" w-[41vw] p-2 rounded text-white border-2 border-gray-300" />
                    </div>

                    <button
                        type="submit"
                        className="w-[5vw] py-2 bg-gray-300 hover:bg-gray-400"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <img
                src={colorBarAsset.src}
                className="w-full object-cover mt-25"
            />
            <Footer />
        </div>
    )
}