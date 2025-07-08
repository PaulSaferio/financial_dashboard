import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import SettingsForm from '../components/SettingsForm';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('settings');
  const [activeSettingsTab, setActiveSettingsTab] = useState('profile');

  return (
    <div className="flex flex-col h-screen">
      
      <div className="flex flex-1 overflow-hidden">
        
        <main className="flex-1 overflow-y-auto p-6">
          
          {/* Settings Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveSettingsTab('profile')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSettingsTab === 'profile' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Edit Profile
              </button>
              <button
                onClick={() => setActiveSettingsTab('preference')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSettingsTab === 'preference' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Preference
              </button>
              <button
                onClick={() => setActiveSettingsTab('security')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeSettingsTab === 'security' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              >
                Security
              </button>
            </nav>
          </div>

          {/* Settings Form */}
          <SettingsForm activeTab={activeSettingsTab} />
        </main>
      </div>
    </div>
  );
};

export default Settings;