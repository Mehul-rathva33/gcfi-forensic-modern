
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Search, Zap, Eye, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#FAF5F0] to-[#FFF8F6] overflow-hidden">
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
            className="absolute w-2 h-2 bg-[#FF7043] rounded-full opacity-20 animate-pulse"
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
        <div className="text-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#FF7043]/10 border border-[#FF7043]/30 rounded-full text-[#FF7043] text-sm font-medium animate-pulse">
                <Shield className="w-4 h-4 mr-2" />
                ISO Certified Cyber Forensics
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                <span className="bg-gradient-to-r from-[#FF7043] to-[#FFAD91] bg-clip-text text-transparent">
                  Gujarat Cyber
                </span>
                <br />
                <span className="text-black">Forensic &</span>
                <br />
                <span className="bg-gradient-to-r from-[#FFAD91] to-[#FF7043] bg-clip-text text-transparent">
                  Investigations
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Uncover digital truth with our advanced cyber forensic solutions. 
                We investigate, analyze, and secure your digital world against evolving threats.
              </p>
            </div>

            {/* Statistics with Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 bg-white/70 rounded-lg border border-[#FF7043]/20 shadow-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-[#FF7043]">1000+</div>
                <div className="text-sm text-gray-600">Cases Solved</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-lg border border-[#FF7043]/20 shadow-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold text-[#FF7043]">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-lg border border-[#FF7043]/20 shadow-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-[#FF7043]">99.9%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-white/70 rounded-lg border border-[#FF7043]/20 shadow-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-[#FF7043]">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#FF7043] to-[#FFAD91] hover:from-[#FF7043]/90 hover:to-[#FFAD91]/90 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Investigation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#FF7043] text-[#FF7043] hover:bg-[#FF7043] hover:text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
