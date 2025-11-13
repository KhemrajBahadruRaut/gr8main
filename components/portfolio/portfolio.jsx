export default function Portfolio() {
  return (
    <div className=" bg-[#1a1f2e] py-16 px-4 pt-25">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="bg-linear-to-r from-[#D79442] to-[#E06666] bg-clip-text font-bold text-transparent text-sm tracking-widest uppercase mb-2">
            PORTFOLIO
          </p>
          <h1 className="text-white text-4xl font-bold">Our Works</h1>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1 - Fintech App */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
              alt="Fintech Application"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Item 2 - Branding */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop"
              alt="Branding Project"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Item 3 - Design System */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1545670723-196ed0954986?w=600&h=400&fit=crop"
              alt="Design System"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Item 4 - E-commerce */}
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
              alt="E-commerce Platform"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}