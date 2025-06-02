
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Monitor, 
  Network, 
  Smartphone, 
  Camera, 
  Database, 
  HardDrive, 
  Usb, 
  Disc,
  Shield,
  FileText,
  Eye,
  Lock,
  Zap,
  Search
} from 'lucide-react';

const ServicesSection = () => {
  const forensicServices = [
    {
      icon: Monitor,
      title: 'Computer Forensics',
      description: 'In-depth analysis of computer systems to identify digital evidence and trace cyber attacks.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Network,
      title: 'Network Forensics',
      description: 'Investigation of network traffic and communications to identify security breaches.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Forensics',
      description: 'Comprehensive analysis of smartphones and tablets for digital evidence recovery.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Camera,
      title: 'Digital Media Forensics',
      description: 'Analysis of digital images, audio, and video files for authenticity and evidence.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Memory Forensics',
      description: 'Analysis of system memory to uncover hidden processes and malware.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Incident Response',
      description: 'Swift response to security breaches including containment and recovery.',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const dataRecoveryServices = [
    {
      icon: HardDrive,
      title: 'Hard Drive Recovery',
      description: 'Desktop, laptop, and enterprise hard drive data recovery services.',
      gradient: 'from-slate-500 to-gray-600'
    },
    {
      icon: Usb,
      title: 'USB Data Recovery',
      description: 'Recovery of lost data from USB drives, flash drives, and memory cards.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Disc,
      title: 'CD/DVD Recovery',
      description: 'Professional recovery services for damaged optical media.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'File Recovery',
      description: 'Recovery of deleted files, documents, photos, and multimedia content.',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  const additionalServices = [
    {
      icon: Eye,
      title: 'Threat Intelligence',
      description: 'Proactive monitoring and analysis of emerging cyber threats.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Search,
      title: 'Vulnerability Assessment',
      description: 'Identification and remediation of IT infrastructure vulnerabilities.',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cyber forensic and data recovery solutions tailored to protect and restore your digital assets.
          </p>
        </div>

        {/* Forensic Investigation Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Forensic Investigation Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forensicServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-gray-200 hover:border-transparent hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center relative overflow-hidden">
                  <div className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Recovery Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Data Recovery Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataRecoveryServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-gray-200 hover:border-transparent hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1 + 0.6}s`}}>
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-gray-200 hover:border-transparent hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1 + 1}s`}}>
                <CardHeader className="text-center">
                  <div className={`mx-auto mb-4 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
