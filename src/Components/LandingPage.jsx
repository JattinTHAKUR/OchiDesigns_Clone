import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";

function LandingPage() {
    return (
        <div className='data-scroll data-scroll-section data-scroll-speed=".3" w-full min-h-screen bg-zinc-900 pt-1'>
            <div className="text-structure mt-12 sm:mt-24 md:mt-32 px-4 sm:px-8 md:px-20">
                {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className="masker" key={index}>
                            <div className="w-fit flex flex-col sm:flex-row items-center overflow-hidden">
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "9vw" }}
                                        transition={{
                                            ease: [0.6, -0.05, 0.01, 0.99],
                                            duration: 2.5
                                        }}
                                        className="mr-[0.5vw] sm:mr-4 w-full sm:w-auto bg-cover bg-center rounded-md sm:h-[15vw] md:h-[10vw] lg:h-[5vw] relative -top-[0.4]"
                                        style={{ backgroundImage: `url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')` }}
                                    ></motion.div>
                                )}
                                <h1 className="uppercase text-[7vw] sm:text-6xl md:text-7xl lg:text-[5vw] leading-[6vw] tracking-tighter font-['Founders Grotesk X-Condensed'] font-bold">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="border-t-[2px] mt-12 sm:mt-20 md:mt-32 flex flex-col sm:flex-row justify-between items-center py-5 px-4 sm:px-8 md:px-20">
                {["For public and Private Companies", "From the first pitch to IPO"].map((item, index) => {
                    return (
                        <p key={index} className="text-sm sm:text-md font-light tracking-tight leading-none mt-2 sm:mt-0">{item}</p>
                    )
                })}
                <div className="start flex gap-3 sm:gap-5 items-center mt-4 sm:mt-0">
                    <div className="px-3 sm:px-5 py-2 border-[1px] border-zinc-500 rounded-full uppercase font-light text-sm sm:text-md">
                        start the project
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center ">
                        <span className="rotate-[45deg]">
                            <FaLongArrowAltUp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
