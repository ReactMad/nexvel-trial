import React, { useState } from "react";
import { TabTitle } from "./TabTitle";

export const DynamicTabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <ul className="flex flex-col shrink-0 justify-left md:flex-wrap md:w-[30%] bg-[#5497b0] md:p-2 md:pb-40 overflow-hidden">
        {children &&
          children.map((item, index) => (
            <>
              <TabTitle
                key={index}
                title={item.props.data.tabtitle}
                titleicon={item.props.data.titleicon}
                index={index}
                setSelectedTab={setSelectedTab}
                selectedTab={selectedTab}
              />
              <div className="block md:hidden">
                {index === selectedTab && children[selectedTab]}
              </div>
            </>
          ))}
      </ul>
      <div className="hidden md:block">{children[selectedTab]}</div>
    </>
  );
};
