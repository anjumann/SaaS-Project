import Image from "next/image"
import heroImage from '@/assets/heroImage.svg'



const Hero = () => {

  return (
    <>
      <div className="grid grid-row-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 h-[60vh] md:h-[70vh]  ">
        <div className={`bg-[url('/herobg2.svg')]   bg-contain bg-no-repeat 
           h-full w-full flex  text-center  items-center justify-center `}>
          <div className="h-fit w-full md:w-[75%] font-unbounded text-4xl md:text-5xl text-bright-grey font-bold p-2 pt-10 md:p-10 md:rounded-3xl lg:glassEffect lg:glassEffectBorder">
            Committed To People <br />
            Committed To <span className="text-primary-purple" >The Future</span>
            <div className="text-lg font-light mt-8 text-gray-900/80 ">Lorem ipsum Lorem ipsum dolor sit  dolor sit aon.</div>
          </div>
        </div>
        <div className={` bg-[url('/herobg.svg')]  bg-cover bg-no-repeat hidden lg:flex justify-center items-center   `} >

          <Image height={1000} width={1000} src={heroImage} alt="hero" />
          {/* <iframe src='https://my.spline.design/3dpathsfactoryletterscopy-70deb60d8b53f451ba1f05f7b2374b0e/' frameborder='0' width='100%' height='100%'></iframe> */}

        </div>

      </div>
    </>
  )
}

export default Hero