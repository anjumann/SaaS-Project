import Image from "next/image"
import heroImage from '@/assets/heroImage.svg'



const Hero = () => {

  return (
    <>
      <div className="grid grid-row-2 grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 h-[60vh] md:h-[70vh]  ">
        <div className={`bg-[url('/herobg2.svg')]   bg-contain bg-no-repeat 
           h-full w-full flex  text-center lg:text-left  items-center justify-center `}>
          <div className="h-fit w-[95%] md:w-[90%] lg:w-[75%] font-unbounded text-4xl md:text-5xl text-bright-grey dark:text-gray-200 font-bold p-2 pt-10 md:p-10 rounded-2xl md:rounded-3xl  glassEffect dark:bg-gray-800/60 ">
            Committed To People <br />
            Committed To <span className="text-primary-purple dark:text-[#e16f6f] " >The Future</span>
            <div className="text-lg font-light mt-8 text-gray-900/80 dark:text-gray-200/90">Lorem ipsum Lorem ipsum dolor sit  dolor sit aon.</div>
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