import React from 'react';

const Settings: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="bg-white rounded-lg shadow divide-y">
        <div className="p-6">
          <h3 className="text-lg font-medium">Profile Settings</h3>
          <p className="mt-1 text-gray-600">
            Manage your account settings and preferences.
          </p>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-medium">Notifications</h3>
          <p className="mt-1 text-gray-600">
            Choose how you want to receive notifications.
          </p>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-medium">Privacy</h3>
          <p className="mt-1 text-gray-600">
            Control your privacy settings and data sharing preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;