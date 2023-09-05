import React from 'react'

const Arts = () => {
    const selectedArts = [
        {
          id: 1,
          title: 'Marie-Antoinet',
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
        {
          id: 3,
          title: 'Peace-Bringing',
          category: 'CATEGORY',
          year: '1780',
          imageUrl: 'images/art2.jpg',
        },
        
      ];
  return (
    <section id='arts'>
        <div className='min-h-screen gap-4 my-16 lg:my-32 px-4 lg:px-20'>
            <div className='flex'>
                <h2 className='font-bold text-5xl lg:text-7xl uppercase'>Selected Arts</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 mt-8 lg:mt-20'>
            {selectedArts.map((art) => (
            <article
              key={art.id}
              className='flex flex-col justify-center w-full lg:w-1/3 bg-[#ff6a69]  lg:px-12 px-8 lg:py-11 py-8 rounded-2xl'
            >
              <img
                className='rounded-2xl h-72 xl:h-96 w-full object-cover'
                src={art.imageUrl}
                alt={art.title}
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
            </article>
          ))}
            </div>
            <div className='flex justify-center mt-10 lg:mt-20'>
                <a href='/all-arts' className='border-2 border-black py-2 px-20 lg:px-36 rounded-full font-medium text-xl lg:text-2xl'>See More Arts</a>
            </div>
        </div>
    </section>
  )
}

export default Arts