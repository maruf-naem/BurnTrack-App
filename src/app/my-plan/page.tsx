

"use client";

import MyPlan from "@/Components/PlanPageComponents/MyPlan";
import MySave from "@/Components/PlanPageComponents/MySave";
import PlanHeroText from "@/Components/PlanPageComponents/PlanHeroText";
import Tabs from "@/Components/PlanPageComponents/Tabs";
import { useState } from "react";

const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState("plan");

  return (
    <main className="min-h-screen bg-[#0F1115]">
      <div className="w-full py-6 sm:py-8 lg:py-10">
        <PlanHeroText />

        <div className="mt-6 sm:mt-8 lg:mt-10">
          {activeTab === "plan" ? <MyPlan /> : <MySave />}
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-10">
          <Tabs setActiveTab={setActiveTab} />
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;