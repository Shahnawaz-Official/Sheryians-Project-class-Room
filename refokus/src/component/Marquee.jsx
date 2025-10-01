import React from "react";

function Marquee({ imagesurl }) {
  return (
    <div className=" w-full overflow-hidden  py-1 ">
      <div className="flex  gap-5">
        {imagesurl.map((url, index) => (
          <div key={index} className="flex-1 flex justify-center">
            <img
              src={url}
              alt="logo"
              className="h-16 w-full min-w-[200px] object-contain bg-white rounded p-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
