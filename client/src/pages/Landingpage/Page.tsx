import { LayoutDashboard, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full bg-white py-4 px-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2">
          <LayoutDashboard className="w-6 h-6" />
          <span className="font-bold text-xl">ALGOMANIA.IO</span>
        </div>

        <div className="flex items-center space-x-4">
          {/* Use Link for navigation */}
          <Link
            to="/login"
            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span>Login to Account</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            to="/register"
            className="flex items-center px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span>Register Account</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="w-full h-[600px] bg-blue-50 rounded-2xl shadow-lg"></div>
      </main>
    </div>
  );
};

export default Page;
