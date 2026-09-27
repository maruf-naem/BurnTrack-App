import React from 'react';
import HeroCard from './HeroCard';
import { WorkOutType } from "@/Type/WorkOutType";

const HeroWorkOutSection = ({workOuts}:{workOuts: WorkOutType[]}) => {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div>
                <h2>The Library</h2>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    workOuts.map((item: WorkOutType, ind: number) => {
                        return <HeroCard key={ind} workout={item} />;
                    })
                }
            </div>
        </div>
    );
};

export default HeroWorkOutSection;