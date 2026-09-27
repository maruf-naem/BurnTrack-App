"use client";

import { WorkOutContext } from "@/Context/WorkOutContext";
import { WorkOutType } from "@/Type/WorkOutType";
import { useContext } from "react";
import { toast } from "react-toastify";

const SingleWorkOutBtn = ({ workout }: { workout: WorkOutType }) => {
  const { setSave, setPlan, plan, save } = useContext(WorkOutContext);

  const handleAddPlan = () => {
    if (plan.find((item: WorkOutType) => item.id === workout.id)) {
      toast.error("Already added");
      return;
    }
    setPlan([...plan, workout]);
    toast.success("Added to today's plan");
  };
  const handleSaveList = () => {
    if (save.find((item: WorkOutType) => item.id === workout.id)) {
      toast.error("Already saved");
      return;
    }
    setSave([...save, workout]);
     toast.success("Saved for later");;
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        className="btn border-0 bg-cyan-400 px-6 text-black hover:bg-cyan-500"
        onClick={() => {
          handleAddPlan();
        }}
      >
        Add to today&apos;s plan
      </button>

      <button
        className="btn border-white/40 bg-transparent px-6 text-white hover:border-white hover:bg-white/10"
        onClick={() => {
          handleSaveList();
        }}
      >
        ♡ Save for later
      </button>
    </div>
  );
};

export default SingleWorkOutBtn;
