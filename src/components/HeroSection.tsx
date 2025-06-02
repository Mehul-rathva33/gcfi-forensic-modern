
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-6xl">
          <Shield className="h-16 w-16 text-blue-600" />
        </div>
        <div className="absolute top-40 right-32 text-6xl">
          <Lock className="h-12 w-12 text-blue-600" />
        </div>
        <div className="absolute bottom-32 left-40 text-6xl">
          <Search className="h-20 w-20 text-blue-600" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Advanced
                <span className="text-blue-600"> Cyber Forensic</span>
                <br />
                Solutions
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                ISO 9001:2015 & ISO/IEC 27037:2012 certified provider of cutting-edge cyber forensic services, 
                safeguarding your digital assets from evolving threats.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">24/7 Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Expert Analysis</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono">System Monitoring Active</span>
                </div>
                
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Threat Detection:</span>
                    <span className="text-green-400">✓ Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Forensic Analysis:</span>
                    <span className="text-green-400">✓ Running</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Data Recovery:</span>
                    <span className="text-green-400">✓ Available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Incident Response:</span>
                    <span className="text-yellow-400">⚡ Ready</span>
                  </div>
                </div>

                <div className="bg-blue-500/30 rounded-lg p-4">
                  <div className="text-xs text-blue-200 mb-2">Security Status</div>
                  <div className="text-2xl font-bold">98.7% Secure</div>
                  <div className="text-xs text-blue-200">Last scan: 2 minutes ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
