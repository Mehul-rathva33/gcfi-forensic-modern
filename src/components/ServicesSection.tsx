
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Computer, 
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
  Lock
} from 'lucide-react';

const ServicesSection = () => {
  const forensicServices = [
    {
      icon: Computer,
      title: 'Computer Forensics',
      description: 'In-depth analysis of computer systems to identify digital evidence and trace cyber attacks.'
    },
    {
      icon: Network,
      title: 'Network Forensics',
      description: 'Investigation of network traffic and communications to identify security breaches.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Forensics',
      description: 'Comprehensive analysis of smartphones and tablets for digital evidence recovery.'
    },
    {
      icon: Camera,
      title: 'Digital Media Forensics',
      description: 'Analysis of digital images, audio, and video files for authenticity and evidence.'
    },
    {
      icon: Database,
      title: 'Memory Forensics',
      description: 'Analysis of system memory to uncover hidden processes and malware.'
    },
    {
      icon: Shield,
      title: 'Incident Response',
      description: 'Swift response to security breaches including containment and recovery.'
    }
  ];

  const dataRecoveryServices = [
    {
      icon: HardDrive,
      title: 'Hard Drive Recovery',
      description: 'Desktop, laptop, and enterprise hard drive data recovery services.'
    },
    {
      icon: Usb,
      title: 'USB Data Recovery',
      description: 'Recovery of lost data from USB drives, flash drives, and memory cards.'
    },
    {
      icon: Disc,
      title: 'CD/DVD Recovery',
      description: 'Professional recovery services for damaged optical media.'
    },
    {
      icon: FileText,
      title: 'File Recovery',
      description: 'Recovery of deleted files, documents, photos, and multimedia content.'
    }
  ];

  const additionalServices = [
    {
      icon: Eye,
      title: 'Threat Intelligence',
      description: 'Proactive monitoring and analysis of emerging cyber threats.'
    },
    {
      icon: Lock,
      title: 'Vulnerability Assessment',
      description: 'Identification and remediation of IT infrastructure vulnerabilities.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cyber forensic and data recovery solutions tailored to protect and restore your digital assets.
          </p>
        </div>

        {/* Forensic Investigation Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Forensic Investigation Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forensicServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Data Recovery Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataRecoveryServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-blue-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
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
