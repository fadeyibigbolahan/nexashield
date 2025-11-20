import React, { useState, useEffect } from "react";
import {
  Code2,
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Star,
  Zap,
  Menu,
  X,
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
import nexashield from "../assets/nexashield.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 p-1 bg-white rounded-lg flex items-center justify-center">
                <img
                  src={nexashield}
                  alt="Nexashield Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">
                Nexashield<span className="text-blue-400">Tech</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building secure, scalable solutions that drive business success.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {["Services", "Expertise", "Approach", "Work", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>hello@Nexashieldtech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+234 813 019 5663</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NexashieldTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
