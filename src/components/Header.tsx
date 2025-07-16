import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "timeline", "themes", "guidelines", "sponsors", "mentors", "blogs", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }

      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 backdrop-blur-md",
          isScrolled ? "bg-white/80 shadow-sm" : "bg-black/10 shadow-sm"
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <span
              className={cn(
                "font-bold text-xl transition-colors duration-300",
                isScrolled ? "text-climate-dark" : "text-white"
              )}
            >
              Climate Action
            </span>
          </div>

          <ul className="hidden md:flex space-x-8 items-center">
            {[
              { id: "timeline", label: "Timeline" },
              { id: "themes", label: "Themes" },
              { id: "guidelines", label: "Guidelines" },
              { id: "sponsors", label: "Sponsors" },
              { id: "mentors", label: "Mentors", isRoute: true },
              { id: "blogs", label: "Blogs", isRoute: true },
              { id: "contact", label: "Contact Us", isRoute: true },
            ].map((item) => (
              <li key={item.id} className="inline-block">
                {item.isRoute ? (
                  <Link
                    to={`/${item.id}`}
                    className={cn(
                      "link-underline font-medium px-1 py-2 transition-colors duration-300 inline-block",
                      isScrolled
                        ? "text-climate-dark"
                        : "text-white/90",
                      activeSection === item.id && !isScrolled && "text-white font-bold"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "link-underline font-medium px-1 py-2 transition-colors duration-300 inline-block",
                      activeSection === item.id
                        ? isScrolled
                          ? "text-climate-orange"
                          : "text-white font-bold"
                        : isScrolled
                        ? "text-climate-dark"
                        : "text-white/90"
                    )}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex space-x-4 items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSedr0EnvWHucqE4LH_RVZo6Q6zsFL4iWRbiLdBSuSWb1hzlYw/viewform?usp=dialog"
              target="_blank"
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300 btn-hover-effect",
                isScrolled
                  ? "bg-climate-orange text-white hover:bg-climate-orange/90"
                  : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
              )}
            >
              Become/Refer a Mentor
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            className={cn(
              "md:hidden text-4xl transition-colors duration-300 -mt-2",
              isScrolled ? "text-climate-dark" : "text-white"
            )}
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            ≡
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-climate-dark/80 backdrop-blur-md shadow-lg z-40 transform transition-transform duration-300 ease-in-out py-8",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full opacity-0"
        )}
      >
        <div className="container mx-auto py-4">
          <ul className="flex flex-col space-y-4">
            {[
              { id: "timeline", label: "Timeline" },
              { id: "themes", label: "Themes" },
              { id: "guidelines", label: "Guidelines" },
              { id: "sponsors", label: "Sponsors" },
              { id: "mentors", label: "Mentors", isRoute: true },
              { id: "blogs", label: "Blogs", isRoute: true },
              { id: "contact", label: "Contact Us", isRoute: true },
            ].map((item) => (
              <li key={item.id} className="text-center">
                {item.isRoute ? (
                  <Link
                    to={`/${item.id}`}
                    className={cn(
                      "w-full font-medium px-4 py-2 transition-colors duration-300 block",
                      isScrolled
                        ? "text-climate-dark"
                        : "text-white",
                      activeSection === item.id && !isScrolled && "text-climate-orange font-bold"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "w-full text-center font-medium px-4 py-2 transition-colors duration-300",
                      activeSection === item.id
                        ? "text-climate-orange font-bold"
                        : "text-white"
                    )}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSedr0EnvWHucqE4LH_RVZo6Q6zsFL4iWRbiLdBSuSWb1hzlYw/viewform?usp=dialog"
                target="_blank"
                className="w-full block px-4 py-3 bg-climate-orange text-white text-center font-medium rounded-full hover:bg-opacity-90 transition-all"
              >
                Become/Refer a Mentor
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden py-16 md:pt-0 bg-climate-dark"
      >
        <div
          ref={parallaxRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/uc_myclimateaction_hero@2x.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "120%",
            top: "-10%",
          }}
        />
        <div className="absolute inset-0 z-10"></div>
        <div className="absolute inset-0 overflow-hidden z-5">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-pulse-light"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 3}s`,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 z-20 relative">
          <div className="w-full lg:w-1/2 text-white mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md pr-4 rounded-full mb-6">
              <img
                src="/images/uncompromised_logo_horiz.png"
                alt="Uncompromised"
                className="h-14 md:h-16 w-auto"
              />
              <div className="flex items-center justify-center w-8 h-8 -ml-1 -mr-2">
                <span className="text-white font-bold text-lg">×</span>
              </div>
              <img
                src="/images/dharohar_logo.png"
                alt="Dharohar"
                className="h-14 md:h-20 -mt-1 w-auto"
              />
            </div>
            <div className="block">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-4">
                MAY-NOV'25 • THIRD SPACE, UDAIPUR
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-24">
              Climate Action
              <br />
              Competition 2025
            </h1>
            <div className="sm:inline-block bg-climate-orange/10 backdrop-blur-md p-4 rounded-xl shadow-lg mb-4 mt-8 sm:mt-4 border border-climate-orange/20">
              <p className="text-sm md:text-sm text-white/80">
                Registrations for the 2025 cohort are now{" "}
                <strong>closed</strong>.
              </p>
              <p className="text-md md:text-lg text-white/80">
                <strong>250+</strong> students | <strong>60+</strong> teams |{" "}
                <strong>20+</strong> schools
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSedr0EnvWHucqE4LH_RVZo6Q6zsFL4iWRbiLdBSuSWb1hzlYw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-climate-orange text-white font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg btn-hover-effect"
              >
                Become/Refer a Mentor
              </a>
              <button
                onClick={() => scrollToSection("timeline")}
                className="px-8 py-3 bg-transparent border border-white/50 text-white rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowDown size={18} />
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 z-20"
          style={{ animationDelay: "1s" }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-float mt-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;