"use client"

import { createContext, ReactNode, useState } from "react";

export const WorkOutContext = createContext({});

const WorkOutProvider = ({ children }:{children:ReactNode}) => {
  const [plan, setPlan] = useState([]);
  const [save, setSave] = useState([]);

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
