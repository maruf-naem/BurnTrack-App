"use client";

import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { WorkOutContext } from "@/Context/WorkOutContext";

const NavBar = () => {
  const { save, plan } = useContext(WorkOutContext);

  const links = (
    <>
      <li>
        <Link
          href="/"
          className="text-white transition-colors duration-200 hover:bg-white/10 hover:text-cyan-400"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className="text-white transition-colors duration-200 hover:bg-white/10 hover:text-cyan-400"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F1115]/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="navbar min-h-16 p-0">
          {/* Left */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-sm mr-1 text-white hover:bg-white/10 lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-xl border border-white/10 bg-[#171A21] p-2 shadow-2xl"
              >
                {links}
              </ul>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-lg px-2 py-1 transition-all duration-200 hover:bg-white/5"
            >
              <Image
                src={Logo}
                alt="Fitness Tracker Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span className="hidden text-lg font-bold text-white sm:block">
                Fitness Tracker
              </span>
            </Link>
          </div>

          {/* Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 px-1">{links}</ul>
          </div>

          {/* Right */}
          <div className="navbar-end gap-2">
            {/* Plan */}
            <button className="btn btn-sm border-white/10 bg-white/5 text-white transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400">
              Plan
              <span className="badge badge-sm bg-cyan-400 text-black">
                {plan.length}
              </span>
            </button>

            {/* Saved */}
            <button className="btn btn-sm border-white/10 bg-white/5 text-white transition-all duration-200 hover:border-pink-400/30 hover:bg-pink-400/10 hover:text-pink-400">
              Saved
              <span className="badge badge-sm bg-pink-400 text-black">
                {save.length}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
