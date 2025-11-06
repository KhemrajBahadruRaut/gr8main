"use client";
import React from "react";

const Whoweare = () => {
  return (
    <section className="bg-[#101820] text-white px-8 md:px-20 py-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex-row md:flex gap-14">
        <div className="sm:w-sm pb-8">
          <p className="text-[#F2D08A] uppercase tracking-wide text-sm font-semibold mb-2">
            About Us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">Who We Are</h2>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col">
          <div className="mb-10 flex-row md:flex gap-5 ">
            <h3 className="text-lg sm:text-2xl font-semibold mb-2 whitespace-nowrap bg-linear-to-r from-[#D79442] to-[#EFC27E] bg-clip-text text-transparent">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed text-justify">
              Innovating solutions, managing properties, and delivering
              excellence with integrity and a customer-first focus. Innovating
              solutions, managing properties, and delivering excellence with
              integrity and a customer-first focus.integrity and a customer-first focus.
            </p>
          </div>

          {/* Our Vision */}
          <div className="mb-10 flex-row md:flex  gap-5 ">
            <h3 className="text-lg sm:text-2xl font-semibold mb-2  whitespace-nowrap bg-linear-to-r from-[#B32723] to-[#E06666] bg-clip-text text-transparent">
              Our Vision
            </h3>

            <p className="text-gray-300 leading-relaxed sm:pl-4 text-justify">
              To become a leading provider at the intersection of technology and
              property services, transforming the way individuals manage,
              experience, and interact with both physical and digital spaces.
               integrity and a customer-first focus. integrity and a customer-first focus.
            </p>
          </div>

          {/* Our Values */}
          <div className="mb-10 flex-row md:flex  gap-5" >
            <h3 className="\ text-lg sm:text-2xl font-semibold  mb-2 whitespace-nowrap bg-linear-to-r from-[#0E8A4D] to-[#4FBF87] bg-clip-text text-transparent">
              Our Values
            </h3>
            <p className="text-gray-300 leading-relaxed sm:pl-2.5 text-justify">
              To become a leading provider at the intersection of technology and
              property services, transforming the way individuals manage,
              experience, and interact with both physical and digital spaces. integrity and a customer-first focus. integrity and a customer-first focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
