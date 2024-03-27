import React, { useEffect, useState } from 'react'

function OchiEye() {

    const [rotate, Setrotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            // jaha bhi mouse move hoga uske X aur Y direction ke coordinates mil jayenge
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            // ye hai difference between mouse coordinates and screen se mouse ka difference

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            Setrotate(angle-180);
        })
    })

    return (
        <div className="eyes w-full h-screen overflow-hidden">
        <div
          data-scroll
          data-scroll-speed="-.7"
          className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
        >
          <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   ">
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
              <div className="relative  w-2/3 h-2/3  rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-6"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
              <div className="relative w-2/3 h-2/3 flex justify-center items-center rounded-full bg-zinc-900">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-6"
                >
                  <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default OchiEye;


// yaha pe todhe se nogtes banaye jayenge

/*   steps to create this animation :
   1. hume screen ka center point le lena hai; kaise?

   => center = (w/2,h/2) || poori screen ki width ka aadha aur height ka aadha hume screen ke center point pe le ayega!

   2. Ab jaha bhi cursor hoga kisi bhi point pe hum uss jagah ki width/2 aur height/2 karke calculate kar lenge 

   3. Jo bhi cursor ke coordinates honge uska hum difference calculate kar lenge center se subtract karke!

   4. ANIMATION WILL PERFORM BY MANUPILATING THE ANGLE OF DIV NAMED "line" 
   FORMULA  TO CALCULATE ANGLE IS: 
   angle = atan2(difference_y / difference_x) * (180 / Math.PI);

   5. after that we will use useState hook to change the state means value of the angle and inject it using javscript in inline CSS!

   6. and VOILA its done........

*/