import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Settings, Shield, CreditCard, Bell } from 'lucide-react';

const ProfileLayout = () => {
  const [activeTab, setActiveTab] = useState('account');

  // Each item now includes a "route" property for navigation.
  const sidebarItems = [
    { id: 'account', label: 'Account', icon: Settings, route: '/profile/account' },
    { id: 'security', label: 'Security', icon: Shield, route: '/profile/security' },
    { id: 'billing', label: 'Billing', icon: CreditCard, route: '/profile/billing' },
    { id: 'notifications', label: 'Notifications', icon: Bell, route: '/profile/notifications' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="w-full bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
            <h2 className="text-lg font-medium">Upgrade to Lead the Market</h2>
            <div className="space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                Upgrade Plan
              </button>
              <button className="border border-gray-300 bg-white px-4 py-2 rounded-lg font-medium">
                Custom Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64">
          <nav
  className="bg-white rounded-lg p-2 space-y-1"
  style={{ border: "1px solid #2563eb" }}
>

              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.id}
                    to={item.route}
                    onClick={() => setActiveTab(item.id)}
                    className={({ isActive }) =>
                      `w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                      }`
                    }
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-lg p-6 space-y-6">
              {/* Outlet renders the nested route component */}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
