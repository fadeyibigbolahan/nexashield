import React, { useState } from "react";
import {
  CheckCircle2,
  Shield,
  Code2,
  Zap,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const ServicesPage = () => {
  const webDevServices = [
    {
      title: "Custom Websites & Web Apps",
      description:
        "Tailored web solutions built with modern technologies to meet your specific business needs.",
      features: [
        "React/Next.js Development",
        "Responsive & Accessible Design",
        "Performance Optimization",
        "Progressive Web Apps (PWA)",
      ],
      icon: <Code2 className="w-8 h-8" />,
      color: "blue",
    },
    {
      title: "E-commerce Platforms",
      description:
        "Full-featured online stores with secure payments, inventory sync, and seamless user experience.",
      features: [
        "Secure Shopping Cart",
        "Payment Gateway Integration",
        "Inventory & Order Management",
        "Abandoned Cart Recovery",
      ],
      icon: <Zap className="w-8 h-8" />,
      color: "purple",
    },
    {
      title: "API & System Integrations",
      description:
        "Connect your tools and platforms with robust, secure, and scalable backend solutions.",
      features: [
        "REST & GraphQL APIs",
        "Third-Party Integrations",
        "Custom Database Architecture",
        "Microservices & Serverless",
      ],
      icon: <Code2 className="w-8 h-8" />,
      color: "indigo",
    },
  ];

  const cyberSecurityServices = [
    {
      title: "Penetration Testing",
      description:
        "Expert-led security assessments identifying vulnerabilities before attackers do.",
      features: [
        "Web & Mobile App Testing",
        "API Security Audits",
        "Network Penetration Testing",
        "Detailed Remediation Reports",
      ],
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Malware Removal & Hardening",
      description:
        "Rapid incident response and proactive hardening to keep your sites secure.",
      features: [
        "Malware Scanning & Removal",
        "WAF & Firewall Setup",
        "Security Patch Management",
        "Ongoing Hardening",
      ],
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Compliance & Audits",
      description:
        "Stay compliant with global standards through structured assessments and documentation.",
      features: [
        "GDPR & NDPR Compliance",
        "PCI-DSS Readiness",
        "HIPAA-lite Assessments",
        "Regular Security Audits",
      ],
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "24/7 SIEM & Monitoring",
      description:
        "Real-time threat detection and managed incident response for complete peace of mind.",
      features: [
        "Centralized Log Monitoring",
        "AI-Powered Threat Detection",
        "Instant Alerts & Response",
        "Compliance Reporting",
      ],
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Trusted by 500+ Businesses Worldwide
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Enterprise-Grade
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Secure web development and proactive cybersecurity services that
              scale with your business. Built for performance, secured by
              design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <section
        id="services"
        className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Web Development
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Build Your Digital Future
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, high-performance web applications built for speed,
              scalability, and conversion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {webDevServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 text-white mb-6 shadow-lg shadow-${service.color}-500/30`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-base">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 w-full text-blue-600 font-semibold py-2 px-4 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors flex items-center justify-center group-hover:border-blue-600">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
              Cybersecurity Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Protect What Matters Most
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Proactive defense and compliance solutions trusted by businesses
              worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cyberSecurityServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-4 shadow-lg shadow-emerald-500/30">
                  {service.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Partner with experts who deliver secure, scalable solutions that
            drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
