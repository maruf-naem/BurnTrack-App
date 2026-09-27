"use client";

import { SaveContext } from "@/Context/PlanPageContext/SaveCountContext";
import { useContext } from "react";

export default function MySave() {
  const { exercises, min, calories } = useContext(SaveContext);

  return (
    <section className="min-h-screen bg-[#0d0f12] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1120px]">

        <div className="overflow-hidden rounded-[14px] border border-[#292d33] bg-[#191c22] sm:rounded-[16px]">
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="border-b border-[#30343a] px-5 py-4 sm:border-b-0 sm:border-r sm:px-6 sm:py-5">
              <p className="text-[12px] font-medium leading-5 text-[#9297a1] sm:text-[13px]">
                Exercises
              </p>

              <p className="mt-1 text-[30px] font-bold leading-none text-[#b6ff00] sm:text-[32px] lg:text-[34px]">
                {exercises}
              </p>
            </div>
            <div className="px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[12px] font-medium leading-5 text-[#9297a1] sm:text-[13px]">
                Minutes
              </p>

              <p className="mt-1 text-[30px] font-bold leading-none text-[#f1f1f1] sm:text-[32px] lg:text-[34px]">
                {min}
              </p>
            </div>
            <div className="px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[12px] font-medium leading-5 text-[#9297a1] sm:text-[13px]">
                Calories
              </p>

              <p className="mt-1 text-[30px] font-bold leading-none text-[#f1f1f1] sm:text-[32px] lg:text-[34px]">
                {calories}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
