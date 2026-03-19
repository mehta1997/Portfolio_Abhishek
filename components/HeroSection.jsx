'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6">
          <span className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
            Available for opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Hi, I&apos;m </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {personalInfo.name}
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-medium">
          {personalInfo.title}
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.subtitle}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-gray-200 px-8 transition-all duration-300 hover:scale-105"
            onClick={() => window.open(personalInfo.github, "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View GitHub
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-gray-200 px-8 transition-all duration-300 hover:scale-105"
            onClick={() => window.open(personalInfo.linkedin, "_blank")}
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-cyan-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;