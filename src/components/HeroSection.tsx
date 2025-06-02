
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Search, Zap, Eye, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 animate-pulse">
          <Shield className="h-16 w-16 text-cyan-400" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce">
          <Lock className="h-12 w-12 text-purple-400" />
        </div>
        <div className="absolute bottom-32 left-40 animate-pulse">
          <Search className="h-20 w-20 text-blue-400" />
        </div>
        <div className="absolute top-60 left-1/3 animate-ping">
          <Zap className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="absolute bottom-40 right-20 animate-bounce">
          <Eye className="h-14 w-14 text-green-400" />
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-pulse"
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
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium animate-pulse">
                <Shield className="w-4 h-4 mr-2" />
                ISO Certified Cyber Forensics
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Digital
                </span>
                <br />
                <span className="text-white">Detective</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Agency
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Uncover digital truth with our advanced cyber forensic solutions. 
                We investigate, analyze, and secure your digital world against evolving threats.
              </p>
            </div>

            {/* Key Features with Animation */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Shield className="h-6 w-6 text-cyan-400" />
                <span className="text-sm font-medium text-gray-200">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Zap className="h-6 w-6 text-yellow-400" />
                <span className="text-sm font-medium text-gray-200">24/7 Response</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Users className="h-6 w-6 text-purple-400" />
                <span className="text-sm font-medium text-gray-200">Expert Team</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Investigation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Enhanced Hero Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="relative bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-2xl">
              {/* Cyber Security Dashboard Mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono text-green-400">SECURE CONNECTION ESTABLISHED</span>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">GCFI.SYS</div>
                </div>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center p-2 bg-black/30 rounded border border-cyan-500/30">
                    <span className="text-cyan-300">Threat Detection:</span>
                    <span className="text-green-400 animate-pulse">✓ ACTIVE</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-black/30 rounded border border-purple-500/30">
                    <span className="text-purple-300">Forensic Analysis:</span>
                    <span className="text-green-400 animate-pulse">✓ SCANNING</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-black/30 rounded border border-blue-500/30">
                    <span className="text-blue-300">Data Recovery:</span>
                    <span className="text-yellow-400 animate-bounce">⚡ READY</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-black/30 rounded border border-green-500/30">
                    <span className="text-green-300">Evidence Chain:</span>
                    <span className="text-green-400">✓ SECURED</span>
                  </div>
                </div>

                <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/30">
                  <div className="text-xs text-cyan-300 mb-2">SECURITY METRICS</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-white">98.7%</div>
                      <div className="text-xs text-gray-400">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">&lt; 2min</div>
                      <div className="text-xs text-gray-400">Response Time</div>
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-gray-700 rounded">
                    <div className="h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded animate-pulse" style={{ width: '98.7%' }}></div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs font-mono text-green-400">ALL SYSTEMS OPERATIONAL</span>
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
