import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            <span className="font-bold text-xl">Aqib Javaid</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:aqibjavaid817@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}