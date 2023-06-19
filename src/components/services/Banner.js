import React from 'react'

const Banner = () => {
    return (
        <>
            <div className={` w-full h-[40vh]  flex flex-col items-center justify-center`} >
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-black tracking-wider leading-relaxed text-gray-800/90 dark:text-gray-200 font-unbounded '  >
                    Our Services
                </h2>
                <h3 className=' text-sm md:text-lg lg:text-2xl mt-4 text-gray-800/70 dark:text-gray-200/80 ' >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
                </h3>

            </div>
        </>
    )
}

export default Banner