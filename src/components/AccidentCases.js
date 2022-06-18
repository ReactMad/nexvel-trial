import React from "react";
import { DynamicTabs } from "./DynamicTabs";
import { TabContent } from "./TabContent";

const AccidentCases = ({ tabList, pagetitle }) => {
  return (
    <section className="flex container flex-col justify-center mx-auto">
      <h1 className="uppercase mb-4 mx-auto">{pagetitle.title}</h1>
      <div className="flex justify-between items-center mb-14 mx-auto">
        <img
          src={pagetitle.subtitleicon.sourceUrl ?? pagetitle.subtitleicon}
          alt="Sub title"
          className="hidden md:block"
        />
        <p className="text-[20px] md:text-[30px] font-bold uppercase ml-5">
          {pagetitle.subtitle}
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

export default AccidentCases;