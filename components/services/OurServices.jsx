import React, { useState } from "react";
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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseMove = (e, index, section) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredIndex(index);
    setHoveredSection(section);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setHoveredSection(null);
  };

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
          <div className="space-y-6 rounded-3xl  sm:p-8  bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 shadow-[0px_-2px_12px] shadow-cyan-200/14 ">
            <div className="bg-linear-to-br  from-slate-800/30 to-slate-900/30 backdrop-blur-sm sm:border border-slate-700/50 rounded-3xl sm:p-8 p-3 shadow-2xl sm:m-4  ">
              <h3 className="text-2xl font-bold mb-6 text-center pt-2 sm:pt-0 sm:text-start">
                Digital Development
              </h3>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 flex items-center justify-between group hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer overflow-hidden"
                    onMouseMove={(e) => handleMouseMove(e, index, "digital")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Mouse-following Glow Effect */}
                    {hoveredIndex === index && hoveredSection === "digital" && (
                      <div
                        className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
                        style={{
                          left: `${mousePosition.x}px`,
                          top: `${mousePosition.y}px`,
                          background:
                            "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0.15) 30%, transparent 70%)",
                          filter: "blur(40px)",
                        }}
                      />
                    )}

                    {/* Static Glow Effect Layers */}
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="relative flex items-center gap-4 flex-1">
                      <div className="text-cyan-400 bg-slate-700/50 p-1 rounded-lg group-hover:bg-cyan-400/10 transition-colors duration-300">
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
                    <div className="relative ml-4">
                      <div className="bg-slate-700/50 p-2 rounded-full group-hover:bg-cyan-400/20 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
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
                    <ArrowRightCircle className="w-6 h-6 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300" />
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
          <div className="space-y-6 bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl  sm:p-8 shadow-[0px_-2px_12px]  shadow-cyan-200/14 ">
            <div className="bg-linear-to-br  from-slate-800/30 to-slate-900/30 backdrop-blur-sm sm:border border-slate-700/50 rounded-3xl sm:p-8 p-3 shadow-2xl sm:m-4 ">
              <h3 className="text-2xl font-bold mb-6 text-center pt-2 sm:pt-0 sm:text-start">
                Creative & Brand Design
              </h3>

              <div className="space-y-4">
                {designservices.map((designservice, index) => (
                  <div
                    key={index}
                    className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 flex items-center justify-between group hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer overflow-hidden"
                    onMouseMove={(e) => handleMouseMove(e, index, "design")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Mouse-following Glow Effect */}
                    {hoveredIndex === index && hoveredSection === "design" && (
                      <div
                        className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
                        style={{
                          left: `${mousePosition.x}px`,
                          top: `${mousePosition.y}px`,
                          background:
                            "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0.15) 30%, transparent 70%)",
                          filter: "blur(40px)",
                        }}
                      />
                    )}

                    {/* Static Glow Effect Layers */}
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative flex items-center gap-4 flex-1">
                      <div className="text-cyan-400 bg-slate-700/50 p-1 rounded-lg group-hover:bg-cyan-400/10 transition-colors duration-300">
                        {designservice.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {designservice.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {designservice.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative ml-4">
                      <div className="bg-slate-700/50 p-2 rounded-full group-hover:bg-cyan-400/20 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
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
          <div className="space-y-6 bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl  sm:p-8 shadow-[0px_-2px_12px]  shadow-cyan-200/14 ">
            <div className="bg-linear-to-br  from-slate-800/30 to-slate-900/30 backdrop-blur-sm sm:border border-slate-700/50 rounded-3xl sm:p-8 p-3 shadow-2xl sm:m-4 ">
              <h3 className="text-2xl font-bold mb-6 text-center pt-2 sm:pt-0 sm:text-start">
                Digital Marketing & Growth
              </h3>

              <div className="space-y-4">
                {digitalmarketingfeaturesservices.map((service, index) => (
                  <div
                    key={index}
                    className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 flex items-center justify-between group hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer overflow-hidden"
                    onMouseMove={(e) => handleMouseMove(e, index, "marketing")}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Mouse-following Glow Effect */}
                    {hoveredIndex === index && hoveredSection === "marketing" && (
                      <div
                        className="absolute w-64 h-64 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
                        style={{
                          left: `${mousePosition.x}px`,
                          top: `${mousePosition.y}px`,
                          background:
                            "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0.15) 30%, transparent 70%)",
                          filter: "blur(40px)",
                        }}
                      />
                    )}

                    {/* Static Glow Effect Layers */}
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative flex items-center gap-4 flex-1">
                      <div className="text-cyan-400 bg-slate-700/50 p-1 rounded-lg group-hover:bg-cyan-400/10 transition-colors duration-300">
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
                    <div className="relative ml-4">
                      <div className="bg-slate-700/50 p-2 rounded-full group-hover:bg-cyan-400/20 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
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
                Digital Marketing & Growth
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
                    <ArrowRightCircle className="w-6 h-6 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300" />
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