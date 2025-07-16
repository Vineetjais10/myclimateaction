import React, { useRef, useEffect } from "react";
import { Calendar, Asterisk } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  location?: string;
  tentative?: boolean;
  isActive?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    date: "14-Apr",
    title: "Registrations Open",
    description: "Teams start registering through the official website",
    location: "Online",
    isActive: false,
  },
  {
    date: "16-May",
    title: "Last Date of Registrations",
    description: "Final chance to register your team for the competition",
    location: "Online",
    isActive: false,
  },
  {
    date: "13-Jun",
    title: "Final Theme Submission",
    description: "Teams submit their final theme and submission category.",
    location: "<a href='mailto:youth@myclimateaction.in' class='flex justify-center bg-climate-blue text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow'><span class='font-medium'>Email: youth@myclimateaction.in</span></a>",
    isActive: true,
  },
  {
    date: "15-Jul",
    title: "Concept Submission",
    description: "Teams submit a brief outline of their project",
    location: "<a href='https://docs.google.com/forms/d/e/1FAIpQLSflfv0ypq88o21VEkf8xKvdsSvqTLj6uPZIUSdhfohzPMdyOg/viewform?usp=dialog' target=_blank' class='flex justify-center bg-climate-blue text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow'><span class='font-medium'>Submit your Concept</span></a>",
    isActive: true,
  },
  {
    date: "01-Aug",
    title: "Shortlist Announcement",
    description:
      "Selected Teams will be notified to proceed to the next round.",
    location: "Online",
    isActive: true,
  },
  {
    date: "15-Aug",
    title: "Orientation & Mentorship session",
    description:
      "Selected teams get exclusive mentorship from industry experts",
    location: "Third Space, Udaipur",
    tentative: true,
    isActive: true,
  },
  {
    date: "20-Sep",
    title: "Skills Training & 2nd Mentorship Session",
    description:
      "Skills Training for all shortlisted teams and mentorship session*",
    location: "Online / Third Space, Udaipur",
    tentative: true,
    isActive: true,
  },
  {
    date: "Oct",
    title: "3rd Mentorship Session: Final Refinement",
    description:
      "Teams show their prototypes/videos to mentors for final refinement",
    location: "Online / Third Space, Udaipur",
    tentative: true,
    isActive: true,
  },
  {
    date: "16-Nov",
    title: "Exhibition & Grand Finale",
    description:
      "Teams present their solution to the judges panel. Winner Announcement and award ceremony in the evening.",
    location: "Third Space, Udaipur",
    isActive: true,
  },
];

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const timelineItems =
            timelineRef.current?.querySelectorAll(".timeline-item");
          timelineItems?.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate-slide-in");
            }, index * 150);
          });
          observer.disconnect();
        }
      });
    }, options);

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const createGoogleCalendarLink = () => {
    const baseUrl =
      "https://calendar.google.com/calendar/render?action=TEMPLATE";
    return baseUrl;
  };

  return (
    <section id="timeline" className="section-padding bg-climate-light">
      <div className="container-narrow mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-climate-orange/10 text-climate-orange text-sm font-medium mb-4">
            COMPETITION TIMELINE
          </div>
          <div></div>
          <h2 className="section-title text-center mb-6">
            Journey to Climate Solutions
          </h2>
          <p className="section-subtitle">
            From registration to the grand finale, follow the key milestones of
            the Climate Action Competition 2025 and prepare your team for
            success.
          </p>
        </div>

        <div ref={timelineRef} className="relative timeline-wrapper">
          <div className="absolute h-full w-0.5 bg-climate-blue/30 left-1/2 transform -translate-x-1/2 z-0"></div>

          <div className="space-y-12 relative">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="timeline-item opacity-0 flex items-center"
              >
                {!item.tentative ? (
                  <>
                    <div className="w-[calc(100%)] md:w-[calc(50%-20px)] md:pr-8">
                      <div
                        className={`p-6 rounded-lg ml-auto ${
                          item.isActive
                            ? "bg-white shadow-md"
                            : "bg-gray-100 border border-gray-300"
                        }`}
                      >
                        <div
                          className={`flex items-center font-medium mb-2 ${
                            item.isActive
                              ? "text-climate-blue "
                              : "text-muted-foreground"
                          }`}
                        >
                          <Calendar size={16} className="mr-2" />
                          <span>
                            {item.date}
                            {item.tentative && (
                              <Asterisk
                                size={10}
                                className="inline ml-1 align-super text-climate-orange"
                              />
                            )}
                          </span>
                        </div>
                        <h3
                          className={`text-xl font-bold mb-2 ${
                            item.isActive ? "" : "text-muted-foreground"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                        {item.location && (
                          <p
                            className={`text-sm mt-2  ${
                              item.isActive
                                ? "text-climate-blue/80"
                                : "text-muted-foreground/80"
                            }`}
                            dangerouslySetInnerHTML={{
                              __html: `${item.location}`,
                            }}
                          ></p>
                        )}
                      </div>
                    </div>
                    <div className="hidden w-10 flex-shrink-0 justify-center z-30 md:flex">
                      <div
                        className={`w-6 h-6 rounded-full  border-4 border-white ${
                          item.isActive
                            ? "bg-climate-blue"
                            : "bg-muted-foreground"
                        }`}
                      ></div>
                    </div>
                    <div className="md:hidden absolute left-1/2 -top-8 -translate-x-3 z-30">
                      <div className="w-6 h-6 rounded-full bg-climate-blue border-4 border-white"></div>
                    </div>
                    <div className="md:w-[calc(50%-20px)]"></div>
                  </>
                ) : (
                  <>
                    <div className="md:w-[calc(50%-20px)]"></div>
                    <div className="md:hidden absolute left-1/2 -top-8 -translate-x-3 z-30">
                      <div className="w-6 h-6 rounded-full bg-[#F97316] border-4 border-white"></div>
                    </div>
                    <div className="hidden w-10 flex-shrink-0 justify-center z-30 md:flex">
                      <div className="w-6 h-6 rounded-full bg-[#F97316] border-4 border-white"></div>
                    </div>

                    <div className="w-[calc(100%)] md:w-[calc(50%-20px)] md:pl-8">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center text-climate-blue font-medium mb-2">
                          <Calendar size={16} className="mr-2" />
                          <span>
                            {item.date}
                            {item.tentative && (
                              <Asterisk
                                size={10}
                                className="inline ml-1 align-super text-climate-orange"
                              />
                            )}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                        {item.location && (
                          <p
                            className="text-sm mt-2 text-climate-blue/80"
                            dangerouslySetInnerHTML={{
                              __html: `${item.location}`,
                            }}
                          ></p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center flex flex-col gap-4">
          <a
            href={createGoogleCalendarLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center bg-climate-blue text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <Calendar size={18} className="text-white mr-2" />
            <span className="font-medium">
              Mark your calendars and stay on track!
            </span>
          </a>
          <p className="text-sm text-muted-foreground">
            <Asterisk size={10} className="inline mr-1 text-climate-orange" />
            Please note that the September and October mentorship sessions will be scheduled directly by each team and their mentor, based on mutual availability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;