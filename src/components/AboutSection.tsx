
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Target, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const missions = [
    "Deliver exceptional cyber forensic services that empower organizations to mitigate risks, protect their reputation, and comply with industry regulations.",
    "Provide timely, accurate, and actionable insights to help clients understand the root causes of cyber attacks and prevent future occurrences."
  ];

  const expertise = [
    {
      icon: Users,
      title: 'Deep Technical Knowledge',
      description: 'Our team possesses extensive experience in various digital forensics techniques and tools.'
    },
    {
      icon: Award,
      title: 'Industry Best Practices',
      description: 'We adhere to industry-leading standards and methodologies to ensure the highest quality of service.'
    },
    {
      icon: Target,
      title: 'Client-Centric Approach',
      description: 'We prioritize our clients\' needs and work closely with them to understand their unique challenges.'
    }
  ];

  const whyChooseUs = [
    'Proven track record with successful results for clients of all sizes',
    'Cutting-edge technology and the latest investigative tools',
    'Commitment to confidentiality and data integrity',
    'Personalized service tailored to each client\'s specific needs'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">GCFI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We are a leading ISO 9001:2015 & ISO/IEC 27037:2012 certified provider of advanced cyber forensic services, 
            dedicated to safeguarding your digital assets and protecting your organization from the ever-evolving threat landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-6 w-6 text-blue-600 mr-2" />
              Our Mission
            </h3>
            <div className="space-y-4">
              {missions.map((mission, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{mission}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              Why Choose Us
            </h3>
            <div className="space-y-4">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Expertise
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <item.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
