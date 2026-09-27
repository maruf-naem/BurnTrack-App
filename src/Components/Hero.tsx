import Image from 'next/image';
import HeroImage from '../../public/assets/banner.png';

const Hero = () => {
    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="flex flex-col items-center gap-8 rounded-2xl bg-[#1A1D23] p-6 sm:p-8 md:p-10 lg:flex-row lg:gap-10">
                <div className="w-full lg:w-1/2">
                    <h4 className="mb-3 text-sm font-semibold tracking-[0.2em] text-cyan-400 sm:text-base">
                        WORKOUT LIBRARY
                    </h4>

                    <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="mb-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into toda's plan, and watch the week's
                        work add up.
                    </p>

                    <button className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-black transition-all duration-200 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 sm:px-6 sm:py-3.5">
                        BROWSE WORKOUTS
                    </button>
                </div>

                <div className="w-full lg:w-1/2">
                    <Image
                        src={HeroImage}
                        alt="Workout Hero Image"
                        className="h-auto w-full object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;