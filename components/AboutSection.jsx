'use client'

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { personalInfo } from "@/lib/data";
import { Code2, Database, Server, Briefcase } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "3+ Years",
      description: "Backend Development"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Scalable APIs",
      description: "Django & FastAPI"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Systems",
      description: "PostgreSQL & Python"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Production Grade",
      description: "Docker & CI/CD"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building Reliable Backend Systems
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-cyan-400 font-medium mb-4">
              {personalInfo.tagline}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <div className="space-y-3">
              <p className="text-white font-semibold mb-3">Key Highlights:</p>
              {personalInfo.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-cyan-400 mb-3">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;