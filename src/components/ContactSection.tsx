
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail, MessageSquare, Navigation, Building2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:vs@cdfii.in?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email Client Opened",
      description: "Your default email client has been opened with the message details.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Building2,
      title: 'Address',
      details: ['402 Onyx Business Center', 'Akshar Chowk, Muj Mahuda', 'Vadodara, Gujarat, India'],
      color: 'bg-[#F45B2A]'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 2654000744', '+91 9825094090'],
      color: 'bg-[#F45B2A]'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday', '09:00 AM - 06:00 PM'],
      color: 'bg-[#F45B2A]'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['vs@cdfii.in', 'support@gcfi.com'],
      color: 'bg-[#F45B2A]'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#F4F4F4] to-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] mb-4">
            Contact <span className="bg-gradient-to-r from-[#F45B2A] to-[#FF7A4D] bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-[#6E6E6E] max-w-3xl mx-auto">
            Ready to secure your digital assets? Get in touch with our cyber forensics experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0 glass-card animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-[#F45B2A] to-[#FF7A4D] text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <MessageSquare className="h-6 w-6 mr-2" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#F45B2A] focus:ring-[#F45B2A] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#F45B2A] focus:ring-[#F45B2A] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#F45B2A] focus:ring-[#F45B2A] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#F45B2A] focus:ring-[#F45B2A] transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2B2B2B] mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-[#F45B2A] focus:ring-[#F45B2A] transition-all duration-300"
                    placeholder="Please describe your requirements or inquiry..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#F45B2A] to-[#FF7A4D] hover:from-[#F45B2A]/90 hover:to-[#FF7A4D]/90 text-white py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 border-0 glass-card hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 ${info.color} rounded-xl shadow-lg`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-[#6E6E6E]">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp Contact */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500 rounded-xl shadow-lg">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#2B2B2B] mb-2">WhatsApp Support</h3>
                    <p className="text-[#6E6E6E] mb-3">Get instant support via WhatsApp</p>
                    <Button 
                      variant="outline" 
                      className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                      onClick={() => window.open('https://wa.me/919825094090', '_blank')}
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Map Section */}
        <div className="mt-20">
          <Card className="overflow-hidden shadow-2xl border-0 glass-card animate-fade-in" style={{animationDelay: '0.6s'}}>
            <CardHeader className="bg-gradient-to-r from-[#F45B2A] to-[#FF7A4D] text-white">
              <CardTitle className="text-2xl flex items-center">
                <MapPin className="h-6 w-6 text-white mr-2" />
                Find Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 relative">
              <div className="h-80 bg-gradient-to-br from-[#F7F7F7] via-[#F4F4F4] to-[#F7F7F7] flex items-center justify-center relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-[#F45B2A] rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random()}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="text-center text-[#2B2B2B] z-10 space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F45B2A]/20 rounded-full border-2 border-[#F45B2A] backdrop-blur-sm animate-pulse">
                    <MapPin className="h-10 w-10 text-[#F45B2A]" />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-2">Interactive Map Coming Soon</p>
                    <p className="text-[#6E6E6E] mb-1">402 Onyx Business Center</p>
                    <p className="text-[#6E6E6E] mb-4">Akshar Chowk, Muj Mahuda, Vadodara, Gujarat</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-[#F45B2A] text-[#F45B2A] hover:bg-[#F45B2A] hover:text-white transform hover:scale-105 transition-all duration-300"
                        onClick={() => window.open('https://maps.google.com/?q=402+Onyx+Business+Center+Akshar+Chowk+Muj+Mahuda+Vadodara+Gujarat', '_blank')}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        View on Google Maps
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-[#FF7A4D] text-[#FF7A4D] hover:bg-[#FF7A4D] hover:text-white transform hover:scale-105 transition-all duration-300"
                        onClick={() => window.open('https://maps.google.com/?q=402+Onyx+Business+Center+Akshar+Chowk+Muj+Mahuda+Vadodara+Gujarat&mode=driving', '_blank')}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
