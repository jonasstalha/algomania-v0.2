import { useState } from "react";
import { Lock } from "lucide-react";

const Security = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return(
    <div className="p-6 bg-white rounded-2xl shadow-md border border-blue-200">
      <h2 className="text-xl font-semibold">Security Setting</h2>
      <p className="text-sm text-gray-500 mt-1">
        You can update your account password here.
      </p>

      <div className="mt-5 space-y-4">
        {/* Password Field */}
        <div>
          <label className="text-sm font-medium flex items-center gap-2">
            <Lock className="w-4 h-4 text-gray-500" /> Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 border rounded-lg"
          />
        </div>

        {/* New Password Field */}
        <div>
          <label className="text-sm font-medium flex items-center gap-2">
            <Lock className="w-4 h-4 text-gray-500" /> New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 mt-1 border rounded-lg"
          />
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="text-sm font-medium flex items-center gap-2">
            <Lock className="w-4 h-4 text-gray-500" /> Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 mt-1 border rounded-lg"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">
        <button className="px-4 py-2 border rounded-lg">Discard</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default Security
