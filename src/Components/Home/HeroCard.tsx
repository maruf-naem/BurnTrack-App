import { WorkOutType } from '@/Type/WorkOutType';
import Image from 'next/image';
import Link from 'next/link';


const HeroCard = ({workout}:{workout:WorkOutType}) => {
    return(
        <Link
            href={`/${workout.id}`}
            className="card overflow-hidden rounded-2xl border border-base-300 bg-base-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
            <figure className="relative h-48 w-full overflow-hidden">
                <Image
                    src={workout.image}
                    alt={`${workout.name} demonstration`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                />
            </figure>

            <div className="card-body gap-3 p-5 bg-[#1A1D23] ">
                <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="badge text-black bg-cyan-400 badge-sm"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                <h2 className="card-title text-xl normal-case tracking-tight text-white">
                    {workout.name}
                </h2>

                <p className="text-sm text-base-content/70 text-white">
                    {workout.equipment}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="inline-flex items-center gap-1 text-white">
                        <span className="text-cyan-400 text-[20px]">◷</span>
                        {workout.duration} min
                    </span>

                    <span className="inline-flex items-center gap-1 text-white">
                        <span className="text-cyan-400 text-[20px]">🔥</span>
                        {workout.caloriesBurned} kcal
                    </span>

                    <span className="inline-flex items-center gap-1 text-white">
                        <span className="text-cyan-400 text-2xl">★</span>
                        {workout.rating}
                    </span>
                </div>

                <div className="flex items-center justify-between border-t border-base-300 pt-3">
                    <span className="text-xs text-base-content/60">
                        {workout.difficulty}
                    </span>

                    <span className="text-xs text-base-content/60">
                        {workout.sets} sets × {workout.reps} reps
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default HeroCard;