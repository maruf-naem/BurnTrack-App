"use client";

import { WorkOutContext } from "@/Context/WorkOutContext";
import { useContext } from "react";
import PlanTab from "./TabsComponents/PlanTab";
import SaveTab from "./TabsComponents/SaveTab";

const Tabs = ({ setActiveTab }) => {
  const { plan, save } = useContext(WorkOutContext);
  const handlePlanTab = (value: string) => {
    setActiveTab(value);
  };
  return (
    <div className="tabs tabs-lift">
      <input
        type="radio"
        name="my_tabs_3"
        className="tab"
        aria-label="Plan"
        defaultChecked
        value="plan"
        onClick={() => handlePlanTab("plan")}
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {plan.map((item, ind) => {
          return <PlanTab key={ind}/>
        })}
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab"
        aria-label="Save"
        value="save"
        onClick={() => handlePlanTab("save")}
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {save.map((item, ind) => {
           return <SaveTab key={ind} />;
        })}
      </div>
    </div>
  );
};

export default Tabs;
