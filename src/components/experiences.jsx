import React from 'react'

const Experiences = () => {
    const selectedArts = [
        {
            id: 1,
            title: 'Genre Painting',
            category: 'Artists',
            year: '1782',

            background:'#ff6a69',
            text:'#ebebeb',
            border: '3px solid #ff6a69', 
            rotate:'rotate(7deg)'
        },
        {
            id: 2,
            title: 'Neoclas Sicism',
            category:'Artists',
            year: '1782',   

            background:'#ebebeb',
            text:'black',
            border: '3px solid black', 
            rotate:'rotate(-7deg)'
        },
        {
            id: 3,
            title: 'Portra Iture',
            category:'Artists',
            year: '1782',   

            background:'#ff6a69',
            text:'#ebebeb',
            border: '3px solid #ff6a69', 
            rotate:'rotate(7deg)'
        },
        {
            id: 3,
            title: 'Natur Alism',
            category:'Artists',
            year: '1782',   

            background:'#ebebeb',
            text:'black',
            border: '3px solid black', 
            rotate:'rotate(-7deg)'
        }
      ];
  return (
    <section id='arts'>
        <div className='min-h-screen gap-4 my-16 lg:my-32 px-8 lg:px-20'>
            <div className='flex'>
                <h2 className='font-bold text-5xl lg:text-7xl uppercase'>Experiences</h2>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-1 lg:gap-12 mt-14 lg:mt-20'>
            {selectedArts.map((art) => (
            <article
              key={art.id}
              style={{
                background: art.background,
                color: art.text,
                border: art.border,
                transform: art.rotate
              }}
              className="flex flex-col justify-center w-full h-full md:h-96 md:w-80 px-6 lg:px-8 lg:py-11 py-8 rounded-2xl"
            >
              <div className='flex flex-col gap-2'>
                <span className='text-xl xl:text-2xl font-medium'>Work</span>
                <span className='text-5xl xl:text-6xl font-bold uppercase leading-none mb-28'>{art.title}</span>
                  <div className='text-xl xl:text-2xl font-medium'>
                    {art.year}
                  </div>
              </div>
            </article>
          ))}
            </div>
            <div className='flex justify-center mt-10 lg:mt-20'>
                <a href='/all-experien' className='border-2 border-black py-2 px-20 lg:px-36 rounded-full font-medium text-xl lg:text-2xl'>See More Arts</a>
            </div>
        </div>
    </section>
  )
}

export default Experiences