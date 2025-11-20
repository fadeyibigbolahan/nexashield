import { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../constants";
import fagislong from "../assets/fagislong.png";
import fagis from "../assets/fagis.png";
import kingware from "../assets/KINGWARE.png";
import { cn } from "../utils/cn";
import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ collapsed, onNavigate }, ref) => {
  const handleNavClick = () => {
    // Close sidebar on mobile when navigation link is clicked
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full flex-col overflow-hidden border-r bg-white shadow-lg transition-all duration-300 ease-in-out ",
        "border-slate-200 ",
        collapsed ? "md:w-[72px]" : "md:w-[210px]",
        collapsed ? "max-md:-left-full" : "max-md:left-0"
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "flex h-[60px] items-center border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white px-4",
          collapsed ? "md:justify-center md:px-2" : "justify-start gap-3"
        )}
      >
        <Link
          to="/"
          className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-slate-100"
          onClick={handleNavClick}
        >
          <div className="flex-shrink-0">
            <img
              src={collapsed ? fagis : fagislong}
              alt="Fagis Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex flex-1 flex-col overflow-y-auto px-3 py-6">
        <div className="space-y-6">
          {navbarLinks.map((navbarLink, groupIndex) => (
            <nav key={navbarLink.title} className="space-y-1">
              {/* Group Title */}
              <div
                className={cn(
                  "flex items-center px-3 py-1",
                  collapsed ? "md:justify-center" : "justify-start"
                )}
              >
                {!collapsed ? (
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {navbarLink.title}
                  </h3>
                ) : (
                  <div className="h-px w-6 bg-slate-300" />
                )}
              </div>

              {/* Navigation Links */}
              <div>
                {navbarLink.links.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      cn(
                        "group flex items-center rounded-xl px-2.5 py-2 text-xs font-medium transition-all duration-200",
                        "hover:bg-slate-100",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        collapsed
                          ? "md:justify-center md:px-2"
                          : "justify-start gap-3",
                        isActive
                          ? "bg-gradient-to-r from-[#102A43] to-[#7A54A1] text-white shadow-md hover:from-blue-700 hover:to-purple-700"
                          : "text-slate-700"
                      )
                    }
                    title={collapsed ? link.label : undefined}
                  >
                    <link.icon
                      size={15}
                      className={cn(
                        "flex-shrink-0 transition-colors",
                        collapsed ? "" : "group-hover:scale-110"
                      )}
                    />
                    {!collapsed && (
                      <span className="truncate font-kanit">{link.label}</span>
                    )}
                    {/* Active indicator */}
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        cn(
                          "absolute right-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-l-full bg-white transition-all duration-200",
                          isActive && !collapsed ? "opacity-100" : "opacity-0"
                        )
                      }
                    />
                  </NavLink>
                ))}
              </div>
            </nav>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        className={cn(
          "border-t border-slate-200 bg-slate-50 p-2",
          collapsed ? "md:px-2" : ""
        )}
      >
        <div
          className={cn(
            "flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm",
            collapsed ? "md:justify-center md:p-2" : ""
          )}
        >
          {!collapsed && (
            <div className="flex-shrink-0">
              <img
                src={kingware}
                alt="Kingware Logo"
                className="h-6 w-auto object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  onNavigate: PropTypes.func,
};
