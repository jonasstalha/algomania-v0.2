import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
import Authlayout from '../../components/Authlayout';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'; // Assuming you use lucide-react for icons

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate a login request
    const isLoginSuccessful = true; // Replace with your actual login logic
    if (isLoginSuccessful) {
      // Navigate to the "VerificationSent" page
      navigate('/verificationsent');
    } else {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <Authlayout>
    <div className="min-h-[calc(100vh-94px)] flex items-center justify-center">
      <div className="max-w-md w-full p-8  rounded-xl ">
        <form className="space-y-6" onSubmit={handleLogin}>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-200 focus:ring-indigo-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-700">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-violet-400 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Authlayout>
  );
}
