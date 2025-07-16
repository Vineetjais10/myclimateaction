
import React from 'react';
import { ArrowLeft, Leaf, Check, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const NaturalResourcesTheme: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm px-6 py-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg text-climate-dark">Climate Action</span>
          </Link>
          <Link 
            to="/"
            className="inline-flex items-center text-climate-dark hover:text-climate-green transition-colors"
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-climate-green text-white text-sm font-medium mb-4">
                <Leaf size={16} className="mr-2" />
                NATURAL RESOURCES THEME
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Natural Resources Solutions</h1>
              <p className="text-lg text-gray-700 mb-8">
                Develop solutions for conserving water, protecting biodiversity, preserving forests, or sustainably managing other natural resources.
              </p>

              <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Key Focus Areas:</h2>
                <ul className="space-y-3">
                  {[
                    "Water conservation and management",
                    "Biodiversity preservation and monitoring",
                    "Sustainable agriculture and forestry",
                    "Soil health and regeneration",
                    "Ecosystem restoration techniques"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-climate-green flex items-center justify-center mr-3 mt-1">
                        <Check size={12} className="text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Why Natural Resources Matter:</h2>
                <p className="text-gray-700">
                  Natural resources are the foundation of all life on Earth. Their conservation and sustainable management are essential for both environmental health and human well-being.
                </p>
                <p className="text-gray-700">
                  Your solution in this theme could help protect vulnerable ecosystems, improve resource efficiency, promote biodiversity, or develop sustainable alternatives to current resource-intensive practices.
                </p>
              </div>

              <div className="mt-8">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSedr0EnvWHucqE4LH_RVZo6Q6zsFL4iWRbiLdBSuSWb1hzlYw/viewform?usp=dialog" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-climate-green text-white font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Mentor a Team
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl h-full">
                <img 
                  src="/images/uc_natural-resources_feature.png" 
                  alt="Natural Resources Solutions" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 bg-white">
                  <h2 className="text-2xl font-bold mb-4">Example Projects:</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg">Water Conservation System</h3>
                      <p className="text-gray-600">Design a rainwater harvesting or greywater recycling system for homes or schools.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Biodiversity Monitoring Tool</h3>
                      <p className="text-gray-600">Create a citizen science platform or device to track local biodiversity and inform conservation efforts.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Sustainable Agriculture Kit</h3>
                      <p className="text-gray-600">Develop a low-cost toolkit for small-scale farmers to implement sustainable farming practices that preserve soil health.</p>
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

export default NaturalResourcesTheme;
