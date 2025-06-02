
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
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Building2,
      title: 'Address',
      details: ['402 Onyx Business Center', 'Akshar Chowk, Muj Mahuda', 'Vadodara, Gujarat, India'],
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 2654000744', '+91 9825094090'],
      color: 'bg-green-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday', '09:00 AM - 06:00 PM'],
      color: 'bg-purple-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@gcfi.com', 'support@gcfi.com'],
      color: 'bg-cyan-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to secure your digital assets? Get in touch with our cyber forensics experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white/70 backdrop-blur-sm animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <MessageSquare className="h-6 w-6 mr-2" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="Please describe your requirements or inquiry..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-500 border-0 bg-white/70 backdrop-blur-sm hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 ${info.color} rounded-xl shadow-lg`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
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
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp Support</h3>
                    <p className="text-gray-600 mb-3">Get instant support via WhatsApp</p>
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
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm animate-fade-in" style={{animationDelay: '0.6s'}}>
            <CardHeader className="bg-gradient-to-r from-slate-800 to-gray-900 text-white">
              <CardTitle className="text-2xl flex items-center">
                <MapPin className="h-6 w-6 text-cyan-400 mr-2" />
                Find Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 relative">
              <div className="h-80 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random()}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="text-center text-white z-10 space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 rounded-full border-2 border-cyan-400 backdrop-blur-sm animate-pulse">
                    <MapPin className="h-10 w-10 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-2">Interactive Map Coming Soon</p>
                    <p className="text-gray-300 mb-1">402 Onyx Business Center</p>
                    <p className="text-gray-300 mb-4">Akshar Chowk, Muj Mahuda, Vadodara, Gujarat</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
                        onClick={() => window.open('https://maps.google.com/?q=402+Onyx+Business+Center+Akshar+Chowk+Muj+Mahuda+Vadodara+Gujarat', '_blank')}
                      >
                        <Navigation className="w-4 h-4 mr-2" />
                        View on Google Maps
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300"
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
