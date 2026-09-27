"use client";

import { WorkOutType } from "@/Type/WorkOutType";
import { createContext, ReactNode, useState } from "react";

type WorkOutContextType = {
  plan: WorkOutType[];
  setPlan: React.Dispatch<React.SetStateAction<WorkOutType[]>>;
  save: WorkOutType[];
  setSave: React.Dispatch<React.SetStateAction<WorkOutType[]>>;
};
export const WorkOutContext = createContext<WorkOutContextType>({
  plan: [],
  setPlan: () => {},
  save: [],
  setSave: () => {},
});

const WorkOutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<WorkOutType[]>([]);
  const [save, setSave] = useState<WorkOutType[]>([]);

  const sharedState = {
    plan,
    setPlan,
    save,
    setSave,
  };

  return (
    <WorkOutContext.Provider value={sharedState}>
      {children}
    </WorkOutContext.Provider>
  );
};

export default WorkOutProvider;
