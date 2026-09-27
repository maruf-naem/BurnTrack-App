"use client";

import { createContext, ReactNode, useContext } from "react";
import { WorkOutContext } from "../WorkOutContext";

interface PlanContextType {
  exercises: number;
  min: number;
  calories: number;
};

export const PlanContext = createContext<PlanContextType>({
  exercises: 0,
  min: 0,
  calories: 0,
});


const PlanCountProvider = ({ children }: { children: ReactNode }) => {
  const { plan } = useContext(WorkOutContext);

  const exercises = plan.length;
  const min = plan.reduce((total, item) => {
    return total + item.duration;
  }, 0);
  const calories = plan.reduce((total, item) => {
    return total + item.caloriesBurned;
  }, 0);

  const planState = {
    exercises,
    min,
    calories,
  };

  return (
    <PlanContext.Provider value={planState}>{children}</PlanContext.Provider>
  );
};

export default PlanCountProvider;
