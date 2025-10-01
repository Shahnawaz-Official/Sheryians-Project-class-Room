import React, { useState } from 'react'
import { motion, useScroll } from "framer-motion"

function Work() {

  const [images, setImages] = useState([
     { url: "https://images.pexels.com/photos/14972530/pexels-photo-14972530.jpeg", top: "55%", left: "43%", isActive: false },
    { url: "https://images.pexels.com/photos/17792899/pexels-photo-17792899.jpeg", top: "49%", left: "53%", isActive: false },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6867e5af4ce59d080b9ebf42_branding-big.webp", top: "30%", left: "50%", isActive: false },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9.webp", top: "42%", left: "42%", isActive: false },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10.webp", top: "40%", left: "48%", isActive: false },
    { url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1.webp", top: "55%", left: "45%", isActive: false },
   
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function showhdImages(arr) {
      setImages((prev) =>
        prev.map((item, index) => ({
          ...item,
          isActive: arr.indexOf(index) !== -1,   //  indexOf check
        }))
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showhdImages([]);
        break;
      case 1:
        showhdImages([0]);
        break;
      case 3:
        showhdImages([0, 1]);
        break;
      case 4:
        showhdImages([0, 1, 2]);
        break;
      case 6:
        showhdImages([0, 1, 2, 3]);
        break;
      case 8:
        showhdImages([0, 1, 2, 3, 4]);
        break;
      case 10:
        showhdImages([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className='w-full '>
      <div className='relative max-w-screen-xl mx-auto text-center'>
        <h1 className='text-[30vw] font-normal select-none leading-none tracking-tight'>Work</h1>
        <div className='absolute w-full h-full top-0'>
          {images.map((item, index) => (
            item.isActive && (
              <img
                key={index}
                className="absolute w-40 rounded-lg"
                src={item.url}
                style={{ top: item.top, left: item.left }}
                alt="work"
              />
            )
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
