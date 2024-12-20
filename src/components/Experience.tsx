import React from 'react';
import { Building2, Calendar, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    company: 'Ikonic Solutions',
    position: 'Senior DevOps Engineer',
    period: '08/2023 - Present',
    location: 'Pakistan (Hybrid)',
    description: [
      'Spearheaded AWS infrastructure setup, optimizing for security and cost-effectiveness',
      'Orchestrated containerization using Docker and Kubernetes',
      'Implemented serverless computing with AWS Lambda and API Gateway',
      'Led database migrations using AWS DMS with minimal downtime',
      'Implemented IaC with Terraform and AWS CloudFormation',
      'Set up monitoring solutions using Prometheus and Grafana',
      'Mentored junior team members and fostered continuous learning',
    ],
  },
  {
    company: 'PureLogics',
    position: 'DevOps Engineer',
    period: '01/2022 - 07/2023',
    location: 'Pakistan',
    description: [
      'Built and automated software-defined data center using AWS/Azure/GCP/VMware',
      'Implemented CI/CD methodologies for applications and services',
      'Developed Infrastructure as Code using Terraform and Ansible',
      'Managed pipelines using Azure DevOps, Jenkins, and GitHub Actions',
      'Expanded team knowledge in containerization and Kubernetes with HELM',
    ],
  },
  {
    company: 'PureLogics',
    position: 'Associate DevOps Engineer',
    period: '02/2020 - 12/2021',
    location: 'Pakistan',
    description: [
      'Provided production systems support and implemented optimizations',
      'Built and maintained deployment and monitoring tools',
      'Utilized Agile Lifecycle tools like Confluence, JIRA, and Azure DevOps',
      'Managed Oracle, SQL, and MongoDB databases',
    ],
  },
];

const certifications = [
  {
    title: 'AWS DevOps Engineer Professional',
    year: '2023',
  },
  {
    title: 'AWS Solution Architect Associate',
    year: '2021',
  },
  {
    title: 'AZURE Administrator Associate',
    year: '2021',
  },
  {
    title: 'HCIA Security',
    year: '2020',
  },
];

const education = {
  degree: 'BSCS (Hons)',
  institution: 'University of Lahore',
  period: '2016-2021',
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Education</h2>
        
        {/* Work Experience */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-6 ml-6">
              <div className="flex items-center gap-4 mb-2">
                <Building2 className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold">{exp.company}</h3>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-2">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
                <span className="ml-2">| {exp.location}</span>
              </div>
              <h4 className="text-lg text-blue-600 mb-2">{exp.position}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="text-2xl font-bold mb-6">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-4 bg-slate-50 p-4 rounded-lg">
              <Award className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-semibold">{cert.title}</h4>
                <p className="text-gray-600">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <h3 className="text-2xl font-bold mb-6">Education</h3>
        <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-lg">
          <GraduationCap className="w-8 h-8 text-blue-500" />
          <div>
            <h4 className="text-xl font-semibold">{education.degree}</h4>
            <p className="text-gray-600">{education.institution}</p>
            <p className="text-gray-500">{education.period}</p>
          </div>
        </div>
      </div>
    </section>
  );
}