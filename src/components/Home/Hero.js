import Image from "next/image"
import heroImage from '@/assets/heroImage.svg'



const Hero = () => {

  return (
    <>
      <div className="grid grid-row-1 grid-cols-2 md:grid-cols-2 md:grid-rows-1 h-[70vh]  ">
        <div className={`bg-[url('/herobg2.svg')]   bg-contain bg-no-repeat 
           h-full w-full flex items-center justify-center `}>
          <div className="h-fit w-[75%] font-unbounded text-5xl text-bright-grey font-bold p-10 rounded-2xl glassEffect">
            Committed To People <br />
            Committed To <span className="text-primary-purple" >The Future</span>
            <div className="text-lg font-light mt-8 text-gray-900/75 ">Lorem ipsum Lorem ipsum dolor sit  dolor sit aon.</div>
          </div>
        </div>
        <div className={`bg-[url('/herobg.svg')]  bg-cover bg-no-repeat flex justify-center items-center `} >

          <Image height={1000} width={1000} src={heroImage} alt="hero" />

        </div>

      </div>
    </>
  )
}

export default Hero