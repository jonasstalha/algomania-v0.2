import React, { useState } from "react";
import { Bell, Settings, LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { User, Notification } from "../types";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  // Mock data
  const user: User = {
    name: "John Doe",
    email: "john@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };

  const notifications: Notification[] = [
    {
      id: "1",
      message: "New message from Jane",
      timestamp: "5 min ago",
      read: false,
    },
    {
      id: "2",
      message: "Your report is ready",
      timestamp: "1 hour ago",
      read: false,
    },
  ];

  return (
    <header className="fixed top-0 z-30 w-full bg-white border-b border-b-[1px] border-[#003DD8] flex h-[94px] px-5 items-center justify-between">
      {/* Left: Menu Button */}
      <button
        type="button"
        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        onClick={onMenuClick}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Center: Logo or Placeholder */}
      <div className="text-xl font-semibold text-gray-800">MyApp</div>

      {/* Right: User & Notification */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            type="button"
            className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              {notifications.filter((n) => !n.read).length}
            </span>
            <Bell className="h-6 w-6" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5">
              <div className="px-4 py-2 border-b border-gray-200">
                <h3 className="text-sm font-semibold">Notifications</h3>
              </div>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                >
                  <p className="text-sm text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.timestamp}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-2"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <img
              className="h-8 w-8 rounded-full"
              src={user.avatar}
              alt={user.name}
            />
            <span className="hidden md:block text-sm font-medium text-gray-700">
              {user.name}
            </span>
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5">
              <button
                onClick={() => navigate("/settings")}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </button>
              <button
                onClick={() => {
                  /* Handle logout */
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
