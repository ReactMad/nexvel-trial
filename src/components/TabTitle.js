import React, { useCallback } from "react";

export const TabTitle = ({
  title,
  titleicon,
  setSelectedTab,
  index,
  selectedTab,
}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);
  return (
    <li className="flex flex-col">
      <button
        className={`relative uppercase pt-10 pb-6 text-white font-bold pl-28 pr-4 w-full text-center md:text-left text-xl md:text-[22px]
        ${
          selectedTab === index
            ? "active before:absolute before:top-0 before:right-0 before:w-full before:h-full before:opacity-20 before:bg-[#22282f]"
            : ""
        }
        `}
        onClick={onClick}
        onMouseEnter={onClick}
      >
        <img
          src={titleicon.sourceUrl ?? titleicon}
          alt={title}
          className="absolute left-16 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="flex justify-between gap-10">
          {title}
          <button
            className={`md:hidden w-9 h-9 border-2 rounded-full relative shrink-0
        after:content-[' '] after:absolute after:bg-white after:h-[2px] after:-mt-[1px] after:top-1/2 after:left-2 after:right-2 after:z-10 
        ${
          selectedTab === index
            ? "bg-white/20"
            : "before:content-[' '] before:absolute before:bg-white before:w-[2px] before:-ml-[1px] before:left-1/2 before:top-2 before:bottom-2 before:z-10"
        }
        `}
          ></button>
        </div>
      </button>
      <div className="md:mx-10 border-b border border-white" />
    </li>
  );
};
