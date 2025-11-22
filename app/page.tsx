import colorBarAsset from '@/public/ColorBarAsset.svg'
import colorWave from '@/public/BottomSmallerWave.svg'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar barColor="bg-darkGrey"/>
      <div className="w-full flex flex-col">
        <div className="w-full">
          <img
            src={colorBarAsset.src}
            className="w-full h-6 object-cover"
          />
        </div>
        <div className="relative w-full">
          {/*------Gradient Block Background-------*/}
          <div className="absolute inset-0 top-0 w-full h-25 bg-linear-to-b from-black/95 to-darkGrey"/>
          <div className="absolute inset-0 top-24.5 w-full h-50 bg-darkGrey"/>

          {/*-------- Main Content --------*/}
          <div className="flex flex-col md:w-[1100px] mx-auto min-h-screen absolute inset-0 top-15">
            <h1 className="text-[2.5rem] text-white">Latest Videos</h1>
            <h1 className="text-[2.5rem] font-bold text-white">Youtube Title Here</h1>
          </div>
        </div>
      </div>

      {/*temporary spacing*/}
      <div className="h-[1000px]" />

      <img
        src={colorWave.src}
        alt="Colorwave"
        className="flex"
      />
      <Footer />
    </div>
  )
}
