"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star} from "lucide-react";
import { WorkOutType } from "@/Type/WorkOutType";
import SaveDelete from "./DeleteBtn/SaveDelete";

interface SaveTabProps {
  workOut: WorkOutType;
}

const SaveTab = ({ workOut }: SaveTabProps) => {
  return (
    <div className="w-full rounded-2xl border border-[#292d36] bg-[#15181e] p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="h-[80px] w-full shrink-0 overflow-hidden rounded-xl md:w-[140px]">
          <Image
            src={workOut.image}
            alt={workOut.name}
            width={140}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-bold uppercase tracking-wide text-white">
            {workOut.name}
          </h3>

          <p className="mt-0.5 text-sm text-gray-400">{workOut.equipment}</p>

          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-300">
            <div className="flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5 text-lime-400" />
              <span>{workOut.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5 fill-lime-400 text-lime-400" />
              <span>{workOut.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-lime-400" />
              <span>{workOut.rating}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:shrink-0">
          <Link
            href={`/${workOut.id}`}
            className="rounded-full border border-[#38404c] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#20242c]"
          >
            View Details
          </Link>
          <SaveDelete workOut = {workOut}/>
        </div>
      </div>
    </div>
  );
};

export default SaveTab;
