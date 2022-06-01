import React from "react";
import { DynamicTabs } from "./DynamicTabs";
import { TabContent } from "./TabContent";
import HandBagSVG from "./../assets/icons/handbag.svg";

export const AccidentCases = ({tabList}) => {
  return (
    <section className="flex flex-col justify-center">
      <h1 className="uppercase mb-4 mx-auto">Cases</h1>
      <div className="flex justify-between items-center mb-14 mx-auto">
        <img src={HandBagSVG} alt="Sub title" className="hidden md:block" />
        <p className="text-[20px] md:text-[30px] font-bold uppercase ml-5">
          That we handle
        </p>
      </div>
      <div className="w-full md:w-5/6 mx-auto flex flex-col md:flex-row">
        <DynamicTabs>
          {tabList.map((item, index) => (
            <TabContent data={item} key={index} />
          ))}
        </DynamicTabs>
      </div>
    </section>
  );
};
