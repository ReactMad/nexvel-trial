import React, { useState } from "react";
import { TabTitle } from "./TabTitle";
import { useBreakpoint } from "../hooks";

export const DynamicTabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const breakpoint = useBreakpoint();

  return (
    <>
      <ul className="flex flex-col justify-left md:flex-wrap md:w-[30%] bg-[#5497b0] md:p-2 md:pb-24">
        {children &&
          children.map((item, index) => (
            <>
              <TabTitle
                key={index}
                title={item.props.data.tabTitle}
                titleIcon={item.props.data.titleIcon}
                index={index}
                setSelectedTab={setSelectedTab}
                selectedTab={selectedTab}
              />
              {["xs", "sm"].includes(breakpoint) &&
                index === selectedTab &&
                children[selectedTab]}
            </>
          ))}
      </ul>
      {!["xs", "sm"].includes(breakpoint) && children[selectedTab]}
    </>
  );
};
