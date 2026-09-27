import React from "react";

const PlanHeroText = () => {
  return (
    <div className="mx-auto w-full max-w-[1120px]">
      <div className="mb-6 sm:mb-7 lg:mb-8">
        <h1 className="text-[30px] font-extrabold uppercase leading-none tracking-[-1px] text-[#f1f1f1] sm:text-[34px] lg:text-[38px] lg:tracking-[-1.5px]">
          My Plan
        </h1>

        <p className="mt-2 text-[14px] font-medium leading-5 text-[#aeb1b8] sm:text-[15px] lg:text-[16px]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
    </div>
  );
};

export default PlanHeroText;
