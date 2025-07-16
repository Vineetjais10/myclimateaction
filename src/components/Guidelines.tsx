import React, { useRef, useEffect } from "react";
import { Check, FileText, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import jsPDF from "jspdf";

const guidelines = [
  {
    title: "Team Composition",
    details: [
      "Teams must consist of 2-5 students aged 14-18 years.",
      "Each team must have a nominating adult (teacher/ parent/guardian) who will be the main point of contact.",
      "Team composition can be changed till the time of concept note submission (13th July).",
      "A student cannot be part of more than one team",
    ],
  },
  {
    title: "Theme",
    details: [
      "Projects must address one of the three competition themes: Energy, Waste Management, or Natural Resources.",
      "Teams may change their selected theme until 11th June. If you wish to make a change, please inform the organisers via email.",
    ],
  },
  {
    title: "Submission Categories",
    details: [
      {
        text: "Projects may be submitted under any one of the two submission categories. Organisers will share detailed guidelines for each during orientation:",
        subDetails: [
          {
            text: "<strong>1. Working Prototype:</strong> Teams can develop a working prototype that addresses a climate challenge. This category focuses on creating tangible solutions with practical applications.",
            subDetails: [],
          },
          {
            text: "<strong>2. Short Film:</strong> Teams can create a short film showcasing a climate-related problem and current solutions. This category allows students to define a problem visually, identify solutions in diverse geographies, and include interviews with stakeholders.",
            subDetails: [],
          },
        ],
      },
      {
        text: "Download <a href='/static/Detailed-Guidelines_Final-Submission_CAC2025.pdf' class='text-climate-blue underline'>Detailed Submission Guidelines</a>.",
        subDetails: [],
      }
    ],
  },
  {
    title: "Originality",
    details: [
      "All submissions must be original work created during the competition period. Plagiarism or use of pre-existing projects will result in disqualification.",
    ],
  },
  {
    title: "Documentation",
    details: [
      "Teams must document their process, including research, design iterations, and testing in a project journal. It should also be part of their final presentation.",
    ],
  },
  {
    title: "Feasibility",
    details: [
      "Solutions should be feasible, scalable, and have a clear implementation plan.",
    ],
  },
  {
    title: "Community Engagement",
    details: [
      "Teams are encouraged to collaborate with local communities to understand real-world needs and incorporate community feedback in their solutions.",
    ],
  },
  {
    title: "Resources & Support",
    details: [
      "Regular workshops and mentorship sessions will be provided to support teams throughout the competition.",
      "Access to resources such as research materials, tools, and expert advice will be available.",
    ],
  },
  {
    title: "Judging Criteria",
    details: [
      {
        text: "Projects will be judged on the following criteria:",
        subDetails: [
          {
            text: "<strong>1. Innovation:</strong> Creativity and originality of the solution.",
            subDetails: [],
          },
          {
            text: "<strong>2. Impact:</strong> Potential positive impact on the climate and community.",
            subDetails: [],
          },
          {
            text: "<strong>3. Feasibility:</strong> Practicality and scalability of the solution.",
            subDetails: [],
          },
          {
            text: "<strong>4. Presentation:</strong> Clarity, organization, and overall quality of the presentation.",
            subDetails: [],
          },
        ],
      },
    ],
  },
  {
    title: "Final Presentation",
    details: [
      "Finalists must prepare a 5-minute (maximum 8-minutes including buffer time) presentation for the judging panel.",
      "Presentations should include an overview of the project, key findings, and the implementation plan.",
      "Project prototype and/or video may be accompanied with other visual aids like slides or posters.",
      "Teams should bring their design document along with them for review if asked for."
    ],
  },
  {
    title: "Intellectual Property",
    details: [
      "Intellectual property rights remain with the participants.",
      "Projects may be featured in competition promotions, with appropriate credit given to the teams.",
    ],
  },
  {
    title: "Code of Conduct",
    details: [
      "All participants must adhere to the competition's and organiser's code of conduct, which includes respectful behavior, integrity, and collaboration.",
      "Any form of misconduct, including cheating or harassment, will result in disqualification.",
    ],
  },
  {
    title: "Final Decision",
    details: [
      "In case of any disagreement, the decision of the organisers will be final.",
    ],
  },
];

const generatePDF = () => {
  const doc = new jsPDF();

  // Set document properties
  doc.setProperties({
    title: "Climate Challenge Guidelines",
    subject: "Competition Guidelines",
    author: "Climate Action Competition",
    keywords: "climate, competition, guidelines",
    creator: "Climate Action Competition",
  });

  // Create a text representation of the guidelines
  let yPosition = 20;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("COMPETITION GUIDELINES", 105, yPosition, { align: "center" });
  yPosition += 15;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  guidelines.forEach((guideline, index) => {
    // Check if we need a new page
    if (yPosition > 270) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFont("helvetica", "bold");
    doc.text(`${guideline.title}`, 20, yPosition);
    doc.setFont("helvetica", "normal");
    yPosition += 8;

    guideline.details.forEach((detail) => {
      // Check if we need a new page
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }

      if (typeof detail === "string") {
        // Simple string detail
        doc.text(`• ${detail}`, 25, yPosition);
        yPosition += 8;
      } else if (detail.text) {
        // Complex detail with sub-details
        const plainText = detail.text.replace(/<[^>]*>/g, "");
        doc.text(`• ${plainText}`, 25, yPosition);
        yPosition += 8;

        if (detail.subDetails && detail.subDetails.length > 0) {
          detail.subDetails.forEach((subDetail) => {
            // Check if we need a new page
            if (yPosition > 270) {
              doc.addPage();
              yPosition = 20;
            }

            if (typeof subDetail === "string") {
              doc.text(`  ◦ ${subDetail}`, 30, yPosition);
              yPosition += 8;
            } else {
              const plainSubText = subDetail.text.replace(/<[^>]*>/g, "");
              doc.text(`  ◦ ${plainSubText}`, 30, yPosition);
              yPosition += 8;

              if (subDetail.subDetails && subDetail.subDetails.length > 0) {
                subDetail.subDetails.forEach((subSubDetail) => {
                  // Check if we need a new page
                  if (yPosition > 270) {
                    doc.addPage();
                    yPosition = 20;
                  }
                  doc.text(`    - ${subSubDetail}`, 35, yPosition);
                  yPosition += 8;
                });
              }
            }
          });
        }
      }
    });

    yPosition += 5; // Add some extra space between sections
  });

  // Save the PDF
  doc.save("climate_challenge_guidelines.pdf");
};

