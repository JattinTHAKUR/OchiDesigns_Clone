import React from 'react';


function About() {
    return (
        <>
            <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
                <h1 className='font-["Neue_Montreal"] text-[4.5vw] leading-[4vw] tracking-tight ' >
                    Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
                </h1>
                <div className='w-full flex gap-1 border-t-[1px] border-zinc-500 mt-20 '  >
                    <div className="w-1/2">
                        <h1 className='mt-5 text-5xl' >
                            Our Approach :
                        </h1>
                        <button className='flex gap-10 items-center px-7 py-4 bg-zinc-900 mt-10 rounded-full text-white'>
                            Read More :
                            <div className="w-3 h-3 bg-zinc-100 rounded-full "></div>
                        </button>
                    </div>
                    <div className="w-1/2 h-[50vh] bg-red-500 rounded-3xl mt-10 overflow-hidden shadow-lg shadow-black-500/80">
                        <img style={{position: 'relative', top: '-47px'}} src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="MiyaBiwi" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;