import { useState } from "react";

const Notifications = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  return  (
    <div className="p-4 bg-white rounded-2xl shadow-md border border-blue-200 flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">Notification Setting</h2>
        <p className="text-sm text-gray-500">
          You can enable and disable notifications here.
        </p>
      </div>
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${
          isEnabled ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${
            isEnabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
};

export default Notifications
