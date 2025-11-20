import React from "react";
import Navigation from "../components/Navigation";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="pt-16">
        {/* Add your portfolio projects here */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Check out our latest projects and success stories.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioPage;
