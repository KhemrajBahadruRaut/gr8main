"use client"
import React, { useState, useEffect } from 'react';
import { User, Scale, Anchor, Rocket, Leaf, Target, Zap, HeartHandshake, Building } from 'lucide-react';

const ValueCard = React.memo(({ icon: Icon, title, description, index }) => (
  <div 
    className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 animate-fade-in-up group h-full flex flex-col"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="w-12 h-12 rounded-lg border-2 border-orange-500 flex items-center justify-center mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
      <Icon className="w-6 h-6 text-orange-500" strokeWidth={2} />
    </div>
    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2 min-h-14 flex items-center">
      {title}
    </h3>
    <p className="text-slate-300 leading-relaxed text-sm group-hover:text-slate-200 transition-colors duration-300 grow line-clamp-4">
      {description}
    </p>
  </div>
));

ValueCard.displayName = 'ValueCard';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const values = [
    {
      icon: User,
      title: "Customer Focus",
      description: "We actively listen to, understand, and prioritize the unique needs of our clients, tenants, and users, ensuring exceptional service and customized solutions."
    },
    {
      icon: Scale,
      title: "Integrity",
      description: "We conduct business with honesty, ethics, and transparency, earning trust through consistent and responsible actions."
    },
    {
      icon: Anchor,
      title: "Reliability",
      description: "We provide reliable services both digital and physical that clients and tenants can trust."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We consistently embrace new technologies and innovative strategies to enhance property operations and digital experiences."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices and sustainable solutions for long-term success."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in all our services, continuously improving and delivering quality results."
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "We optimize processes and leverage technology to deliver fast, effective solutions without compromising quality."
    },
    {
      icon: HeartHandshake,
      title: "Partnership",
      description: "We build long-term relationships based on mutual trust, collaboration, and shared success with our clients."
    },
    {
      icon: Building,
      title: "Growth",
      description: "We foster continuous growth and development for our company, clients, and community through innovative solutions."
    }
  ];

  return (
    <section className="bg-slate-900 py-20 px-6 relative overflow-hidden lg:pt-32">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-slate-700/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in">
            ABOUT US
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Get to Know Us
          </h1>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Our Story */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              Our Story
            </h2>
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                GR8 Private Limited is a dynamic company specializing in digital solutions and property management services.
              </p>
              <p className="text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                As a forward-thinking enterprise, GR8 Private Limited was founded with the vision of enhancing digital solutions and property management through innovative technology and reliable service.
              </p>
            </div>
          </div>

          {/* Right Column - Company Description */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30 hover:border-orange-500/30 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
              <p className="text-slate-300 leading-relaxed">
                A pioneering initiative of GR8 Realtors USA, our company serves as a bridge between traditional practices and modern digital transformation. We are committed to delivering excellence, efficiency, and transparency in every aspect of our digital solutions and property management services.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30 hover:border-orange-500/30 transition-all duration-500 hover:transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <p className="text-slate-300 leading-relaxed">
                While our current focus is on delivering top-tier digital and property management solutions, we are continuously expanding our service portfolio to include a wider array of offerings that address the evolving needs of the market. With GR8 Private Limited, you are not just receiving a service; you are partnering with a brand committed to redefining the future of digital services and property management solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={index} className="group h-full">
              <ValueCard
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.05;
          }
          50% {
            transform: translateY(-15px) scale(1.03);
            opacity: 0.08;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          animation-fill-mode: both;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}