import React, { useState } from 'react';
import main from "../images/main.png";
function SettingsForm({ activeTab }) {
    const [formData, setFormData] = useState({
        name: 'Eddy Cusuma',
        email: 'eddy@example.com',
        password: '',
        dob: '1990-01-01',
        presentAddress: '123 Main St',
        permanentAddress: '123 Main St',
        city: 'New York',
        postalCode: '10001',
        country: 'United States'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (activeTab === 'profile') {
        return (
            <div className="bg-white rounded-lg shadow p-4 md:p-6 ">
                 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="md:col-span-2 flex flex-col items-center mb-6" style={{ float:'left' }}>
                <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <img src={main} alt="User Profile" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 right-0 bg-black text-white p-1 rounded-full transform -translate-y-1 z-10 hover:translate-y-0 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l7.536-7.536a2.25 2.25 0 013.182 0l1.818 1.818a2.25 2.25 0 010 3.182L12 17.25H6.75V12l2.25-1z" />
                    </svg>
                </div>
            </div>
                </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                            placeholder="••••••••" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Present Address</label>
                        <input
                            type="text"
                            name="presentAddress"
                            value={formData.presentAddress}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Permanent Address</label>
                        <input
                            type="text"
                            name="permanentAddress"
                            value={formData.permanentAddress}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>UK</option>
                            <option>Australia</option>
                        </select>
                    </div>

                    <div className="md:col-span-2 flex justify-end mt-4">
                    <button 
                        className="px-6 py-2 text-white rounded-lg transition-colors" 
                        style={{ backgroundColor: "rgba(35, 35, 35, 1)" }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(50, 50, 50, 1)"}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(35, 35, 35, 1)"}
                    >
                        Save Changes
                    </button>

                    </div>
                </div>
            </div>
        );
    }

    // Other tabs (Preference, Security) would go here
    return <div>Tab content for {activeTab}</div>;
}

  export default SettingsForm;