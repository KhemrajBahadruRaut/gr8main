import React from "react";



export default function MainPage() {
  
  return (
    <div className=" bg-[#101820] relative overflow-hidden pb-20" >
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20">
        {/* Hero Text */}
        <div className="text-center mb-12 max-w-5xl lg:mt-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Building a <span className=" bg-linear-to-r from-[#D79442] to-[#EFC27E] bg-clip-text text-transparent text-3xl md:text-4xl lg:text-7xl ">Stronger</span>
            <br />
            Digital Presence for Your Business.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-10">
            Lorem ipsum dolor new sit amet, consec tetur adip iscing elit, new
            is see.
          </p>

          <div className="flex flex-wrap gap-8 justify-center">
            <button className="bg-linear-to-r from-[#B64546] to-[#F2D08A] hover:from-[#F2D08A] hover:to-[#B64546] hover:scale-105 hover:shadow-sm transition-all duration-300 ease-in-out text-white px-8 py-3 rounded-full font-medium  shadow-lg hover:shadow-orange-600/50 ">
              See our Works
            </button>
            <button className="relative inline-flex items-center justify-center px-10 py-1 font-medium rounded-full bg-transparent group transition-all duration-300 ease-out hover:scale-105">
              {/* Gradient border */}
              <span className="absolute inset-0 rounded-full p-px bg-linear-to-r from-[#F2D08A] to-[#B64546] transition-all duration-300 ease-out">
                <span className="block h-full w-full rounded-full bg-black transition-all duration-300 ease-out group-hover:bg-linear-to-r group-hover:from-[#F2D08A]/10 group-hover:to-[#B64546]/10"></span>
              </span>
              {/* Text */}
              <span className="relative z-10 flex items-center gap-2 bg-linear-to-r from-[#F2D08A] to-[#B64546] bg-clip-text text-transparent transition-all duration-300 ease-out group-hover:text-white">
                Get started →
              </span>
            </button>
          </div>
        </div>

        {/* Code Window */}
        <div className="relative w-full max-w-2xl">
          {/* Floating Icons */}
          <div className="absolute hidden z-10 -left-12 -top-8 w-18 h-18 bg-linear-to-r from-[#D79442] to-[#EFC27E] rounded-2xl sm:flex items-center justify-center shadow-xl -rotate-12 hover:rotate-0 transition-transform duration-300">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>

          <div className="absolute hidden z-10 -right-12 -top-8 w-18 h-18 bg-linear-to-r from-[#B32723] to-[#E06666] rounded-2xl sm:flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform duration-300">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>

          <div className="absolute hidden z-10 -right-12 -bottom-8 w-18 h-18 bg-linear-to-r from-[#0E8A4D] to-[#4FBF87] rounded-2xl sm:flex items-center justify-center  -rotate-12 hover:rotate-0 transition-transform duration-300">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
          </div>
          
          {/* Code Window */}
          {/* <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden hover:shadow-orange-500/10 transition-all duration-500"> */}
            {/* Window Header */}
            <div className=" backdrop-blur-[3px] p-3 sm:px-10 sm:py-8 flex-row items-center gap-3 border-3 border-slate-700/50 rounded-4xl shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
            <div className="flex items-center relative -top-5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="text-slate-400 text-sm ml-4">Dashboard.jsx</span>
            </div>
            {/* Code Content */}
            <div className="p-6 font-mono text-sm  rounded-xl  bg-[#26323D]">
              <div className="space-y-1">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-300">digitalSolution</span>{" "}
                  <span className="text-purple-400">=</span>{" "}
                  <span className="text-slate-300">{"{"}</span>
                </div>
                <div className="pl-6">
                  <span className="text-cyan-400">innovation</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-emerald-400">"true"</span>
                  <span className="text-slate-300">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-cyan-400">design</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-emerald-400">"exceptional"</span>
                  <span className="text-slate-300">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-cyan-400">results</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-emerald-400">"guaranteed"</span>
                </div>
                <div>
                  <span className="text-slate-300">{"}"}</span>
                </div>
              </div>
            </div>
            </div>

          {/* </div> */}
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(71, 85, 105, 1) 1px,
              transparent 2px
            ),
            linear-gradient(90deg, rgba(71, 85, 105, 1) 1px, transparent 1px);
            
          background-size: 90px 90px;
          
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.1);
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .delay-700 {
          animation-delay: 700ms;

        }
          
      `}</style>
    </div>
  );
}
