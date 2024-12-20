import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
}

export default function ProjectCard({ title, description, tags, github, demo, image }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a href={github} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {demo && (
            <a href={demo} className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}