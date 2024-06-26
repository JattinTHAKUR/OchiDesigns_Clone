import React from 'react';

function About() {
    return (
        <div className='w-full p-8 md:p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-["Neue_Montreal"] text-xl md:text-4xl leading-normal md:leading-[4vw] tracking-tight'>
                Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>
            <div className='flex flex-col md:flex-row gap-1 md:gap-8 border-t-[1px] border-zinc-500 mt-8 md:mt-20'>
                <div className="md:w-1/2">
                    <h1 className='mt-5 text-2xl md:text-5xl'>Our Approach:</h1>
                    <button className='flex items-center px-4 md:px-7 py-2 md:py-4 bg-zinc-900 mt-4 md:mt-10 rounded-full text-white'>
                        Read More
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-zinc-100 rounded-full ml-2"></div>
                    </button>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-5">
                    <div className="h-64 md:h-[50vh] bg-red-500 rounded-3xl overflow-hidden shadow-lg shadow-black-500/80">
                        <img className="object-cover object-center h-full w-full" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="MiyaBiwi" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
