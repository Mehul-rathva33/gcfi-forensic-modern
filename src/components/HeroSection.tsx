
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Search, Zap, Eye, Users } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F7F7]">
      {/* Particle Network Background */}
      <ParticleNetwork />

      {/* Floating Icons */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
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
        <div className="absolute top-32 right-1/4 animate-pulse">
          <Users className="h-12 w-12 text-red-600" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 z-10">
        <div className="text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 glass-card rounded-full text-[#F45B2A] text-sm font-semibold animate-pulse border border-[#F45B2A]/20">
                <Shield className="w-4 h-4 mr-2" />
                ISO Certified Cyber Forensics Expert
              </div>
              
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2B2B2B] leading-tight">
                <span className="bg-gradient-to-r from-[#F45B2A] to-[#FF7A4D] bg-clip-text text-transparent">
                  Gujarat Cyber
                </span>
                <br />
                <span className="text-[#2B2B2B]">Forensic &</span>
                <br />
                <span className="bg-gradient-to-r from-[#FF7A4D] to-[#F45B2A] bg-clip-text text-transparent">
                  Investigations
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl text-[#6E6E6E] max-w-3xl mx-auto leading-relaxed">
                Uncover digital truth with our advanced cyber forensic solutions. 
                We investigate, analyze, and secure your digital world against evolving cyber threats 
                with precision and expertise.
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
              <div className="text-center p-6 glass-card rounded-xl border border-[#F45B2A]/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-[#F45B2A] mb-2">1000+</div>
                <div className="text-sm text-[#6E6E6E] font-medium">Cases Solved</div>
              </div>
              <div className="text-center p-6 glass-card rounded-xl border border-[#F45B2A]/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-[#F45B2A] mb-2">24/7</div>
                <div className="text-sm text-[#6E6E6E] font-medium">Support Available</div>
              </div>
              <div className="text-center p-6 glass-card rounded-xl border border-[#F45B2A]/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl font-bold text-[#F45B2A] mb-2">99.9%</div>
                <div className="text-sm text-[#6E6E6E] font-medium">Success Rate</div>
              </div>
              <div className="text-center p-6 glass-card rounded-xl border border-[#F45B2A]/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-4xl font-bold text-[#F45B2A] mb-2">15+</div>
                <div className="text-sm text-[#6E6E6E] font-medium">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#F45B2A] to-[#FF7A4D] hover:from-[#F45B2A]/90 hover:to-[#FF7A4D]/90 text-white px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Investigation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#F45B2A] text-[#F45B2A] hover:bg-[#F45B2A] hover:text-white px-10 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 rounded-xl glass-card"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-[#F45B2A]/20">
              <p className="text-sm text-[#6E6E6E] mb-4 font-medium">Trusted by leading organizations</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="px-4 py-2 glass-card rounded-lg border border-[#F45B2A]/10">
                  <span className="text-[#2B2B2B] font-semibold">ISO 27001</span>
                </div>
                <div className="px-4 py-2 glass-card rounded-lg border border-[#F45B2A]/10">
                  <span className="text-[#2B2B2B] font-semibold">CERT-IN</span>
                </div>
                <div className="px-4 py-2 glass-card rounded-lg border border-[#F45B2A]/10">
                  <span className="text-[#2B2B2B] font-semibold">Gujarat Police</span>
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
