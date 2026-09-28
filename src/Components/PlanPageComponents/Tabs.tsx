"use client";

import { WorkOutContext } from "@/Context/WorkOutContext";
import { useContext } from "react";
import PlanTab from "./TabsComponents/PlanTab";
import SaveTab from "./TabsComponents/SaveTab";
import Link from "next/link";


type TabType = "plan" | "save";

interface TabsProps {
  setActiveTab: (value: TabType) => void;
}

const Tabs = ({ setActiveTab }: TabsProps) => {
  const { plan, save } = useContext(WorkOutContext);

  const handlePlanTab = (value: TabType) => {
    setActiveTab(value);
  };

  return (
    <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-0">
      <div className="tabs tabs-lift w-full">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Plan"
          defaultChecked
          value="plan"
          onClick={() => handlePlanTab("plan")}
        />

        <div className="tab-content w-full border-base-300 bg-[#00D3F2] p-3 sm:p-4 lg:p-6">
          <div className="flex flex-col gap-4">
            {plan.length > 0 ? (
              plan.map((item) => <PlanTab key={item.id} workOut={item} />)
            ) : (
              <div className="rounded-2xl border border-dashed border-base-300 bg-base-200 p-10 text-center">
                <p className="text-lg font-heading">Nothing here yet</p>

                <p className="mt-2 text-base-content/70">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link className="btn bg-[#00D3F2] mt-6 rounded-2xl" href="/">
                  Go to workouts
                </Link>
              </div>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Save"
          value="save"
          onClick={() => handlePlanTab("save")}
        />

        <div className="tab-content w-full border-base-300 bg-[#00D3F2] p-3 sm:p-4 lg:p-6">
          <div className="flex flex-col gap-4">
            {save.length > 0 ? (
              save.map((item) => <SaveTab key={item.id} workOut={item} />)
            ) : (
              <div className="rounded-2xl border border-dashed border-base-300 bg-base-200 p-10 text-center">
                <p className="text-lg font-heading">Nothing here yet</p>

                <p className="mt-2 text-base-content/70">
                  Browse the library and add a lift to get today moving.
                </p>

                <Link className="btn bg-[#00D3F2] mt-6 rounded-2xl" href="/">
                  Go to workouts
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
