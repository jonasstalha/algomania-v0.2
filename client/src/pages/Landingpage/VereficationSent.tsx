import { CheckCircle } from 'lucide-react';
import AuthLayout from '../../components/Authlayout';

export default function VerificationSent() {
  return (
    <AuthLayout>
      <div className="max-w-md mx-auto mt-16 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Verification Email Sent
          </h1>
          
          <p className="text-gray-600">
            Your verification file has been sent to your email. Please check to continue.
          </p>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              Don't see the email? Check your spam folder or request a new verification email.
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}