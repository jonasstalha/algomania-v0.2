import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Settings, X, BookOpen, Globe } from "lucide-react";
import { IoAnalyticsOutline } from "react-icons/io5";
import { FaSignal } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";

import logo from "../assets/logo.svg";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // Navigation blocks
  const block1 = [
    { name: "Dashboard Overview", href: "/", icon: Home },
    { name: "Data Liquidity", href: "/data-liquidity", icon: IoAnalyticsOutline },
    { name: "Signal Trading Live", href: "/signal-trading-live", icon: FaSignal },
    { name: "Calculators", href: "/calculators", icon: BsCalculator },
    { name: "Tools", href: "/tools", icon: X },
  ];

  const blocksec = [
    { name: "Learn", href: "/learn", icon: BookOpen },
    { name: "Eco News", href: "/eco-news", icon: Globe },
  ];

  const block2 = [
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const block3 = [{ name: "Dark Mode", icon: MdOutlineDarkMode }];

  const renderBlock = (
    elements: { name: string; href?: string; icon: React.ComponentType }[]
  ) => (
    <nav className="mt-4 px-4">
      {elements.map((item) => {
        const Icon = item.icon;
        return item.href ? (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-gray-600 rounded-lg ${
                isActive ? "bg-[#C4D9FF] text-gray-900" : ""
              }`
            }
          >
            <Icon className="mr-3 w-5 h-5" />
            {item.name}
          </NavLink>
        ) : (
          <div
            key={item.name}
            className="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-slate-400 cursor-pointer"
          >
            <Icon className="mr-3 w-5 h-5" />
            {item.name}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center h-[94px] px-5 border-b border-b-[1px] border-[#003DD8] gap-4">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Blue vertical line positioned below the header */}
        <div
          className="absolute left-0 w-full border-r border-[#003DD8] pointer-events-none"
          style={{ top: "94px", height: "100vh" }}
        ></div>

        {/* Navigation content */}
        <div className="relative text-[#384455] font-[Poppins] text-[15px] font-medium leading-[22px]">
          {renderBlock(block1)}
          <hr className="my-4 border-t-[1px] border-[#003DD8]" />
          {renderBlock(blocksec)}
          <hr className="my-4 border-t-[1px] border-[#003DD8]" />
          {renderBlock(block2)}
          <hr className="my-4 border-t-[1px] border-[#003DD8]" />
          <div className="mt-80">{renderBlock(block3)}</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
