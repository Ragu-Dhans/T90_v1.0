import React, { useState } from 'react';
import { 
  Cpu, Brain, Bot, HardDrive, Radio, Smartphone, 
  ArrowRight, Check, Mail, Phone, MapPin, ChevronDown 
} from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { 
  companyInfo, 
  services, 
  projects, 
  team, 
  stats, 
  testimonials 
} from '../mock';

const iconMap = {
  Cpu,
  Brain,
  Bot,
  HardDrive,
  Radio,
  Smartphone
};

const Home = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="animated-bg"></div>
      
      {/* Fixed Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[#0a0a0f]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="gradient-text">Theta90</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium">Services</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium">Projects</a>
            <a href="#team" className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium">Team</a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium">About</a>
            <a href="#contact">
              <button className="btn-primary">Get in Touch</button>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Spline 3D */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></span>
                <span className="text-sm font-medium text-white/90">Innovation in Technology</span>
              </div>
              <h1 className="display-huge">
                <span className="gradient-text">{companyInfo.tagline}</span>
              </h1>
              <p className="body-large text-white/70 max-w-xl leading-relaxed">
                {companyInfo.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact">
                  <button className="btn-primary">
                    Get a Quote <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
                <a href="#services">
                  <button className="btn-secondary">
                    Explore Services
                  </button>
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D Spline */}
            <div className="relative h-[700px] w-full flex items-center justify-center floating">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
              <div className="w-[700px] h-[700px] overflow-visible relative">
                <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <span className="text-sm font-medium gradient-text">What We Offer</span>
            </div>
            <h2 className="display-large text-white">Our Services</h2>
            <p className="body-medium text-white/70 max-w-2xl mx-auto">
              Comprehensive technology solutions across embedded systems, AI, robotics, and software development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className="glass-card p-8 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white/80 border border-white/10">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <span className="text-sm font-medium gradient-text">Our Work</span>
            </div>
            <h2 className="display-large text-white">Featured Projects</h2>
            <p className="body-medium text-white/70 max-w-2xl mx-auto">
              Showcasing our expertise through successful project implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const gradients = [
                'from-purple-500 to-blue-500',
                'from-blue-500 to-cyan-500',
                'from-pink-500 to-purple-500',
                'from-cyan-500 to-blue-500'
              ];
              return (
                <div key={project.id} className="glass-card p-8 group cursor-pointer overflow-hidden relative">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[index % 4]} opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${gradients[index % 4]} text-white font-medium`}>
                        {project.category}
                      </span>
                      <span className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/20">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-white/5 text-white/70 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <span className="text-sm font-medium gradient-text">The Experts</span>
            </div>
            <h2 className="display-large text-white">Our Expert Team</h2>
            <p className="body-medium text-white/70 max-w-2xl mx-auto">
              Meet the talented professionals driving innovation at Theta90
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => {
              const gradients = [
                'from-purple-500 to-pink-500',
                'from-blue-500 to-cyan-500',
                'from-pink-500 to-orange-500',
                'from-cyan-500 to-purple-500'
              ];
              return (
                <div key={member.id} className="glass-card p-6 text-center group cursor-pointer">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${gradients[index % 4]} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-sm gradient-text font-medium mb-3">{member.role}</p>
                  <p className="text-xs text-white/60 mb-2">{member.expertise}</p>
                  <p className="text-xs text-white/50">{member.bio}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
                <span className="text-sm font-medium gradient-text">About Us</span>
              </div>
              <h2 className="display-large text-white">About Theta90</h2>
              <p className="body-medium text-white/70 leading-relaxed">
                Founded with a vision to bridge the gap between cutting-edge technology and practical solutions, 
                Theta90 Technologies has grown into a trusted partner for businesses seeking excellence in 
                embedded systems, AI, and robotics.
              </p>
              <p className="body-medium text-white/70 leading-relaxed">
                Our team of seasoned engineers and researchers brings together decades of combined experience 
                in FPGA design, machine learning, robotics, and software development. We pride ourselves on 
                delivering solutions that not only meet but exceed our clients' expectations.
              </p>
              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4 glass-card p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Innovation First</h3>
                    <p className="text-white/60 text-sm">Constantly pushing boundaries with latest technologies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 glass-card p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Quality Assurance</h3>
                    <p className="text-white/60 text-sm">Rigorous testing and validation at every stage</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 glass-card p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Client-Centric</h3>
                    <p className="text-white/60 text-sm">Your success is our primary mission</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <h3 className="heading-1 text-white">What Our Clients Say</h3>
              {testimonials.map((testimonial, index) => {
                const gradients = [
                  'from-purple-500/20 to-pink-500/20',
                  'from-blue-500/20 to-cyan-500/20',
                  'from-pink-500/20 to-orange-500/20'
                ];
                return (
                  <div key={testimonial.id} className="glass-card p-6 rounded-2xl relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradients[index % 3]} rounded-full blur-2xl`}></div>
                    <div className="relative z-10">
                      <p className="text-white/80 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-white font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-white/60">{testimonial.position} at {testimonial.client}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
              <span className="text-sm font-medium gradient-text">Let's Connect</span>
            </div>
            <h2 className="display-large text-white">Get in Touch</h2>
            <p className="body-medium text-white/70 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? Let's start a conversation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-2">Send us a message</h3>
              <p className="text-white/70 mb-8">Fill out the form and we'll get back to you within 24 hours</p>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="text-white mb-2 block text-sm font-medium">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 text-white focus:border-purple-500 rounded-xl"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-white mb-2 block text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 text-white focus:border-purple-500 rounded-xl"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="text-white mb-2 block text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/5 border-white/20 text-white focus:border-purple-500 rounded-xl"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-white/70 text-sm">info@theta90.com</p>
                      <p className="text-white/70 text-sm">support@theta90.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-white/70 text-sm">+91 1234 567 890</p>
                      <p className="text-white/70 text-sm">Mon-Fri 9AM-6PM IST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Office</h4>
                      <p className="text-white/70 text-sm">Tech Park, Innovation District</p>
                      <p className="text-white/70 text-sm">Bangalore, Karnataka 560001</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-white text-xl font-semibold mb-6">Why Choose Theta90?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-sm">12+ years of industry expertise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-sm">150+ successful project deliveries</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-sm">98% client satisfaction rate</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/70 text-sm">24/7 dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="gradient-text">Theta90</span>
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Engineering the future with precision and innovation.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors">FPGA Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">AI & ML</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Robotics</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Driver Development</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>info@theta90.com</li>
                <li>+91 1234 567 890</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2025 Theta90 Technologies Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
