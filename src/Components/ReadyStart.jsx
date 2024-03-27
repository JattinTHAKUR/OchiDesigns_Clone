import React, { useState, useEffect } from 'react';
import './ReadyButtons.css';

function ReadyStart() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className=''>
            <div
                data-scroll
                data-scroll-section
                data-scroll-speed=".6"
                className=" bg-[#cdea68] py-12 md:py-16 lg:py-28 text-black font-['Founders Grotesk_X-Condensed'] font-bold rounded-t-3xl">
                <div className="container mx-auto">
                    <div className="eyes" style={{ marginTop: '-2rem', height: '35vw' }}>
                        <div className='Eye w-full h-screen overflow-hidden' style={{ position: 'relative' }}>
                            <div className="w-full h-full">
                                <div className="absolute flex gap-10 top-1/4 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
                                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
                                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 ">
                                                <div className=" w-6 h-6 rounded-full bg-zinc-100 "></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
                                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
                                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 ">
                                                <div className=" w-6 h-6 rounded-full bg-zinc-100 "></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-6xl font-bold uppercase mb-8 items-center justify-center text-center mt-4">
                        <span className="block">Ready</span>
                        <span className="block">to start</span>
                        <span className="block">the project?</span>
                    </h1>


                    <div className="grid gap-8 sm:gap-12 lg:gap-16 justify-center items-center text-center mt-4">
                        <a className="btn btn-14 rounded-full py-1" href="http://ochi.design/contact/">
                            <span>Start the project</span>
                            <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                        </a>
                        <span>OR</span>
                        <a className="btn btn-14 rounded-full px-4 py-1" href="mailto:hello@ochi.design">
                            <span>hello@ochi.design</span>
                            <i className="btn__icon btn__icon--append icon-arrow-right-up"></i>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadyStart;
