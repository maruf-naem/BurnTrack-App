"use client";

import { PlanContext } from "@/Context/PlanPageContext/PlanCountContext";
import { useContext } from "react";

export default function MyPlan() {
  const { exercises, min, calories } = useContext(PlanContext);

  return (
    <section className="min-h-screen bg-[#0d0f12] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="mb-6 sm:mb-7 lg:mb-8">
          <h1 className="text-[30px] font-extrabold uppercase leading-none tracking-[-1px] text-[#f1f1f1] sm:text-[34px] lg:text-[38px] lg:tracking-[-1.5px]">
            My Plan
          </h1>

          <p className="mt-2 text-[14px] font-medium leading-5 text-[#aeb1b8] sm:text-[15px] lg:text-[16px]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

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
