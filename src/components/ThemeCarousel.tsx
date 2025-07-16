
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Info, Leaf, Trash2, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface Theme {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  link: string;
}

const themes: Theme[] = [
  {
    id: 'energy',
    title: 'Energy',
    description: 'Design innovative solutions for renewable energy generation, storage, or improving energy efficiency in everyday contexts.',
    icon: <Zap size={24} />,
    color: 'bg-climate-blue',
    image: '/images/uc_energy_feature.png',
    link: '/themes/energy'
  },
  {
    id: 'waste',
    title: 'Waste Management',
    description: 'Create innovative approaches to reduce, reuse, or recycle waste materials, or develop systems for more effective waste management.',
    icon: <Trash2 size={24} />,
    color: 'bg-climate-orange',
    image: '/images/uc_waste-management_feature.png',
    link: '/themes/waste-management'
  },
  {
    id: 'resources',
    title: 'Natural Resources',
    description: 'Develop solutions for conserving water, protecting biodiversity, preserving forests, or sustainably managing other natural resources.',
    icon: <Leaf size={24} />,
    color: 'bg-climate-green',
    image: '/images/uc_natural-resources_feature.png',
    link: '/themes/natural-resources'
  }
];

const ThemeCarousel: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveTheme((prev) => (prev + 1) % themes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTheme = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveTheme((prev) => (prev - 1 + themes.length) % themes.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto rotate themes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTheme();
    }, 8000);

    return () => clearInterval(interval);
  });

  return (
    <section id="themes" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            COMPETITION THEMES
          </div>
          <div></div>
          <h2 className="section-title text-center mb-6">
            Choose Your Climate Challenge
          </h2>
          <p className="section-subtitle">
            Select one of these three critical environmental areas and develop your innovative solution to address real climate challenges.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Theme carousel */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeTheme * 100}%)` }}
            >
              {themes.map((theme) => (
                <div key={theme.id} className="min-w-full">
                  <div className="relative aspect-[2/3] md:aspect-[21/9] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${theme.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                      <div className={cn("inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4", theme.color)}>
                        {theme.icon}
                        <span className="ml-2">{theme.title.toUpperCase()}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {theme.title} Solutions
                      </h3>
                      <p className="text-white/90 max-w-3xl mb-6">
                        {theme.description}
                      </p>
                      <Link to={theme.link} className="inline-flex items-center px-6 py-3 bg-white text-climate-dark rounded-full transition-all hover:bg-opacity-90 shadow-lg btn-hover-effect">
                        Learn More
                        <Info size={18} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTheme}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all hidden sm:block"
            aria-label="Previous theme"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextTheme}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg z-10 transition-all hidden sm:block"
            aria-label="Next theme"
          >
            <ChevronRight size={24} />
          </button>

          {/* Theme indicators */}
          <div className="flex justify-center mt-6">
            {themes.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTheme(index)}
                className={cn(
                  "theme-indicator",
                  activeTheme === index ? "active" : ""
                )}
                aria-label={`Go to theme ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeCarousel;
