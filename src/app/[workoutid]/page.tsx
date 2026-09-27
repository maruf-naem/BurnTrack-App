import SingleWorkOutBtn from "@/Components/Buttons/SingleWorkOutBtn";
import Image from "next/image";

interface ParamsProps {
  params: Promise<{
    workoutid: string;
  }>;
}

const SingleWorkout = async ({ params }: ParamsProps) => {
  const { workoutid } = await params;

  const res = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${workoutid}`
  );

  if (!res.ok) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#0F1115]">
        <h1 className="text-2xl font-bold text-white">Workout not found</h1>
      </div>
    );
  }

  const workout = await res.json();

  return (
    <main className="min-h-screen bg-[#0F1115]">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="relative h-[400px] overflow-hidden rounded-2xl border border-white/10 sm:h-[500px] lg:h-[750px]">
            <Image
              src={workout.image}
              alt={`${workout.name} demonstration`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div>
              <h1 className="text-3xl font-bold uppercase leading-tight tracking-wide text-white sm:text-4xl">
                {workout.name}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                {workout.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle: string) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-cyan-400 px-4 py-1.5 text-sm font-semibold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#1A1D23]">
              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="border-r border-white/10 py-2 px-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-white">
                    Equipment
                  </p>
                </div>
                <div className="py-2 px-5 text-sm text-gray-200">
                  {workout.equipment}
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="border-r border-white/10 py-2 px-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-white">
                    Difficulty
                  </p>
                </div>
                <div className="py-2 px-5 text-sm text-gray-200">
                  {workout.difficulty}
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="border-r border-white/10 py-2 px-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-white">
                    Sets
                  </p>
                </div>
                <div className="py-2 px-5 text-sm text-gray-200">
                  {workout.sets}
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="border-r border-white/10 py-2 px-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-white">
                    Reps
                  </p>
                </div>
                <div className="py-2 px-5 text-sm text-gray-200">
                  {workout.reps}
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="border-r border-white/10 py-2 px-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-white">
                    Duration
                  </p>
                </div>
                <div className="py-2 px-5 text-sm text-gray-200">
                  {workout.duration} min
                </div>
              </div>

              <div className="grid grid-cols-2 border-b border-white/10">
                <div className="border-r border-white/10 py-2 px-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-white">
                    Calories
                  </p>
                </div>
                <div className="py-2 px-5 text-sm text-gray-200">
                  {workout.caloriesBurned} kcal
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="border-r border-white/10 py-2 px-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-white">
                    Rating
                  </p>
                </div>
                <div className="py-2 px-5 text-sm text-gray-200">
                  ★ {workout.rating}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-4">
                {workout.instructions.map(
                  (instruction: string, index: number) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm leading-6 text-gray-200 sm:text-base"
                    >
                      <span className="font-semibold text-white">
                        {index + 1}.
                      </span>
                      <span>{instruction}</span>
                    </li>
                  ),
                )}
              </ol>
            </div>
            <SingleWorkOutBtn workout={workout} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleWorkout;