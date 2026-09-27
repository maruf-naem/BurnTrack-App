"use client";

import { createContext, ReactNode, useContext } from "react";
import { WorkOutContext } from "../WorkOutContext";

interface SaveContextType {
  exercises: number;
  min: number;
  calories: number;
};

export const SaveContext = createContext<SaveContextType>({
  exercises: 0,
  min: 0,
  calories: 0,
});


const SaveCountProvider = ({ children }: { children: ReactNode }) => {
  const { save } = useContext(WorkOutContext);

  const exercises = save.length;
  const min = save.reduce((total, item) => {
    return total + item.duration;
  }, 0);
  const calories = save.reduce((total, item) => {
    return total + item.caloriesBurned;
  }, 0);

  const SaveState = {
    exercises,
    min,
    calories,
  };

  return (
    <SaveContext.Provider value={SaveState}>{children}</SaveContext.Provider>
  );
};

export default SaveCountProvider;
