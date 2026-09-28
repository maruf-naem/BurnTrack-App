"use client";

import { WorkOutContext } from "@/Context/WorkOutContext";
import { WorkOutType } from "@/Type/WorkOutType";
import { X } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface SaveTabProps {
  workOut: WorkOutType;
}

const SaveDelete = ({ workOut }: SaveTabProps) => {
  const { save, setSave } = useContext(WorkOutContext);

  const handleDeleteSaveWorkout = () => {
    const newData = save.filter((item) => {
      return item.id !== workOut.id;
    });

    setSave(newData);
    toast.warn("Deleted Successfully");
  };

  return (
    <button
      onClick={handleDeleteSaveWorkout}
      type="button"
      className="p-1 text-gray-500 transition hover:text-white"
      aria-label="Remove workout"
    >
      <X className="h-5 w-5" />
    </button>
  );
};

export default SaveDelete;
