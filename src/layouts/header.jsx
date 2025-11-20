import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CreditCard,
  IterationCw,
  Bell,
  Grip,
  Shield,
  Calendar,
  GraduationCap,
  BarChart3,
  Megaphone,
  Users,
  Puzzle,
  Headset,
  Plus,
  Wallet,
  Receipt,
  Settings,
} from "lucide-react";
import PropTypes from "prop-types";
import axios from "axios";
import { url } from "../../api";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

import profileImg from "../assets/user.jpg";

export const Header = ({ collapsed, setCollapsed }) => {
  const [appModal, setAppModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const modules = [
    {
      name: "Admin & Organization",
      icon: Shield,
      color: "bg-[#7A54A1]",
      description: "System administration and organizational management",
      link: "/dashboard/admin-organization",
    },
    {
      name: "Event & Scheduling",
      icon: Calendar,
      color: "bg-[#7A54A1]",
      description: "Event planning and scheduling tools",
      link: "/dashboard/event-scheduling-orgs",
    },
    {
      name: "Finance & Payment",
      icon: CreditCard,
      color: "bg-[#7A54A1]",
      description: "Financial management and payment processing",
      link: "/dashboard/finance-payment",
    },
    {
      name: "Marketing & Communication",
      icon: Megaphone,
      color: "bg-[#7A54A1]",
      description: "Marketing campaigns and communications",
      link: "/dashboard/marketing-communication",
    },
    {
      name: "Education & Upskilling",
      icon: GraduationCap,
      color: "bg-[#7A54A1]",
      description: "Learning and development programs",
    },
    {
      name: "Data & Analytics",
      icon: BarChart3,
      color: "bg-[#7A54A1]",
      description: "Data insights and reporting",
    },
    {
      name: "Member Engagement",
      icon: Users,
      color: "bg-[#7A54A1]",
      description: "Community and member interaction tools",
    },
    {
      name: "Business Add-on",
      icon: Puzzle,
      color: "bg-[#7A54A1]",
      description: "Additional business features and integrations",
    },
  ];

  const creditCardOptions = [
    {
      name: "Add Payment Method",
      icon: Plus,
      description: "Add a new credit card or payment method",
      link: "/dashboard/payment/add-card",
    },
    {
      name: "Manage Cards",
      icon: CreditCard,
      description: "View and manage your saved payment methods",
      link: "/dashboard/payment/manage-cards",
    },
    {
      name: "Payment History",
      icon: Receipt,
      description: "View your transaction and payment history",
      link: "/dashboard/payment/history",
    },
    {
      name: "Billing Settings",
      icon: Settings,
      description: "Configure billing preferences and settings",
      link: "/dashboard/payment/settings",
    },
    {
      name: "Wallet",
      icon: Wallet,
      description: "Manage your digital wallet and balance",
      link: "/dashboard/payment/wallet",
    },
  ];

  // Refs for click outside detection
  const appModalRef = useRef(null);
  const notificationModalRef = useRef(null);
  const profileModalRef = useRef(null);
  const cardModalRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  // Load logged-in user from localStorage
  const storedUser = localStorage.getItem("authUser");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Function to close all modals
  const closeAllModals = () => {
    setAppModal(false);
    setModal(false);
    setProfileModal(false);
    setCardModal(false);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (appModalRef.current && !appModalRef.current.contains(event.target)) {
        setAppModal(false);
      }
      // Close notification modal if clicking outside
      if (
        notificationModalRef.current &&
        !notificationModalRef.current.contains(event.target)
      ) {
        setModal(false);
      }

      // Close profile modal if clicking outside
      if (
        profileModalRef.current &&
        !profileModalRef.current.contains(event.target)
      ) {
        setProfileModal(false);
      }

      // Close card modal if clicking outside
      if (
        cardModalRef.current &&
        !cardModalRef.current.contains(event.target)
      ) {
        setCardModal(false);
      }
    };

    // Add event listener when any modal is open
    if (appModal || modal || profileModal || cardModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [appModal, modal, profileModal, cardModal]);

  return (
    <>
      <header className="relative w-full z-10 flex h-[60px] items-center justify-between bg-white px-4 border-b">
        <div className="flex items-center gap-x-3">
          <button
            className="btn-ghost size-10"
            onClick={() => setCollapsed(!collapsed)}
          >
            <IterationCw className={collapsed ? "rotate-180" : ""} />
          </button>
        </div>
        <div className="flex items-center gap-x-3">
          <button
            onClick={() => {
              setCardModal(!cardModal);
              setModal(false);
              setProfileModal(false);
              setAppModal(false);
            }}
            className="btn-ghost relative size-10"
          >
            <CreditCard size={25} fill="#102A43" className="text-[#ffffff]" />
          </button>
          <button
            onClick={() => {
              setAppModal(!appModal);
              setModal(false);
              setProfileModal(false);
              setCardModal(false);
            }}
            className="btn-ghost relative size-10"
          >
            <Grip size={18} className="text-black" />
          </button>
          <button
            onClick={() => {
              setModal(!modal);
              setAppModal(false);
              setProfileModal(false);
              setCardModal(false);
              setClicked(true);
            }}
            className="btn-ghost relative size-10"
          >
            <Bell size={18} fill="#102A43" className="text-[#102A43]" />
            {!clicked && (
              <div className="absolute right-1 top-2 h-[8px] w-[8px] rounded-full bg-red-700"></div>
            )}
          </button>
          <button
            onClick={() => {
              setProfileModal(!profileModal);
              setModal(false);
              setAppModal(false);
              setCardModal(false);
            }}
            className="size-10 overflow-hidden rounded-full"
          >
            <img
              src={profileImg}
              alt="profile image"
              className="size-full object-cover"
            />
          </button>
        </div>
      </header>

      {/* Credit Card Modal */}
      {cardModal && (
        <div className="absolute md:right-40 right-3 top-[70px] w-full max-w-xs md:max-w-sm z-10">
          <div
            ref={cardModalRef}
            className="flex flex-col rounded-md bg-white p-4 shadow-md w-full md:w-[320px] overflow-hidden"
          >
            <h3 className="text-sm font-semibold text-[#003366] mb-3 border-b pb-2">
              Payment & Billing
            </h3>
            <div className="flex flex-col gap-2">
              {creditCardOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Link
                    key={index}
                    to={option.link}
                    onClick={closeAllModals}
                    className="flex items-center p-3 bg-white hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200 border border-gray-100 hover:border-gray-200"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <IconComponent className="text-blue-600" size={18} />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-700 block">
                        {option.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {option.description}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Apps Modal */}
      {appModal && (
        <div className="absolute md:right-16 right-3 top-[70px] w-full max-w-xs md:max-w-sm z-10">
          <div
            ref={appModalRef}
            className="flex flex-col rounded-md bg-white p-4 shadow-md md:h-[300px] w-full md:w-[320px] overflow-hidden"
          >
            {/* Content Wrapper */}
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {modules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <Link key={index} to={module.link} onClick={closeAllModals}>
                      <div className="flex flex-col items-center p-1 bg-white hover:bg-gray-50 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all duration-200">
                        <div
                          className={`w-[30px] h-[30px] ${module.color} rounded-lg flex items-center justify-center mb-2 hover:scale-105 transition-transform duration-200`}
                        >
                          <IconComponent className="text-white" size={20} />
                        </div>
                        <span className="text-[10px] font-medium text-center text-gray-700 mb-1">
                          {module.name}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification Modal */}
      {modal && (
        <div className="absolute right-[70px] top-[70px] w-[250px] max-w-xs md:max-w-sm z-10">
          <div
            ref={notificationModalRef}
            className="flex flex-col rounded-md bg-white p-4 shadow-md h-[50px] w-[250px]"
          >
            <Link
              to="/dashboard/activity-feed"
              onClick={closeAllModals}
              className="w-full text-sm font-semibold text-[#003366] hover:underline"
            >
              Activity Feed
            </Link>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {profileModal && (
        <div className="absolute right-3 top-[60px] max-w-xs md:max-w-sm z-10">
          <div
            ref={profileModalRef}
            className="flex flex-col items-center rounded-md bg-white p-4 shadow-md w-[250px]"
          >
            <div className="size-10 overflow-hidden rounded-full">
              <img
                src={profileImg}
                alt="profile image"
                className="size-full object-cover"
              />
            </div>
            <h2 className="font-kanit text-center text-sm font-semibold text-[#003366]">
              {user?.fullName.toUpperCase()}
            </h2>
            <p className="text-xs mb-2">{user?.email}</p>
            <button
              onClick={() => {
                navigate("/dashboard/profile-settings");
                closeAllModals();
              }}
              className="flex text-xs text-center hover:bg-white bg-slate-100 p-2 w-full border-2 border-gray-300 rounded-lg justify-center items-center gap-x-2 mb-2"
            >
              Manage your Fagis Account
            </button>
            <div className="flex flex-col justify-start gap-4 border-y-2 border-gray-200 py-2 w-full">
              <Link
                to="/dashboard/membership"
                onClick={closeAllModals}
                className="w-full text-sm font-semibold text-[#003366] hover:underline"
              >
                Organizations
              </Link>
              <Link
                to="/dashboard/all-events"
                onClick={closeAllModals}
                className="w-full text-sm font-semibold text-[#003366] hover:underline"
              >
                Events
              </Link>
              <Link
                to="/settings"
                onClick={closeAllModals}
                className="w-full text-sm font-semibold text-[#003366] hover:underline"
              >
                Send Feedback
              </Link>
            </div>
            <button
              onClick={() => {
                handleLogout();
                closeAllModals();
              }}
              className="w-full text-start text-sm my-2 font-semibold text-[#003366] hover:underline"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};
