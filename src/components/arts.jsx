import React from 'react'

const Arts = () => {
    const selectedArts = [
        {
          id: 1,
          title: 'Marie Antoinette',
          category: 'CATEGORY',
          year: '1782',
          imageUrl: 'images/profile.jpg',
        },
        {
            id: 2,
            title: 'Self-Portrait',
            category: 'CATEGORY',
            year: '1780',
            imageUrl: 'images/art1.jpg',
          },
        
      ];
  return (
    <section id='arts'>
        <div className='min-h-screen gap-4 my-16 lg:my-32 px-4 lg:px-28'>
            <div className='flex'>
                <p className='font-bold text-5xl lg:text-7xl uppercase'>Selected Arts</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-24 mt-8 lg:mt-20'>
            {selectedArts.map((art) => (
            <div
              key={art.id}
              className='flex flex-col justify-center w-full md:w-1/2 bg-[#ff6a69] lg:px-12 px-8 lg:py-11 py-8 rounded-2xl'
            >
              <img
                className='rounded-2xl h-72 xl:h-96 w-full object-cover'
                src={art.imageUrl}
                alt='profile'
              />
              <div className='flex flex-col gap-3 -mt-7'>
                <span className='text-4xl xl:text-5xl font-semibold text-[#ebebeb]'>{art.title}</span>
                <div className='flex flex-row gap-3'>
                  <div className='border-2 border-[#ebebeb] py-1 px-4 rounded-full font-medium text-[#ebebeb] text-lg xl:text-xl'>
                    {art.category}
                  </div>
                  <div className='border-2 border-[#ebebeb] py-1 px-4 rounded-full font-medium text-[#ebebeb] text-lg xl:text-xl'>
                    {art.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
            </div>
        </div>
    </section>
  )
}

export default Arts