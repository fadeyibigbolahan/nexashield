import React, { useState, useEffect } from "react";
import {
  Code2,
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  ChevronRight,
  Star,
  Zap,
  Cpu,
  Globe,
  ShoppingCart,
  Target,
  GraduationCap,
  Heart,
  MessageCircle,
  Send,
  ShieldCheck,
  Clock,
  Quote,
  ChevronLeft,
  Eye,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    source: "",
    message: "",
  });

  const stats = [
    { icon: Users, value: "50+", label: "Happy Customers" },
    { icon: Award, value: "100+", label: "Projects Completed" },
    { icon: Clock, value: "<1", label: "Year Experience" },
    { icon: Star, value: "3", label: "Awards Won" },
  ];

  const services = [
    {
      title: "Custom Software Development",
      description:
        "Transforming ideas into robust, scalable, and secure software solutions tailored to your business needs.",
      icon: Cpu,
      color: "from-blue-500 to-indigo-600",
      features: [
        "Web Applications",
        "Mobile Applications",
        "Enterprise Solutions",
        "Cloud-based Systems",
      ],
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security services to protect your digital assets and ensure regulatory compliance.",
      icon: Shield,
      color: "from-emerald-500 to-teal-600",
      features: [
        "Security Audits & Penetration Testing",
        "Threat Monitoring & Response",
        "Compliance Management",
        "Data Encryption & Protection",
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to increase your online presence and drive business growth.",
      icon: Target,
      color: "from-purple-500 to-pink-600",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Strategy",
        "Performance Analytics",
      ],
    },
  ];

  const expertise = [
    {
      title: "STARTUPS & SMALL BUSINESSES",
      icon: Zap,
      features: [
        "MVP Development",
        "Custom CRM & ERP Systems",
        "Scalable Applications",
        "Cloud Collaboration Tools",
      ],
    },
    {
      title: "E-COMMERCE",
      icon: ShoppingCart,
      features: [
        "Custom E-commerce Platforms",
        "Marketplace Integrations",
        "Inventory Management",
        "Secure Payment Gateways",
      ],
    },
    {
      title: "HEALTH CARE",
      icon: Heart,
      features: [
        "Patient Management Systems",
        "Telemedicine Applications",
        "Electronic Health Records",
        "Health Monitoring",
      ],
    },
    {
      title: "EDUCATION & E-LEARNING",
      icon: GraduationCap,
      features: [
        "Learning Management Systems",
        "Virtual Classrooms",
        "Gamified Learning",
        "Content Management",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      content:
        "NexashieldTech transformed our business with their custom CRM solution. The security features they implemented gave us complete peace of mind.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, HealthSync",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      content:
        "Their cybersecurity audit revealed vulnerabilities we didn't know existed. The team is professional, responsive, and truly experts in their field.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, ShopNow",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      content:
        "The e-commerce platform they built for us increased our sales by 200%. Their attention to detail and user experience is unmatched.",
      rating: 5,
    },
  ];

  const projects = [
    {
      title: "Enterprise Healthcare Platform",
      category: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      description:
        "HIPAA-compliant patient management system serving 50,000+ users",
    },
    {
      title: "E-Commerce Marketplace",
      category: "Retail",
      image:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop",
      description:
        "Multi-vendor platform with advanced analytics and secure payments",
    },
    {
      title: "Financial Security Dashboard",
      category: "FinTech",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description:
        "Real-time threat monitoring and compliance management system",
    },
    {
      title: "Learning Management System",
      category: "Education",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      description: "Interactive e-learning platform with gamification features",
    },
  ];

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);

  useEffect(() => {
    const projectTimer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(projectTimer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted securely:", formData);
    alert("Thank you for your inquiry! We'll be in touch within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      budget: "",
      source: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl text-white/90 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 border border-white/20">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Trusted by 50+ businesses since 2024</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Innovative Software
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Solutions & Security
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-10 leading-relaxed">
                We specialize in delivering exceptional solutions in{" "}
                <span className="text-white font-semibold">
                  SOFTWARE DEVELOPMENT
                </span>{" "}
                and{" "}
                <span className="text-white font-semibold">CYBERSECURITY</span>,
                designed to help businesses thrive in a competitive landscape.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a href="#contact" className="w-full sm:w-auto">
                  <button className="group w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3">
                    GET STARTED
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
                <a href="#work" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-white/20 transition-all duration-300">
                    VIEW OUR WORK
                  </button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                  alt="Team collaborating on software development"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      100+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Projects Delivered
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      100%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Secure Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:duration-300 group-hover:scale-110">
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

      {/* Featured Projects Carousel */}
      <section id="work" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-2xl text-blue-700 font-semibold text-lg mb-6">
              <Eye className="w-5 h-5" />
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success Stories That
              <span className="text-blue-600"> Speak Volumes</span>
            </h2>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentProject
                      ? "opacity-100 translate-x-0"
                      : index < currentProject
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold mb-4">
                      {project.category}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentProject(
                  (currentProject - 1 + projects.length) % projects.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={() =>
                setCurrentProject((currentProject + 1) % projects.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>

            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? "w-12 bg-blue-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-2xl text-blue-700 font-semibold text-lg mb-6">
              <Sparkles className="w-5 h-5" />
              Our Core Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Digital
              <span className="text-blue-600"> Solutions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              End-to-end services designed to transform your business with
              cutting-edge technology and robust security
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-2xl mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-base text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a href="#contact">
                    <button className="group/btn w-full py-4 bg-gradient-to-r from-gray-900 to-slate-800 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section id="expertise" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-2xl text-blue-700 font-semibold text-lg mb-6">
              <Globe className="w-5 h-5" />
              Domain Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Industry-Specific
              <span className="text-blue-600"> Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((domain, index) => {
              const Icon = domain.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="inline-flex p-3 bg-blue-100 rounded-xl mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
                    {domain.title}
                  </h3>
                  <ul className="space-y-3">
                    {domain.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-base text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section
        id="approach"
        className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-2xl text-blue-700 font-semibold text-lg mb-6">
              <Target className="w-5 h-5" />
              Our Approach
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How We Deliver
              <span className="text-blue-600"> Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "Understanding your goals, challenges, and vision",
              },
              {
                step: "02",
                title: "Design & Development",
                desc: "Crafting intuitive designs and robust solutions",
              },
              {
                step: "03",
                title: "Testing & Deployment",
                desc: "Rigorous testing and seamless launch",
              },
              {
                step: "04",
                title: "Support & Growth",
                desc: "Ongoing maintenance and scalability",
              },
              {
                step: "05",
                title: "Security Hardening",
                desc: "Implementing enterprise-grade protection",
              },
              {
                step: "06",
                title: "Performance Optimization",
                desc: "Ensuring speed, reliability, and uptime",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-blue-100 absolute -top-8 -left-4 opacity-50">
                  {item.step}
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-2xl text-blue-700 font-semibold text-lg mb-6">
              <Star className="w-5 h-5" />
              Client Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry
              <span className="text-blue-600"> Leaders</span>
            </h2>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 min-h-80">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === currentTestimonial
                      ? "opacity-100 block"
                      : "opacity-0 hidden"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <Quote className="w-12 h-12 text-blue-600 mb-6" />
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl">
                      "{testimonial.content}"
                    </p>
                    <div className="flex gap-2 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                      />
                      <div className="text-left">
                        <div className="text-lg font-bold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-base text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "w-12 bg-blue-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl text-white font-semibold text-lg mb-6">
              <Code2 className="w-5 h-5" />
              Technology Stack
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by Cutting-Edge
              <span className="text-cyan-400"> Technologies</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {[
              {
                name: "React",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Node.js",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Python",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
                name: "AWS",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
              },
              {
                name: "Docker",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
              },
              {
                name: "PostgreSQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
              },
              {
                name: "MongoDB",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              {
                name: "TypeScript",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
              },
              {
                name: "GraphQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
              },
              {
                name: "Kubernetes",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
              },
              {
                name: "Firebase",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
              },
              {
                name: "Tailwind",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-16 h-16 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-white text-sm mt-3 opacity-80">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 rounded-2xl text-blue-700 font-semibold text-lg mb-6">
              <MessageCircle className="w-5 h-5" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Start Your Project
              <span className="text-blue-600"> Today</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your vision. We'll help bring it to life with
              secure, scalable solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-base"
                />
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-base"
                >
                  <option value="">Project Budget</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              <div className="space-y-6">
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                  placeholder="How did you hear about us?"
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-base"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={8}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none text-base"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
