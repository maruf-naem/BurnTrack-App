"use client";

import { WorkOutContext } from "@/Context/WorkOutContext";
import { WorkOutType } from "@/Type/WorkOutType";
import { X } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface PlanTabProps {
  workOut: WorkOutType;
}

const PlanDelete = ({ workOut }: PlanTabProps) => {
  const { plan, setPlan } = useContext(WorkOutContext);

  const handleDeletePLanWorkout = () => {
    const newData = plan.filter((item) => {
      return item.id !== workOut.id;
    });
    console.log(newData);
    
    setPlan([...newData]);
    toast.warn("Deleted Successfully");
  };

  return (
    <button
      onClick={handleDeletePLanWorkout}
      type="button"
      className="p-1 text-gray-500 transition hover:text-white"
      aria-label="Remove workout"
    >
      <X className="h-5 w-5" />
    </button>
  );
};

export default PlanDelete;
