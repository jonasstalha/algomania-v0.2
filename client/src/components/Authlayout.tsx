import React from 'react';
import { Link } from 'react-router-dom';
import Header from './AuthHeading';
interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen ">
      <header className="p-6">
        <Header/>
      </header>
      <div className="cont bg-[#EFF3F5]">
      <main className="container mx-auto px-4 py-8 ">
        {children}
      </main>
      <footer className="fixed bottom-0 w-full p-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <Link to="/terms" className="hover:text-indigo-600 mx-2">Terms & Conditions</Link>
          <span>•</span>
          <Link to="/privacy" className="hover:text-indigo-600 mx-2">Privacy Policy</Link>
        </div>
      </footer>
      </div>
    </div>
  );
}