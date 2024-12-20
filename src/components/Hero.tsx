import React from 'react';
import { Cloud, Code, GitBranch, Terminal } from 'lucide-react';
import CloudLogos from './CloudLogos';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-4 mb-6">
            {[Cloud, Code, GitBranch, Terminal].map((Icon, index) => (
              <div key={index} className="animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                <Icon className="w-8 h-8 text-blue-400" />
              </div>
            ))}
          </div>
          <h1 className="text-5xl font-bold mb-6">Aqib Javaid</h1>
          <h2 className="text-3xl text-blue-400 mb-8">Senior DevOps Engineer</h2>
          <p className="max-w-2xl text-lg text-gray-300 mb-4">
            AWS DevOps Engineer Professional with expertise in optimizing and automating software development and deployment processes.
            Specializing in cloud architecture, containerization, and infrastructure automation.
          </p>
          <p className="max-w-2xl text-lg text-gray-300 mb-10">
            Based in Gullberg, Lahore • aqibjavaid817@gmail.com • +923167339249
          </p>
          <div className="flex gap-6 mb-12">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              View Projects
            </button>
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition-colors">
              Download Resume
            </button>
          </div>
          <CloudLogos />
        </div>
      </div>
    </section>
  );
}