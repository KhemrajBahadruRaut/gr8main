import React from 'react';
import { User, Scale, Anchor, Rocket, Leaf } from 'lucide-react';

const ValueCard = React.memo(({ icon: Icon, title, description }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
    <div className="w-14 h-14 rounded-lg border-2 border-orange-500 flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 text-orange-500" strokeWidth={2} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-slate-300 leading-relaxed text-sm">{description}</p>
  </div>
));

ValueCard.displayName = 'ValueCard';

export default function AboutSection() {
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
      description: "We consistently embrace new technologies and innovative strategies to enhance property operations and digital experiences."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We consistently embrace new technologies and innovative strategies to enhance property operations and digital experiences."
    },
    {
      icon: Rocket,
      title: "",
      description: "We consistently embrace new technologies and innovative strategies to enhance property operations and digital experiences."
    },
    {
      icon: Rocket,
      title: "Lightning",
      description: "We consistently embrace new technologies and innovative strategies to enhance property operations and digital experiences."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We consistently embrace new technologies and innovative strategies to enhance property operations and digital experiences."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We consistently embrace new technologies and innovative strategies to enhance property operations and digital experiences."
    }
  ];

  return (
    <section className="bg-slate-900 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-4">
            ABOUT US
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Get to Know Us
          </h1>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Our Story */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                GR8 Private Limited is a dynamic company specializing in digital solutions and property management services.
              </p>
              <p className="text-slate-300 leading-relaxed">
                As a forward-thinking enterprise, GR8 Private Limited was founded with the vision of enhancing digital solutions and property management through innovative technology and reliable service.
              </p>
            </div>
          </div>

          {/* Right Column - Company Description */}
          <div className="space-y-6">
            <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
              <p className="text-slate-300 leading-relaxed">
                A pioneering initiative of GR8 Realtors USA, our company serves as a bridge between traditional practices and modern digital transformation. We are committed to delivering excellence, efficiency, and transparency in every aspect of our digital solutions and property management services.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
              <p className="text-slate-300 leading-relaxed">
                While our current focus is on delivering top-tier digital and property management solutions, we are continuously expanding our service portfolio to include a wider array of offerings that address the evolving needs of the market. With GR8 Private Limited, you are not just receiving a service; you are partnering with a brand committed to redefining the future of digital services and property management solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}