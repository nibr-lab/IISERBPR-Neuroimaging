import { useState } from 'react';
import { Lock, Database, AlertCircle } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email, password);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-blue-900 text-white py-4 px-6 rounded-t-lg">
          <div className="flex items-center gap-3">
            <Database className="w-8 h-8" />
            <div>
              <h1>Scientific Data Archive</h1>
              <p className="text-blue-200 text-sm">Image & Data Management System</p>
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white shadow-xl rounded-b-lg max-w-2xl mx-auto mt-0">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h2>System Login</h2>
              <p className="text-gray-600 mt-2">
                Enter your credentials to access the data archive
              </p>
            </div>

            {showError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800">Please enter both email and password to continue.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address / Username
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setShowError(false);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setShowError(false);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-700 text-sm">Remember me</span>
                </label>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
              >
                Login to System
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm">
                Don&apos;t have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  Request Access
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-2xl mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-gray-800 mb-4">About the Data Archive</h3>
          <div className="space-y-3 text-gray-600 text-sm">
            <p>
              This system provides secure access to scientific research data including neuroimaging,
              clinical assessments, and biospecimen information.
            </p>
            <p>
              Authorized researchers can browse, search, download existing datasets, and submit new
              data collections to the archive.
            </p>
            <p>
              For technical support or access requests, please contact your institution&apos;s data
              administrator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
