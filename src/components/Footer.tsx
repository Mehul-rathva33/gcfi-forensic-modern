
import React from 'react';
import { Shield, Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F4F4F4] to-[#F7F7F7] border-t border-[#F45B2A]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-[#F45B2A]" />
              <span className="text-xl font-bold text-[#2B2B2B]">GCFI</span>
            </div>
            <p className="text-[#6E6E6E] mb-4">
              Leading provider of advanced cyber forensic services, protecting digital assets worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#6E6E6E] hover:text-[#F45B2A] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#6E6E6E] hover:text-[#F45B2A] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#2B2B2B]">Services</h3>
            <ul className="space-y-2 text-[#6E6E6E]">
              <li><a href="#" className="hover:text-[#F45B2A] transition-colors">Computer Forensics</a></li>
              <li><a href="#" className="hover:text-[#F45B2A] transition-colors">Network Forensics</a></li>
              <li><a href="#" className="hover:text-[#F45B2A] transition-colors">Mobile Forensics</a></li>
              <li><a href="#" className="hover:text-[#F45B2A] transition-colors">Data Recovery</a></li>
              <li><a href="#" className="hover:text-[#F45B2A] transition-colors">Incident Response</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#2B2B2B]">Quick Links</h3>
            <ul className="space-y-2 text-[#6E6E6E]">
              <li><a href="#home" className="hover:text-[#F45B2A] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#F45B2A] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#F45B2A] transition-colors">Services</a></li>
              <li><a href="#certifications" className="hover:text-[#F45B2A] transition-colors">Certifications</a></li>
              <li><a href="#contact" className="hover:text-[#F45B2A] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-[#2B2B2B]">Contact Info</h3>
            <div className="space-y-3 text-[#6E6E6E]">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#F45B2A] mt-0.5" />
                <div>
                  <p>402 Onyx Business Center</p>
                  <p>Akshar Chowk, Muj Mahuda</p>
                  <p>Vadodara, Gujarat, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#F45B2A]" />
                <div>
                  <p>+91 2654000744</p>
                  <p>+91 9825094090</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#F45B2A]" />
                <p>info@gcfi.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F45B2A]/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#6E6E6E] text-sm">
            © 2024 GCFI Cyber Forensics. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-[#6E6E6E] hover:text-[#F45B2A] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#6E6E6E] hover:text-[#F45B2A] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-[#6E6E6E] hover:text-[#F45B2A] text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
