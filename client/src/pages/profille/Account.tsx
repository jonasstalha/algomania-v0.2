const Account = () => {
  return (
    <div className="space-y-6">
      {/* Profile Settings Box */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Profile Settings</h2>
        <p className="text-sm text-gray-500 mb-4">
          You can edit your profile information here
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 block mb-2">Username</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg" 
              placeholder="username"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-2">Profile Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg" 
              placeholder="name"
            />
          </div>
        </div>
      </div>

      {/* Personal Information Box */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Personal Information</h2>
        <p className="text-sm text-gray-500 mb-4">
          You can edit your personal information here
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 block mb-2">First Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg" 
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-2">City</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg" 
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-2">State/Province/Region</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg" 
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-2">ZIP Code</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg" 
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-2">Address Line</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg" 
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 block mb-2">EU VAT Number</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg" 
            />
          </div>
        </div>

        <div className="flex justify-end mt-6 space-x-3">
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium">
            Discard
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
