import React from "react";
import { Award, Zap, Trash2, Leaf } from "lucide-react";

const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-16 bg-climate-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-climate-orange/10 text-climate-orange text-sm font-medium mb-4">
              <Award className="inline-block h-4 w-4 mr-1" /> COMPETITION
              REWARDS
            </div>
            <p className="text-gray-600">
              The Climate Action Competition celebrates excellence across all
              three themes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-climate-blue/10 transform transition-all hover:-translate-y-2 duration-300">
              <div className="p-1 bg-climate-blue text-white text-center">
                <Zap className="inline-block h-4 w-4 mr-1" /> Energy Theme
              </div>
              <div className="p-6">
                <h3 className="font-bold text-l mb-3 text-center text-climate-dark">
                  3 Awards
                </h3>
                <p className="text-center text-sm text-gray-600">
                  Recognizing innovative solutions in renewable energy and
                  energy efficiency.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-climate-orange/10 transform transition-all hover:-translate-y-2 duration-300">
              <div className="p-1 bg-climate-orange text-white text-center">
                <Trash2 className="inline-block h-4 w-4 mr-1" /> Waste
                Management Theme
              </div>
              <div className="p-6">
                <h3 className="font-bold text-l mb-3 text-center text-climate-dark">
                  3 Awards
                </h3>
                <p className="text-center text-sm text-gray-600">
                  Celebrating creative approaches to waste reduction and
                  management.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-climate-green/10 transform transition-all hover:-translate-y-2 duration-300">
              <div className="p-1 bg-climate-green text-white text-center">
                <Leaf className="inline-block h-4 w-4 mr-1" /> Natural Resources
                Theme
              </div>
              <div className="p-6">
                <h3 className="font-bold text-l mb-3 text-center text-climate-dark">
                  3 Awards
                </h3>
                <p className="text-center text-sm text-gray-600">
                  Honoring sustainable solutions for conservation and resource
                  management.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center my-10">
            <p className="text-gray-600">
              Also, participation certificates for all shortlisted teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
