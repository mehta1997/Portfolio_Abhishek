'use client'

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Code2 } from "lucide-react";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category))
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0f0f0f] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
            Projects
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Work
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-8"></div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                onClick={() => setFilter(category)}
                className={`${
                  filter === category
                    ? "bg-cyan-500/20 border-cyan-500 text-cyan-400"
                    : "border-gray-700 bg-gray-900/50 text-gray-300 hover:bg-gray-800"
                } transition-all duration-200 capitalize`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="p-8 bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              {/* Project Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="h-6 w-6" />
                </div>
                {project.featured && (
                  <Badge className="bg-blue-500/20 border-blue-500/30 text-blue-400 hover:bg-blue-500/30">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Project Info */}
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                {project.title}
              </h4>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="bg-gray-800/50 border-gray-700 text-gray-300 text-xs"
                  >
                    {tech}
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

export default ProjectsSection;