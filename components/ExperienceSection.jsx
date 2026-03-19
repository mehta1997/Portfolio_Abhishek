'use client'

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { experience } from "@/lib/data";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0f0f0f] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            Experience
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Journey
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-8 top-8 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0f0f0f] transform -translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <Card className="md:ml-20 p-8 bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                          {exp.role}
                        </h4>
                        <p className="text-xl text-cyan-400 font-semibold mb-3">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;