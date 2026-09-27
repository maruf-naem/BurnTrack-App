"use client";
import MyPlan from "@/Components/PlanPageComponents/MyPlan";
import MySave from "@/Components/PlanPageComponents/MySave";
import PlanHeroText from "@/Components/PlanPageComponents/PlanHeroText";
import Tabs from "@/Components/PlanPageComponents/Tabs";


import { useState } from "react";
const MyPlanPage = () => {

  const [activeTab, setActiveTab] = useState('plan');
  return (
    <div>
      <PlanHeroText />
      {activeTab === 'plan' ? <MyPlan/> : <MySave />}
      <Tabs setActiveTab={setActiveTab} />
    </div>
  );
};

export default MyPlanPage;
