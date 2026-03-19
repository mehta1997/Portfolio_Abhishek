'use client'

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import {
  Code2,
  Layers,
  Server,
  Database,
  BarChart3,
  Package,
  CheckCircle2
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="h-5 w-5" />,
      skills: skills.languages,
      color: "cyan"
    },
    {
      title: "Frameworks",
      icon: <Layers className="h-5 w-5" />,
      skills: skills.frameworks,
      color: "blue"
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: skills.backend,
      color: "cyan"
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5" />,
      skills: skills.databases,
      color: "blue"
    },
    {
      title: "Data Tools",
      icon: <BarChart3 className="h-5 w-5" />,
      skills: skills.dataTools,
      color: "cyan"
    },
    {
      title: "DevOps",
      icon: <Package className="h-5 w-5" />,
      skills: skills.devops,
      color: "blue"
    },
    {
      title: "Practices",
      icon: <CheckCircle2 className="h-5 w-5" />,
      skills: skills.practices,
      color: "cyan"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            Skills & Technologies
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-800">
                <div
                  className={`p-2 rounded-lg ${
                    category.color === "cyan"
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {category.icon}
                </div>
                <h4 className="text-lg font-bold text-white">
                  {category.title}
                </h4>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className={`${
                      category.color === "cyan"
                        ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20"
                        : "bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/20"
                    } transition-colors duration-200`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;