
import React from 'react';
import { ArrowLeft, Zap, Check, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const EnergyTheme: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm px-6 py-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg text-climate-dark">Climate Action</span>
          </Link>
          <Link 
            to="/"
            className="inline-flex items-center text-climate-dark hover:text-climate-blue transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-climate-blue text-white text-sm font-medium mb-4">
                <Zap size={16} className="mr-2" />
                ENERGY THEME
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Energy Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Design innovative solutions for renewable energy generation, storage, or improving energy efficiency in everyday contexts.
              </p>

              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Key Focus Areas:</h2>
                <ul className="space-y-3">
                  {[
                    "Renewable energy solutions (solar, wind, hydro, etc.)",
                    "Energy storage innovations",
                    "Energy efficiency in buildings or appliances",
                    "Microgrids and decentralized energy systems",
                    "Low-cost energy solutions for underserved communities"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-climate-blue flex items-center justify-center mr-3 mt-1">
                        <Check size={12} className="text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why Energy Matters:</h2>
                <p className="text-gray-700">
                  Energy production and consumption are major contributors to climate change, accounting for over 70% of global greenhouse gas emissions. By developing innovative energy solutions, we can reduce our carbon footprint while meeting the world's growing energy demands.
                </p>
                <p className="text-gray-700">
                  Your solution in this theme could help communities transition to cleaner energy sources, improve energy access in underprivileged areas, or make existing energy systems more efficient and sustainable.
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSedr0EnvWHucqE4LH_RVZo6Q6zsFL4iWRbiLdBSuSWb1hzlYw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-climate-blue text-white font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Mentor a Team
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                <img 
                  src="/images/uc_energy_feature.png" 
                  alt="Energy Solutions" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 bg-white">
                  <h2 className="text-2xl font-bold mb-4">Example Projects:</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg">Portable Solar Charging Stations</h3>
                      <p className="text-gray-600">Design compact, affordable solar charging stations for rural communities without reliable electricity access.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Smart Energy Monitoring System</h3>
                      <p className="text-gray-600">Create a tool that helps buildings (eg: homes/ schools/ institutions) track and optimize their energy usage in real-time.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Bicycle-Powered Generator</h3>
                      <p className="text-gray-600">Develop a system that converts mechanical energy from bicycles into electricity for charging devices or powering small appliances.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnergyTheme;
