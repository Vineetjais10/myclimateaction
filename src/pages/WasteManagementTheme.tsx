
import React from 'react';
import { ArrowLeft, Trash2, Check, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const WasteManagementTheme: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm px-6 py-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg text-climate-dark">Climate Action</span>
          </Link>
          <Link 
            to="/"
            className="inline-flex items-center text-climate-dark hover:text-climate-orange transition-colors"
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-climate-orange text-white text-sm font-medium mb-4">
                <Trash2 size={16} className="mr-2" />
                WASTE MANAGEMENT THEME
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Waste Management Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Create innovative approaches to reduce, reuse, or recycle waste materials, or develop systems for more effective waste management.
              </p>

              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Key Focus Areas:</h2>
                <ul className="space-y-3">
                  {[
                    "Plastic waste reduction and alternatives",
                    "Waste recycling and recovery",
                    "Upcycling waste into valuable products",
                    "Community waste management initiatives",
                    "Zero waste product cycle products"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-climate-orange flex items-center justify-center mr-3 mt-1">
                        <Check size={12} className="text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why Waste Management Matters:</h2>
                <p className="text-gray-700">
                  Improper waste disposal contributes to pollution, greenhouse gas emissions, and environmental degradation. Effective waste management can reduce emissions, conserve resources, and create economic opportunities.
                </p>
                <p className="text-gray-700">
                  Your solution in this theme could help communities reduce waste generation, improve waste collection and processing, or transform waste into valuable resources through innovative recycling or upcycling methods.
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSedr0EnvWHucqE4LH_RVZo6Q6zsFL4iWRbiLdBSuSWb1hzlYw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-climate-orange text-white font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Mentor a Team
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                <img 
                  src="/images/uc_waste-management_feature.png" 
                  alt="Waste Management Solutions" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 bg-white">
                  <h2 className="text-2xl font-bold mb-4">Example Projects:</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg">Zero-Waste Product Cycle Projects</h3>
                      <p className="text-gray-600">Develop innovative products that adhere to a zero-waste product cycle, ensuring that every stage of the product's life, from production to disposal, generates no waste.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Plastic Waste to Building Materials</h3>
                      <p className="text-gray-600">Develop a method to transform plastic waste into durable, low-cost building materials for community projects.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Food Waste Reduction Tool</h3>
                      <p className="text-gray-600">Create a tool that helps households or restaurants track and reduce food waste through smart inventory management.</p>
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

export default WasteManagementTheme;
