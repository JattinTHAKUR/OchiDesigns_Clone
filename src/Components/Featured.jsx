import { motion, useAnimation } from 'framer-motion';
import { Power3 } from "gsap/all";
import React, { useState } from 'react'

function Featured() {

  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-14 rounded-tl-3xl rounded-tr-3xl">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-[8vw] font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-10">
        <div className="cards grid grid-cols-2 gap-10 mt-10">
          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative h-[70vh]"
          >
            <div className="card-1 w-full h-full rounded-xl">
              <li className="text-2xl mb-1">FYDE</li>
              <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-8xl ">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                    className=" inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full object-"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container relative h-[70vh]"
          >
            <div className="card-1 w-full h-full rounded-xl">
              <li className="text-2xl mb-1">VISE</li>
              <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-full text-8xl ">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                    className=" inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x550.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
        <div className="cards grid grid-cols-2 gap-10 mt-10">
          {/* Card 3 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="card-container relative h-[70vh]"
          >
            <div className="card-1 w-full h-full rounded-xl">
              <li className="text-2xl mb-1">BEAN</li>
              <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-0 text-8xl ">
                {"BEAN".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                    className=" inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="card-container relative h-[70vh]"
          >
            <div className="card-1 w-full h-full rounded-xl">
              <li className="text-2xl mb-1">OFFICE</li>
              <h1 className="absolute text-[#CDEA68] flex overflow-hidden z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tighter right-full text-8xl ">
                {"OFFICE".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                    className=" inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-663x550.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured;
