import React from 'react';

// Mobile responsive version
const BehanceCardsMobile = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".5"
      className="w-full min-h-screen flex flex-col items-center justify-center px-5 bg-zinc-900"
    >
      <div className="cardcontainer flex flex-col gap-5 w-full max-w-screen-lg">
        {/* Card 1 */}
        <div className='card relative rounded-xl w-full h-80 sm:h-[30vw] flex items-center justify-center bg-[#004d43]'>
          <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute px-5 py-1 border-[1px] border-[#cdea68] text-[#cccc2f] left-5 bottom-5 rounded-full' >&copy; 2019-2022</button>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="card relative w-full sm:w-1/2 h-80 sm:h-[30vw] flex items-center justify-center bg-[#212121] rounded-2xl">
            <img className='scale' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" srcset="" />
            <button className='absolute px-5 py-1 border-[1px] border-[#ffffff] text-[#ffffff] left-5 bottom-5 rounded-full' >RATING 5.0 ON CLUTCH</button>
          </div>
          <div className="card relative w-full sm:w-1/2 h-80 sm:h-[30vw] flex items-center justify-center bg-[#212121] rounded-2xl">
            <img className='scale-75' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-5 py-1 border-[1px] border-[#ffffff] text-[#ffffff] left-5 bottom-5 rounded-full' >BUSINESS BOOTCAMP ALUMINI</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Desktop version
const BehanceCardsDesktop = () => {
  return (
    <div 
      data-scroll
      data-scroll-section
      data-scroll-speed=".3"
      className="w-full h-screen flex gap-5 items-center px-32 bg-zinc-900">

      <div className="cardcontainer flex gap-5 w-full h-[30vw] ">
        <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004d43]'>
          <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute px-5 py-1 border-[1px] border-[#cdea68] text-[#cccc2f] left-5 bottom-5 rounded-full' >&copy; 2019-2022</button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-full h-[30vw] ">
        <div className="card relative w-1/2 h-full flex items-center  justify-center bg-[#212121] rounded-2xl">
          <img className='scale' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" srcset="" />
          <button className='absolute px-5 py-1 border-[1px] border-[#ffffff] text-[#ffffff] left-5 bottom-5 rounded-full' >RATING 5.0 ON CLUTCH</button>
        </div>
        <div className="card relative w-1/2 h-full flex items-center justify-center bg-[#212121] rounded-2xl">
          <img className='scale-75' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
          <button className='absolute px-5 py-1 border-[1px] border-[#ffffff] text-[#ffffff] left-5 bottom-5 rounded-full' >BUSINESS BOOTCAMP ALUMINI</button>
        </div>
      </div>

    </div>
  );
}

// Main BehanceCards component
const BehanceCards = () => {
  // Determine whether to render mobile or desktop version based on screen width
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {isMobile ? <BehanceCardsMobile /> : <BehanceCardsDesktop />}
    </>
  );
}

export default BehanceCards;
