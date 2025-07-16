
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              Have questions about the Climate Action Competition? Reach out to us directly using the contact information below.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                <div className="flex items-center gap-3">
                  <div className="bg-climate-orange/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-climate-orange" />
                  </div>
                  <a 
                    href="mailto:youth@myclimateaction.in" 
                    className="text-climate-dark hover:text-climate-orange transition-colors"
                  >
                    youth@myclimateaction.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;