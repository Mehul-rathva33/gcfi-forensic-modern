
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Search, Zap, Eye, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-pulse">
          <Shield className="h-16 w-16 text-blue-600" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce">
          <Lock className="h-12 w-12 text-purple-600" />
        </div>
        <div className="absolute bottom-32 left-40 animate-pulse">
          <Search className="h-20 w-20 text-cyan-600" />
        </div>
        <div className="absolute top-60 left-1/3 animate-ping">
          <Zap className="h-8 w-8 text-yellow-600" />
        </div>
        <div className="absolute bottom-40 right-20 animate-bounce">
          <Eye className="h-14 w-14 text-green-600" />
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium animate-pulse">
                <Shield className="w-4 h-4 mr-2" />
                ISO Certified Cyber Forensics
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Gujarat Cyber
                </span>
                <br />
                <span className="text-gray-900">Forensic &</span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Investigations
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Uncover digital truth with our advanced cyber forensic solutions. 
                We investigate, analyze, and secure your digital world against evolving threats.
              </p>
            </div>

            {/* Statistics with Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Cases Solved</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-purple-600">99.9%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-cyan-50 rounded-lg border border-cyan-100 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-cyan-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Investigation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Enhanced Hero Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 rounded-3xl p-8 border border-gray-200 shadow-2xl">
              {/* Cyber Security Dashboard Mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono text-green-600">SECURE CONNECTION ESTABLISHED</span>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">GCFI.SYS</div>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center p-2 bg-white rounded border border-blue-200">
                    <span className="text-blue-600">Threat Detection:</span>
                    <span className="text-green-600 animate-pulse">✓ ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded border border-purple-200">
                    <span className="text-purple-600">Forensic Analysis:</span>
                    <span className="text-green-600 animate-pulse">✓ SCANNING</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded border border-cyan-200">
                    <span className="text-cyan-600">Data Recovery:</span>
                    <span className="text-yellow-600 animate-bounce">⚡ READY</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded border border-green-200">
                    <span className="text-green-600">Evidence Chain:</span>
                    <span className="text-green-600">✓ SECURED</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                  <div className="text-xs text-blue-600 mb-2 font-semibold">SECURITY METRICS</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">99.9%</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">&lt; 2min</div>
                      <div className="text-xs text-gray-500">Response Time</div>
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded animate-pulse" style={{ width: '99.9%' }}></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs font-mono text-green-600">ALL SYSTEMS OPERATIONAL</span>
                  </div>
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
