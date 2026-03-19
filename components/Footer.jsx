'use client'

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: personalInfo.github,
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: personalInfo.linkedin,
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${personalInfo.email}`,
      label: "Email"
    }
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {personalInfo.name}
              </span>
            </h3>
            <p className="text-gray-500 text-sm">{personalInfo.title}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            © {currentYear} {personalInfo.name}. Built with
            <Heart className="h-4 w-4 text-cyan-400 fill-cyan-400" />
            using React & FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;