import React, { useEffect, useState } from "react";

export const TabContent = ({ data }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    });
  }, []);

  return (
    <div className="bg-[#3C4148] text-white w-full h-full py-10 md:py-14 px-5 md:px-20 text-xl overflow-hidden md:overflow-visible">
      <p className="text-[34px] md:text-[41px] pb-2 md:pb-5 md:px-16 mb-6 md:border-b-[5px] border-[#676B70] md:w-max mx-auto">
        {data.tabtitle}
      </p>
      <p className="uppercase font-bold text-xs md:text-xl">{data.subtitle}</p>
      <div className="md:flex mt-11 md:mt-20">
        <div className="relative md:basis-1/3 w-[40vw] h-[60vw] md:w-auto md:h-auto float-right md:float-none md:order-2">
          <img
            src={data.imgsrc.sourceUrl ?? data.imgsrc}
            alt="Accident example"
            className={`max-w-none w-[60vw] md:w-[20vw] h-[60vw] md:h-[20vw] absolute left-3 -top-3 md:-top-10 object-contain
             transition-all ${!mounted ? "md:left-96" : "md:left-20"}`}
          />
        </div>
        <p className="md:basis-2/3 text-left leading-normal text-[17px] md:text-xl md:order-1">
          {data.content}
        </p>
      </div>
      <div className="mt-11 md:mt-20 mx-auto flex gap-3 w-full md:w-1/2 text-[13px] md:text-xl">
        <button className="basis-1/2 rounded-full border-2 border-white flex justify-center items-center py-2 md:py-4">
          {data.firstcta.title}
        </button>
        <button className="basis-1/2 rounded-full flex justify-center items-center bg-[#CE2424] py-2 md:py-4">
          {data.secondcta.title}
        </button>
      </div>
    </div>
  );
};