const Guidelines: React.FC = () => {
  const guidelinesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items =
            guidelinesRef.current?.querySelectorAll(".guideline-item");
          items?.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate-fade-in");
            }, index * 100);
          });
          observer.disconnect();
        }
      });
    }, options);

    if (guidelinesRef.current) {
      observer.observe(guidelinesRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderDetail = (detail: any) => {
    if (typeof detail === "string") {
      return (
        <div className="flex items-start text-white/80">
          <div className="ml-1 mr-3 mt-1.5">
            <div className="w-2 h-2 rounded-full bg-climate-orange"></div>
          </div>
          <p className="flex-1">{detail}</p>
        </div>
      );
    } else if (detail.text) {
      return (
        <div className="flex flex-col space-y-3">
          <div className="flex items-start text-white/80">
            <div className="ml-1 mr-3 mt-1.5">
              <div className="w-2 h-2 rounded-full bg-climate-orange"></div>
            </div>
            <p
              className="flex-1"
              dangerouslySetInnerHTML={{ __html: detail.text }}
            ></p>
          </div>

          {detail.subDetails && detail.subDetails.length > 0 && (
            <div className="ml-11 space-y-3">
              {detail.subDetails.map(
                (subDetail: any, subDetailIndex: number) => (
                  <div key={subDetailIndex}>
                    <p
                      className="flex-1"
                      dangerouslySetInnerHTML={{ __html: subDetail.text }}
                    ></p>

                    {subDetail.subDetails &&
                      subDetail.subDetails.length > 0 && (
                        <div className="ml-6 mt-2 space-y-2">
                          {subDetail.subDetails.map(
                            (
                              subSubDetail: string,
                              subSubDetailIndex: number
                            ) => (
                              <div
                                key={subSubDetailIndex}
                                className="flex items-start text-white/80"
                              >
                                <div className="ml-1 mr-3 mt-1.5">
                                  <Circle
                                    size={6}
                                    className="text-climate-green"
                                    fill="currentColor"
                                  />
                                </div>
                                <p className="flex-1">{subSubDetail}</p>
                              </div>
                            )
                          )}
                        </div>
                      )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section
      id="guidelines"
      className="section-padding bg-climate-dark text-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
            COMPETITION GUIDELINES
          </div>
          <div></div>
          <h2 className="section-title text-center mb-6 text-white">
            Rules for Participation
          </h2>
          <p className="section-subtitle text-white/80">
            Follow these guidelines to ensure your project meets all
            requirements and has the best chance of success in the competition.
          </p>
        </div>

        <div
          ref={guidelinesRef}
          className="max-w-5xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl md:p-8 md:border md:border-white/10 shadow-xl overflow-hidden"
        >
          <div className="grid gap-6">
            {guidelines.map((guideline, index) => (
              <div
                key={index}
                className={cn(
                  "guideline-item flex flex-col p-4 md:rounded-lg transition-all opacity-0",
                  index % 2 === 0 ? "bg-white/5" : "bg-transparent"
                )}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-6 h-6 rounded-full bg-climate-blue flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                  </div>
                  <div className="text-white/90">
                    <p className="mb-2">{guideline.title}</p>
                  </div>
                </div>

                {guideline.details.length > 0 && (
                  <div className="ml-10 mt-2 space-y-3">
                    {guideline.details.map((detail, detailIndex) => (
                      <div key={detailIndex}>{renderDetail(detail)}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/static/Guidelines for Climate Action Competition 2025.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-white text-climate-dark rounded-full transition-all hover:bg-opacity-90 shadow-lg btn-hover-effect"
            >
              <FileText size={18} className="mr-2" />
              Download Full Guidelines
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
