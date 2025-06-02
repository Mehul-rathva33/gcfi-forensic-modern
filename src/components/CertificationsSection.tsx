
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      icon: Award,
      details: 'International standard for quality management systems'
    },
    {
      title: 'ISO/IEC 27037:2012',
      description: 'Digital Evidence Guidelines',
      icon: Shield,
      details: 'Guidelines for identification, collection, acquisition and preservation of digital evidence'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated by internationally recognized certifications and standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-blue-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-fit group-hover:bg-blue-600 transition-colors duration-300">
                  <cert.icon className="h-12 w-12 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">{cert.description}</p>
                <p className="text-gray-600">{cert.details}</p>
                <div className="mt-6 flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-green-600">Certified & Verified</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100+</div>
              <div className="text-gray-600">Cases Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
