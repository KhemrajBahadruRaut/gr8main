import React, { useState, useRef } from "react";
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
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const digitalRef = useRef(null);
  const designRef = useRef(null);
  const marketingRef = useRef(null);
  const ctaRef = useRef(null);

  // Use useInView for each section
  const headerInView = useInView(headerRef, { once: true, threshold: 0.3 });
  const digitalInView = useInView(digitalRef, { once: true, threshold: 0.2 });
  const designInView = useInView(designRef, { once: true, threshold: 0.2 });
  const marketingInView = useInView(marketingRef, { once: true, threshold: 0.2 });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.3 });

  const services = [
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "App Development",
      description: "Custom mobile applications built with cutting-edge technology for iOS and Android platforms.",
      Link: "/services/mobile-app-development"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Website Development",
      description: "Responsive, high-performance websites and web applications tailored to your business needs.",
      Link: "/services/web-development"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Search Engine Optimization (SEO)",
      description: "Boost your online visibility and drive organic traffic with our comprehensive SEO strategies.",
      Link: "/services/seo-services"
    },
  ];

  const designservices = [
    {
      icon: <Palette className="w-5 h-5" />,
      title: "Graphics Designing",
      description: "Visually stunning designs that communicate your brand's story and values effectively.",
      Link: "/services/graphics-designing"
    },
    {
      icon: <PenBoxIcon className="w-5 h-5" />,
      title: "Content Writing",
      description: "Compelling content that engages your audience and strengthens your brand voice.",
      Link: "/services/content-writing"
    },
    {
      icon: <PrinterIcon className="w-5 h-5" />,
      title: "Printing and Publishing",
      description: "High-quality print materials that make your brand stand out in physical spaces.",
      Link: "/services/printing-publishing"
    },
  ];

  const digitalmarketingfeaturesservices = [
    {
      icon: <TbSocial className="w-5 h-5" />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns that build community and drive meaningful engagement.",
      Link: "/services/social-media-marketing"
    },
    {
      icon: <TfiEmail className="w-5 h-5" />,
      title: "Email Marketing",
      description: "Personalized email campaigns that nurture leads and convert subscribers into customers.",
      Link: "/services/email-marketing"
    },
    {
      icon: <BsCursor className="w-5 h-5" />,
      title: "Pay Per Click (PPC)",
      description: "Data-driven PPC campaigns that maximize ROI and accelerate business growth.",
      Link: "/services/ppc-advertising"
    },
  ];

  const features = [
    "Responsive design that works on all devices",
    "Optimized performance and fast loading times",
    "Secure and scalable architecture",
    "Ongoing maintenance and support"
  ];

  const designFeatures = [
    "Strategic brand identity development",
    "Consistent visual language across platforms",
    "User-centered design approach",
    "Professional print and digital assets"
  ];

  const digitalMarketingFeatures = [
    "Comprehensive digital marketing strategy",
    "Data analytics and performance tracking",
    "Targeted audience segmentation",
    "Continuous optimization for maximum ROI"
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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const featureListAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const featureItemAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="bg-[#101820] text-white sm:py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header Section */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.p 
            className="text-[#0E8A4D] text-sm font-semibold tracking-widest uppercase mb-3"
            variants={fadeInUp}
          >
            OUR SERVICES
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-white to-cyan-200 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            What we do
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            We deliver comprehensive digital solutions that drive growth, enhance brand presence, 
            and create meaningful connections with your audience.
          </motion.p>
        </motion.div>

        {/* Digital Development Section */}
        <motion.div 
          ref={digitalRef}
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          animate={digitalInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Left Side - Services Cards */}
          <motion.div 
            className="space-y-6 rounded-3xl sm:p-8 bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 shadow-[0px_-2px_12px] shadow-cyan-200/14"
            variants={cardAnimation}
          >
            <div className="bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm sm:border border-slate-700/50 rounded-3xl sm:p-8 p-4 shadow-2xl sm:m-4">
              <motion.h3 
                className="text-2xl font-bold mb-6 text-center sm:text-start"
                variants={fadeInUp}
              >
                Digital Development
              </motion.h3>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={cardAnimation}
                  >
                    <Link href={service.Link}>
                      <div
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
                              background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0.15) 30%, transparent 70%)",
                              filter: "blur(40px)",
                            }}
                          />
                        )}

                        {/* Static Glow Effect Layers */}
                        <div className="absolute inset-0 bg-linear-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Content */}
                        <div className="relative flex items-center gap-4 flex-1">
                          <div className="text-cyan-400 bg-slate-700/50 p-2 rounded-lg group-hover:bg-cyan-400/10 transition-colors duration-300">
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
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Main Feature */}
          <motion.div 
            className="space-y-8 lg:pt-12"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Custom Websites and Web Applications
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 text-justify">
                We create digital experiences that captivate your audience and drive business growth through innovative web solutions.
              </p>
            </motion.div>

            {/* Feature List */}
            <motion.div 
              className="space-y-5"
              variants={featureListAnimation}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  variants={featureItemAnimation}
                >
                  <div className="mt-1 shrink-0">
                    <ArrowRightCircle className="w-6 h-6 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Creative & Brand Design Section */}
        <motion.div 
          ref={designRef}
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          animate={designInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Left Side - Main Feature */}
          <motion.div 
            className="space-y-8 lg:pt-12"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Designs that define your brand
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed text-justify">
                We craft visual identities that resonate with your target audience and create lasting impressions across all touchpoints.
              </p>
            </motion.div>

            {/* Feature List */}
            <motion.div 
              className="space-y-5"
              variants={featureListAnimation}
            >
              {designFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  variants={featureItemAnimation}
                >
                  <div className="mt-1 shrink-0">
                    <ArrowRightCircle className="w-6 h-6 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Services Cards */}
          <motion.div 
            className="space-y-6 rounded-3xl sm:p-8 bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 shadow-[0px_-2px_12px] shadow-cyan-200/14"
            variants={cardAnimation}
          >
            <div className="bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm sm:border border-slate-700/50 rounded-3xl sm:p-8 p-4 shadow-2xl sm:m-4">
              <motion.h3 
                className="text-2xl font-bold mb-6 text-center sm:text-start"
                variants={fadeInUp}
              >
                Creative & Brand Design
              </motion.h3>

              <div className="space-y-4">
                {designservices.map((designservice, index) => (
                  <motion.div
                    key={index}
                    variants={cardAnimation}
                  >
                    <Link href={designservice.Link}>
                      <div
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
                              background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0.15) 30%, transparent 70%)",
                              filter: "blur(40px)",
                            }}
                          />
                        )}

                        {/* Static Glow Effect Layers */}
                        <div className="absolute inset-0 bg-linear-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative flex items-center gap-4 flex-1">
                          <div className="text-cyan-400 bg-slate-700/50 p-2 rounded-lg group-hover:bg-cyan-400/10 transition-colors duration-300">
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
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Digital Marketing & Growth Section */}
        <motion.div 
          ref={marketingRef}
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          animate={marketingInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Left Side - Services Cards */}
          <motion.div 
            className="space-y-6 rounded-3xl sm:p-8 bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 shadow-[0px_-2px_12px] shadow-cyan-200/14"
            variants={cardAnimation}
          >
            <div className="bg-linear-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm sm:border border-slate-700/50 rounded-3xl sm:p-8 p-4 shadow-2xl sm:m-4">
              <motion.h3 
                className="text-2xl font-bold mb-6 text-center sm:text-start"
                variants={fadeInUp}
              >
                Digital Marketing & Growth
              </motion.h3>

              <div className="space-y-4">
                {digitalmarketingfeaturesservices.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={cardAnimation}
                  >
                    <Link href={service.Link}>
                      <div
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
                              background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0.15) 30%, transparent 70%)",
                              filter: "blur(40px)",
                            }}
                          />
                        )}

                        {/* Static Glow Effect Layers */}
                        <div className="absolute inset-0 bg-linear-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative flex items-center gap-4 flex-1">
                          <div className="text-cyan-400 bg-slate-700/50 p-2 rounded-lg group-hover:bg-cyan-400/10 transition-colors duration-300">
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
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Main Feature */}
          <motion.div 
            className="space-y-8 lg:pt-12"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                Digital Marketing & Growth
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 text-justify">
                We implement data-driven marketing strategies that deliver measurable results and sustainable business growth.
              </p>
            </motion.div>

            {/* Feature List */}
            <motion.div 
              className="space-y-5"
              variants={featureListAnimation}
            >
              {digitalMarketingFeatures.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 group"
                  variants={featureItemAnimation}
                >
                  <div className="mt-1 shrink-0">
                    <ArrowRightCircle className="w-6 h-6 text-cyan-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          ref={ctaRef}
          className="text-center pt-8"
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}