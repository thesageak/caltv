import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import colorBarAsset from '@/public/ColorBarAsset.svg'

export default function Feature() {
    return (
        <div>
            <Navbar barColor="bg-darkGrey" />
            <div className="w-[1100px] mx-auto mt-25 flex flex-row gap-65">
                <form action="#" method="POST" className="flex flex-col gap-5">
                    <div className="flex flex-row gap-3">
                        <div className="flex flex-col">
                            <label>Name <span className="text-red-600">*</span></label>
                            <input type="text" id="firstname" name="firstname" className=" w-[10vw] p-2 rounded text-white border-2 border-gray-300" />
                            <label htmlFor="firstname">First</label>
                        </div>

                        <div className="flex flex-col">
                            <label className="invisible">...</label>
                            <input type="text" id="lastname" name="lastname" className=" w-[10vw] p-2 rounded text-white border-2 border-gray-300" />
                            <label htmlFor="lastname">Last</label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label>Organization</label>
                        <input type="text" id="organization" name="organization" className=" w-[21vw] p-2 rounded text-white border-2 border-gray-300" />
                        <label htmlFor="organization">if applicable, state your affiliated organization</label>
                    </div>

                    <div className="flex flex-col">
                        <label>Email <span className="text-red-600"> * </span> </label>
                        <input type="text" id="email" name="email" className=" w-[21vw] p-2 rounded text-white border-2 border-gray-300" />
                    </div>

                    <div className="flex flex-col">
                        <label>Description  <span className="text-red-600"> * </span> </label>
                        <textarea id="description" name="description" rows={4} className=" w-[21vw] p-2 rounded text-white border-2 border-gray-300" />
                        <label htmlFor="description">max 200 words</label>
                    </div>

                    <button
                    type="submit"
                    className="w-[5vw] py-2 bg-gray-300 hover:bg-gray-400"
                    >
                        Submit
                    </button>
                </form>

                <div className="flex flex-col -translate-y-10">
                    <h1 className="font-bold text-[2.5rem] leading-30">
                        Collaborate with CalTV.
                    </h1>
                    <p className="font-bold">
                        Reach out to us through this form for collaboration or feature requests. 
                        For general inquiries and comments, please use the Contact Us form.
                    </p>
                </div>
            </div>

            <img
            src={colorBarAsset.src}
            className="w-full object-cover mt-25"
            />
            <Footer />
        </div>
    )
}