import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 my-7 lg:my-16 px-4 lg:px-12">
      <div className="flex flex-row justify-center px-4">
        <div className='border-2 border-[#7b7b7b] py-1 px-4 rounded-md font-medium text-xl'>
            Hi! I'D LIKE
        </div>
      </div>
      <div className="text-center text-8xl md:text-9xl xl:text-[10.5rem] font-extrabold">
        To TELL YOU <br /> ABOUT MYSELF
      </div>
      <div className='flex text-center justify-center sm:-m-16 sm:-z-10'>
        <img className="rounded-2xl sm:rounded-full w-full sm:w-80 h-80 object-cover" src="images/profile.jpg" alt="Louise Vigée"/>
      </div>
    </div>
  )
}

export default Hero