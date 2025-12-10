import { User, Mail, Building, Award, Download, Upload, Calendar } from 'lucide-react';

interface UserProfileProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h2 className="text-gray-800 mb-1">{user.name}</h2>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>{user.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                <span>Research Institution</span>
              </div>
            </div>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Download className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Total Downloads</p>
              <p className="text-gray-900">24 datasets</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Upload className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Submissions</p>
              <p className="text-gray-900">3 datasets</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-gray-600 text-sm">Member Since</p>
              <p className="text-gray-900">Jan 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Downloads */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-gray-800 mb-4">Recent Downloads</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-gray-800">Alzheimer&apos;s Disease Neuroimaging Initiative</p>
              <p className="text-gray-500 text-sm">Downloaded on Dec 5, 2024</p>
            </div>
            <span className="text-gray-600 text-sm">125 GB</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-gray-800">Functional Connectivity in Depression</p>
              <p className="text-gray-500 text-sm">Downloaded on Nov 28, 2024</p>
            </div>
            <span className="text-gray-600 text-sm">87 GB</span>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-gray-800">Stroke Recovery Outcomes</p>
              <p className="text-gray-500 text-sm">Downloaded on Nov 15, 2024</p>
            </div>
            <span className="text-gray-600 text-sm">42 GB</span>
          </div>
        </div>
      </div>

      {/* Access Permissions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-gray-800 mb-4">Access Permissions</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="text-gray-800">Standard Research Access</p>
              <p className="text-gray-500 text-sm">Access to publicly available datasets</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Active</span>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="text-gray-800">Clinical Data Access</p>
              <p className="text-gray-500 text-sm">Access to restricted clinical datasets</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Active</span>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <p className="text-gray-800">Data Submission Rights</p>
              <p className="text-gray-500 text-sm">Ability to submit new datasets</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Active</span>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-gray-800 mb-4">Account Settings</h3>
        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Change Password
          </button>
          <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Notification Preferences
          </button>
          <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Download Activity Report
          </button>
          <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Two-Factor Authentication
          </button>
        </div>
      </div>
    </div>
  );
}
