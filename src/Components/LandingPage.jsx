import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";
import { motion } from "framer-motion";




function LandingPage() {
    return (
        <div className=' data-scroll data-scroll-section data-scroll-speed=".3" w-full h-screen bg-zinc-900 pt-1'>
            <div className="text-structure mt-52 px-20">
                {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                    return (
                        <div className="masker" key={index}>
                            <div className="w-fit flex items-center overflow-hidden">
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "9vw" }}
                                        transition={{
                                            ease: [0.6, -0.05, 0.01, 0.99],
                                            duration: 2.5
                                        }}
                                        className="mr-[0.5vw] w-[9vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] rounded-md h-[5vw] relative -top-[0.4]"
                                    ></motion.div>
                                )}
                                <h1 className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-['Founders Grotesk X-Condensed'] font-bold">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );

                })}
            </div>


            <div className="border-t-[2px] mt-32 flex justify-between items-center py-5 px-20">
                {["For public and Private Companies", "From the first pitch to IPO"].map((item) => {
                    return (
                        <p className='text-md font-light tracking-tight leading-none' >{item}</p>
                    )
                })}
                <div className="start flex gap-5 items-center">
                    <div className="px-5 py-2 border-[1px] border-zinc-500 rounded-full uppercase font-light text-md  ">
                        start the project
                    </div>
                    <div className="w-10 h-10 rounded-full border-[1px] border-zinc-500 flex items-center justify-center ">
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
