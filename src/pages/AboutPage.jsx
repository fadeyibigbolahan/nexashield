import React from "react";
import {
  Users,
  Award,
  Target,
  Heart,
  Globe,
  Zap,
  Shield,
  Code2,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "15+ years in software architecture and cybersecurity. Passionate about building secure, scalable solutions.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Full-stack developer and security expert. Leads our technical strategy and innovation initiatives.",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Specializes in React, Node.js, and cloud infrastructure. Loves solving complex technical challenges.",
    },
    {
      name: "David Thompson",
      role: "Security Architect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Cybersecurity veteran with expertise in penetration testing and threat intelligence.",
    },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description:
        "Every solution we build is designed with security as the foundation, not an afterthought.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Driven",
      description:
        "We stay ahead of the curve with cutting-edge technologies and modern development practices.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client Success",
      description:
        "Your success is our success. We're committed to delivering solutions that drive real business value.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence in Execution",
      description:
        "We take pride in delivering high-quality work on time, every time.",
    },
  ];

  const milestones = [
    {
      year: "2024",
      event: "Company Founded",
      description:
        "Launched with a vision to deliver exceptional software development and cybersecurity services",
    },
    {
      year: "2024",
      event: "First Clients",
      description: "Onboarded our first 10 clients within the first quarter",
    },
    {
      year: "2024",
      event: "Rapid Growth",
      description: "Expanded team and delivered 20+ successful projects",
    },
    {
      year: "Present",
      event: "Industry Recognition",
      description:
        "Building reputation for excellence in software and security solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-white/90 text-sm mb-8 border border-white/20">
              <Sparkles className="w-4 h-4" />
              Trusted by 50+ businesses in 2024
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building the Future of
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Founded in 2024, we are a dynamic team of developers, designers,
              and security experts dedicated to creating exceptional digital
              experiences that drive business growth while ensuring ironclad
              security from day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                  Get In Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#story" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                  Our Story
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "50+", label: "Happy Clients" },
              { icon: Award, value: "20+", label: "Projects Completed" },
              { icon: Clock, value: "<1", label: "Year Experience" },
              { icon: Star, value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                    {stat.value}
                  </div>
                  <div className="text-base sm:text-lg text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-2xl text-blue-700 font-semibold text-lg mb-6">
                <Sparkles className="w-5 h-5" />
                Our Journey
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                A New Era of
                <span className="text-blue-600"> Digital Excellence</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in January 2024, NexaShieldTech emerged to address a
                critical need in the market: businesses required a partner who
                could deliver both innovative software solutions and
                enterprise-grade security from the very beginning.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                In just a short time, we've built a reputation for delivering
                exceptional results by combining cutting-edge technology with
                robust security practices. Our rapid growth is a testament to
                our commitment to quality and client success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-base font-semibold text-gray-900">
                    20+ Successful Projects
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-base font-semibold text-gray-900">
                    100% Client Satisfaction
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
                    <Code2 className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Development</h3>
                    <p className="text-blue-100">
                      Modern, scalable applications
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
                    <Shield className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Security</h3>
                    <p className="text-cyan-100">Enterprise-grade protection</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
                    <Zap className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Performance</h3>
                    <p className="text-purple-100">Lightning-fast solutions</p>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
                    <TrendingUp className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Growth</h3>
                    <p className="text-emerald-100">
                      Rapid scaling capabilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-2xl text-blue-700 font-semibold text-lg mb-6">
              <Heart className="w-5 h-5" />
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The Principles That
              <span className="text-blue-600"> Guide Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-2xl text-blue-700 font-semibold text-lg mb-6">
              <Globe className="w-5 h-5" />
              Our Journey
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Rapid Progress in
              <span className="text-blue-600"> 2024</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {milestone.event}
                      </h3>
                      <p className="text-base text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-2xl text-blue-700 font-semibold text-lg mb-6">
              <Users className="w-5 h-5" />
              Meet Our Team
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              The Experts Behind
              <span className="text-blue-600"> Your Success</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together decades of combined experience in
              software development, cybersecurity, and digital innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-base text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl text-white font-semibold text-lg mb-6">
            <MessageCircle className="w-5 h-5" />
            Ready to Work Together?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Our Growing
            <span className="text-cyan-400"> Success Story</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Be part of our rapidly expanding portfolio of satisfied clients who
            trust us with their digital transformation and security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href="/services" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300">
                View Services
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
