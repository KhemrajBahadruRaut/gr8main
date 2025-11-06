import React from "react";
import {
  Smartphone,
  Code,
  TrendingUp,
  ArrowRight,
  ArrowRightCircle,
  Palette,
  PenBoxIcon,
  PrinterIcon,
} from "lucide-react";
import { TbSocial } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { BsCursor } from "react-icons/bs";


export default function ServicesSection() {
  const services = [
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "App Development",
      description: "Lorem ipsum dolor new sit amet, consec...",
    },

    {
      icon: <Code className="w-5 h-5" />,
      title: "Website Development",
      description: "Lorem ipsum dolor new sit amet, consec...",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Search Engine Optimization (SEO)",
      description: "Lorem ipsum dolor new sit amet, consec...",
    },
  ];

  const designservices = [
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Graphics Designing",
      description: "Lorem ipsum dolor new sit amet, consec...",
    },
    {
      icon: <PenBoxIcon className="w-5 h-5" />,
      title: "Content Writing",
      description: "Lorem ipsum dolor new sit amet, consec...",
    },
    {
      icon: <PrinterIcon className="w-5 h-5" />,
      title: "Printing and Publishing",
      description: "Lorem ipsum dolor new sit amet, consec...",
    },
  ];

  const digitalmarketingfeaturesservices = [
    {
      icon: <TbSocial className="w-5 h-5" />,
      title: "Social Media Marketing",
      description: "Lorem ipsum dolor new sit amet, consec...",
    },
    {
      icon: <TfiEmail className="w-5 h-5" />,
      title: "Email Marketing",
      description: "Lorem ipsum dolor new sit amet, consec...",
    },
    {
      icon: <BsCursor className="w-5 h-5" />,
      title: "Pay Per Click (PPC) ",
      description: "Lorem ipsum dolor new sit amet, consec...",
    },
  ];

  const features = [
    "Lorem ipsum dolor new sit amet, consec tetur adipiscing elit",
    "Lorem ipsum dolor new sit amet.",
    "Consec tetur adip iscing elit new.",
    "Lorem ipsum dolor new sit tetur adip iscing elit.",
  ];
  const digitalmarketingfeatures = [
    "Lorem ipsum dolor new sit amet, consec tetur adipiscing elit",
    "Lorem ipsum dolor new sit amet.",
    "Consec tetur adip iscing elit new.",
  ];

  return (
    <div className=" bg-[#101820] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#0E8A4D] text-sm font-semibold tracking-widest uppercase mb-3">
            OUR SERVICES
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">What we do</h1>
          <p className="text-gray-400 text-md max-w-2xl mx-auto">
            Lorem ipsum dolor new sit amet, consec tetur adip iscing elit, new
            is sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start ">
          {/* Left Side - Services Cards */}
          <div className="space-y-6 bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl  sm:p-8 shadow-2xl ">
            <div className="bg-linear-to-br  from-slate-800/30 to-slate-900/30 backdrop-blur-sm sm:border border-slate-700/50 rounded-3xl sm:p-8 p-3 shadow-2xl sm:m-4 ">
              <h3 className="text-2xl font-bold mb-6 text-center pt-2 sm:pt-0 sm:text-start">
                Digital Development
              </h3>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 flex items-center justify-between group hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-amber-500 bg-slate-700/50 p-1 rounded-lg">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="bg-slate-700/50 p-2 rounded-full group-hover:bg-emerald-500/20 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Main Feature */}
          <div className="space-y-8 lg:pt-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Custom Websites and Web Applications
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 shrink-0">
                    <ArrowRightCircle className="w-6 h-6 text-amber-500 group-hover:text-emerald-400 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* creative & Brand Design */}
        <div className="grid lg:grid-cols-2 gap-12 items-start ">
          {/* left Side - Main Feature */}
          <div className="space-y-8 lg:pt-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Designs that define your brand.{" "}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed  text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed  text-justify">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.{" "}
              </p>
            </div>
          </div>

          {/* Right Side - Services Cards */}
          <div className="space-y-6 bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl  sm:p-8 shadow-2xl ">
            <div className="bg-linear-to-br  from-slate-800/30 to-slate-900/30 backdrop-blur-sm sm:border border-slate-700/50 rounded-3xl sm:p-8 p-3 shadow-2xl sm:m-4 ">
              <h3 className="text-2xl font-bold mb-6 text-center pt-2 sm:pt-0 sm:text-start">
                Creative & Brand Design
              </h3>

              <div className="space-y-4">
                {designservices.map((designservices, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 flex items-center justify-between group hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-amber-500 bg-slate-700/50 p-1 rounded-lg">
                        {designservices.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {designservices.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {designservices.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="bg-slate-700/50 p-2 rounded-full group-hover:bg-emerald-500/20 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* digital marketing and growth */}
         <div className="grid lg:grid-cols-2 gap-12 items-start ">
          {/* Left Side - Services Cards */}
          <div className="space-y-6 bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl  sm:p-8 shadow-2xl ">
            <div className="bg-linear-to-br  from-slate-800/30 to-slate-900/30 backdrop-blur-sm sm:border border-slate-700/50 rounded-3xl sm:p-8 p-3 shadow-2xl sm:m-4 ">
              <h3 className="text-2xl font-bold mb-6 text-center pt-2 sm:pt-0 sm:text-start">
                Digital Development
              </h3>

              <div className="space-y-4">
                {digitalmarketingfeaturesservices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 flex items-center justify-between group hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-amber-500 bg-slate-700/50 p-1 rounded-lg">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="bg-slate-700/50 p-2 rounded-full group-hover:bg-emerald-500/20 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Main Feature */}
          <div className="space-y-8 lg:pt-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Custom Websites and Web Applications
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-5">
              {digitalmarketingfeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 shrink-0">
                    <ArrowRightCircle className="w-6 h-6 text-amber-500 group-hover:text-emerald-400 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
