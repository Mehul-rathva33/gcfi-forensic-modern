
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Search, Zap, Eye, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#F7F7F7] to-[#F4F4F4] overflow-hidden">
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
            className="absolute w-2 h-2 bg-[#F45B2A] rounded-full opacity-20 animate-pulse"
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
              <div className="inline-flex items-center px-4 py-2 glass-effect border border-[#F45B2A]/30 rounded-full text-[#F45B2A] text-sm font-medium animate-pulse">
                <Shield className="w-4 h-4 mr-2" />
                ISO Certified Cyber Forensics
              </div>
              
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
              
              <p className="text-xl text-[#6E6E6E] max-w-2xl mx-auto leading-relaxed">
                Uncover digital truth with our advanced cyber forensic solutions. 
                We investigate, analyze, and secure your digital world against evolving threats.
              </p>
            </div>

            {/* Statistics with Animation */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4 glass-card rounded-lg border border-[#F45B2A]/20 shadow-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-[#F45B2A]">1000+</div>
                <div className="text-sm text-[#6E6E6E]">Cases Solved</div>
              </div>
              <div className="text-center p-4 glass-card rounded-lg border border-[#F45B2A]/20 shadow-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold text-[#F45B2A]">24/7</div>
                <div className="text-sm text-[#6E6E6E]">Support Available</div>
              </div>
              <div className="text-center p-4 glass-card rounded-lg border border-[#F45B2A]/20 shadow-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-[#F45B2A]">99.9%</div>
                <div className="text-sm text-[#6E6E6E]">Success Rate</div>
              </div>
              <div className="text-center p-4 glass-card rounded-lg border border-[#F45B2A]/20 shadow-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-[#F45B2A]">15+</div>
                <div className="text-sm text-[#6E6E6E]">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#F45B2A] to-[#FF7A4D] hover:from-[#F45B2A]/90 hover:to-[#FF7A4D]/90 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Investigation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-[#F45B2A] text-[#F45B2A] hover:bg-[#F45B2A] hover:text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
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
