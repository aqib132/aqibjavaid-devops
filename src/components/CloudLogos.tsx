import React from 'react';

const cloudLogos = [
  {
    name: 'AWS',
    url: 'https://d0.awsstatic.com/logos/powered-by-aws.png',
  },
  {
    name: 'Azure',
    url: 'https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-brand/icons/Azure.svg',
  },
  {
    name: 'Google Cloud',
    url: 'https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png',
  },
  {
    name: 'Kubernetes',
    url: 'https://kubernetes.io/images/kubernetes-horizontal-color.png',
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png',
  },
];

export default function CloudLogos() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {cloudLogos.map((logo) => (
        <div key={logo.name} className="w-32 h-24 relative group bg-white/10 rounded-lg p-4 flex items-center justify-center">
          <img
            src={logo.url}
            alt={logo.name}
            className="w-full h-full object-contain transition-transform group-hover:scale-110"
          />
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-300">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  );
}