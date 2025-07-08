import React, { useState } from 'react';

import liviaimage from "../images/liviaimage.png";
import randy from "../images/randy.png";
import workman from "../images/workman.png";
import Card from '../components/Card';
import Cardback from '../components/Cardback';
import RecentTransactions from '../components/RecentTransactions';
import Chart from '../components/Chart';
import TransferForm from '../components/TransferForm';
import { hover } from '@testing-library/user-event/dist/hover';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('accounts');

  const cards = [
    { id: 1, balance: '$5,756', holder: 'Eddy Cusuma', expiry: '12/22', lastFour: '•••• 4567' },
    { id: 2, balance: '$3,210', holder: 'Eddy Cusuma', expiry: '10/23', lastFour: '•••• 8910' }
  ];

  const transactions = [
    { id: 1, description: 'Deposit from my Card', amount: '-$850', date: '28 Jan 2021', type: 'withdrawal' },
    { id: 2, description: 'Deposit Paypal', amount: '+$2,500', date: '25 Jan 2021', type: 'deposit' },
    { id: 3, description: 'Jemi Wilson', amount: '+$5,400', date: '21 Jan 2021', type: 'deposit' }
  ];

  const contacts = [
    { id: 1, name: 'Livia Bator', role: 'CEO', avatar: <img src={liviaimage} alt="Chip Icon" className="w-full h-full object-contain" style={{ borderRadius:25 }}/> },
    { id: 2, name: 'Randy Press', role: 'Director', avatar: <img src={randy} alt="Chip Icon" className="w-full h-full object-contain" style={{ borderRadius:25 }}/> },
    { id: 3, name: 'Workman', role: 'Designer', avatar: <img src={workman} alt="Chip Icon" className="w-full h-full object-contain" style={{ borderRadius:25 }}/> }
  ];

  const weeklyData = {
    labels: ['Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri' ],
    deposits: [220, 120,270, 380, 260, 260, 330],
    withdrawals: [480, 350, 320, 480, 160, 300, 400]
  };

  const expenseData = {
    labels: [ 'Expense', 'Others', 'Investment', 'Entertainment'],
    values: [15, 35, 20, 30],
    colors: [ '#FF7B00', '#1C1C1C', '#3366FF', '#2C3360']
  };
  

  const balanceHistory = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    data: [100, 250, 480, 780, 200, 580, 220]
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden" id='wall'>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <Card /><Cardback /> 
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-3">Recent Transactions</h2>
              <RecentTransactions />
            </div> 
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-1">
            <div className="lg:col-span-2 p-3 rounded-2xl  w-full  " >
              <h2 className="text-xl font-semibold text-gray-700 mb-4" >Weekly Activity</h2>
              <div className="h-70 sm:h-80 md:h-96 w-150 " >
                <Chart type="bar" data={weeklyData}  />
              </div>
            </div>

            <div className="md:col-span-1 lg: p-3 rounded-2xl  w-full " >
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Expense Statistics</h2>
              <div className="h-[335px] w-full bg-white p-4 rounded-lg shadow"style={{ borderRadius:25 }}>
              <Chart 
                type="pie" 
                data={expenseData} 
              />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Transfer</h2>
              <TransferForm contacts={contacts} />
            </div>

            <div className="md:col-span-1 lg:col-span-1">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Balance History</h2>
              <div className="h-64">
                <Chart type="line" data={balanceHistory} title="Balance Trend" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
