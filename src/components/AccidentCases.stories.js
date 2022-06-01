import React from "react";

import { AccidentCases } from "./AccidentCases";
import { fakeList } from "./accidentCasesData";

export default {
  title: "Accident Cases Component test",
  component: AccidentCases,
};

const Template = (args) => <AccidentCases {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabList: fakeList,
};
