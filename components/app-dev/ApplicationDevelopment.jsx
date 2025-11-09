"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ApplicaitonDevelopment = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const technologies = [
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ];

  const faqs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?'
  ];

  const overviewPoints = [
    {
      number: '01',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      number: '02',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, consectetur adipiscing elit.'
    },
    {
      number: '03',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      number: '04',
      text: 'Duis aute irure, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  return (
    <div className="pt-10 bg-[#0a1520] text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-[#FDEDED] inline-block px-4 py-1 rounded-full text-sm mb-6">
            <span className=" text-[#B32723]"> App Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Digital Vision Into Reality
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We create stunning, high-performance websites and applications that drive business growth, engage your audience and deliver exceptional user experiences.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-[#B32723] text-sm font-medium mb-2 tracking-wider">
            EXPLORE FOR THE WEEK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Overview</h2>
        </div>

        <div className="space-y-8 mb-12">
          <p className="text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat adipiscing elit.
          </p>
          <p className="text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>

        {/* Overview Points */}
        <div className="flex flex-col gap-6 max-w-xl mx-auto">
          {overviewPoints.map((point, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="bg-linear-to-br from-[#B32723] to-[#E06666] text-black font-bold px-4 py-2 rounded-lg shrink-0">
                {point.number}
              </div>
              <p className="text-gray-300 pt-1">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-orange-400 text-sm font-medium mb-2 tracking-wider">
            PLANNING & FRAMEWORK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Process</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="text-5xl font-bold text-gray-700">{step.number}</div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <p className="text-orange-400 text-sm font-medium mb-2 tracking-wider">
            OUR TECH STACK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technologies We Use</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-16 xl:gap-20">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="w-16 h-16 flex items-center justify-center  transition-all duration-300 hover:scale-110"
              title={tech.name}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <p className="text-[#B32723] text-sm font-medium mb-2 tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">FAQs</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0f1d2e] rounded-lg overflow-hidden border border-gray-800"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#132435] transition-colors"
              >
                <span className="text-gray-300">{faq}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 text-gray-400">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-linear-to-br from-[#0f1d2e] to-[#132435] rounded-2xl p-12 text-center border border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start your project</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ut enim ad minim veniam, quis nos trud exercitation ullamco laboris ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-black font-medium rounded-3xl hover:bg-gray-100 transition-colors">
              Book a consultation
            </button>
            <button className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-3xl hover:bg-white hover:text-black transition-colors">
              See our works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicaitonDevelopment;