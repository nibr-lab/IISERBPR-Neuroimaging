import { useState } from 'react';
import { 
  Database, 
  Upload, 
  Search, 
  Download, 
  User, 
  LogOut,
  FolderOpen,
  FileText,
  Settings,
  Home,
  BarChart3
} from 'lucide-react';
import { DataBrowser } from './DataBrowser';
import { DataSubmission } from './DataSubmission';
import { UserProfile } from './UserProfile';

interface DashboardProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
  onLogout: () => void;
}

type Tab = 'home' | 'browse' | 'submit' | 'profile';

export function Dashboard({ user, onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Database className="w-8 h-8" />
              <div>
                <h1>Scientific Data Archive</h1>
                <p className="text-blue-200 text-sm">Data Management & Access Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p>{user.name}</p>
                <p className="text-blue-200 text-sm">{user.role}</p>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex gap-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'home'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Home className="w-4 h-4" />
              Home
            </button>
            <button
              onClick={() => setActiveTab('browse')}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'browse'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FolderOpen className="w-4 h-4" />
              Browse Data
            </button>
            <button
              onClick={() => setActiveTab('submit')}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'submit'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Upload className="w-4 h-4" />
              Submit Data
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors ${
                activeTab === 'profile'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <User className="w-4 h-4" />
              My Profile
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeTab === 'home' && <HomeContent />}
        {activeTab === 'browse' && <DataBrowser />}
        {activeTab === 'submit' && <DataSubmission />}
        {activeTab === 'profile' && <UserProfile user={user} />}
      </main>
    </div>
  );
}

function HomeContent() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-gray-800 mb-4">Welcome to the Data Archive</h2>
        <p className="text-gray-600 mb-6">
          Access, manage, and submit scientific research data through our secure platform.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-800 mb-2">Browse Collections</h3>
            <p className="text-gray-600 text-sm">
              Search and explore available datasets from research studies.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-800 mb-2">Download Data</h3>
            <p className="text-gray-600 text-sm">
              Access authorized datasets for your research projects.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-gray-800 mb-2">Submit Research</h3>
            <p className="text-gray-600 text-sm">
              Upload your data collections to share with the community.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-gray-600 text-sm">Total Datasets</p>
          <p className="text-gray-900 mt-1">1,247</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <Database className="w-8 h-8 text-green-600" />
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-gray-600 text-sm">Data Collections</p>
          <p className="text-gray-900 mt-1">356</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <User className="w-8 h-8 text-purple-600" />
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-gray-600 text-sm">Active Users</p>
          <p className="text-gray-900 mt-1">892</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-2">
            <Download className="w-8 h-8 text-orange-600" />
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <p className="text-gray-600 text-sm">Total Downloads</p>
          <p className="text-gray-900 mt-1">12,453</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Download className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-800">Downloaded dataset: Neuroimaging Study 2024</p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Upload className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-gray-800">Submitted new collection: Clinical Trial Data</p>
                <p className="text-gray-500 text-sm">1 day ago</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Settings className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-gray-800">Updated profile information</p>
                <p className="text-gray-500 text-sm">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
