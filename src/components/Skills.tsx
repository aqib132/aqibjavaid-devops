import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const skills = {
  'Cloud & Infrastructure': [
    'AWS (IAAS, PAAS, SAAS)',
    'Azure',
    'GCP',
    'Digital Ocean Cloud',
    'Huawei Cloud',
    'WHM & cPanel',
    'OVM',
    'VMware',
  ],
  'AWS Services': [
    'Lambda',
    'API Gateway',
    'EC2',
    'S3',
    'RDS',
    'Elastic Beanstalk',
    'VPC',
    'NAT Gateway',
    'Internet Gateway',
    'IAM',
    'Dynmo DB',
    'CloudWatch',
    'Firewall Manager',
    'KMS',
    'SNS & SQS',
    'Elastic Cache',
    'Code Commit',
    'Code Deploy',
    'Code Build',
    'Code Pipeline',
  ],
  'DevOps Tools': [
    'Jenkins',
    'Ansible',
    'Docker',
    'Docker Compose',
    'GitHub Actions',
    'Bitbucket Pipelines',
    'Azure Devops Pipelines',
    'SonarQube',
    'Promethous',
    'Grafana',
    'ELK',
    'Kubernetes',
    'HELM',
    'Terraform',
  ],
  'Monitoring & Security': [
    'SonarQube',
    'Promethous',
    'Grafana',
    'ELK',
    'AWS CloudWatch',
  ],
  'Web Servers': [
    'Apache',
    'Nginx',
    'Treafik',
    'IIS',
  ],
  'Spoken Languages': [
    'English (Fluent)',
    'Urdu (Native)',
    'Arabic (Basic)',
    'Hindi (Native)',
  ],
  'Scriptive Languages': [
    'Bash',
    'PowerShell',
    'Python',
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}