import React, { useState } from "react";

function TransferForm({ contacts }) {
  const [amount, setAmount] = useState("525.50");
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSendMoney = () => {
    if (selectedContact && amount) {
      alert(`Sending $${amount} to ${selectedContact.name}`);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 h-64 rounded-3xl flex flex-col items-center justify-center">
      
      {/* Contacts List with Arrow Button */}
      <div className="flex overflow-x-auto pb-2 mb-4 gap-3 items-center justify-center">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => setSelectedContact(contact.id)}
            className={`flex-shrink-0 flex flex-col items-center p-3 rounded-lg ${
              selectedContact === contact.id
                ? "bg-blue-50 border border-blue-200"
                : "hover:bg-gray-50"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
              {contact.avatar}
            </div>
            <p className="text-sm font-medium">{contact.name}</p>
            <p className="text-xs text-gray-500">{contact.role}</p>
          </button>
        ))}

        {/* Arrow Icon Button */}
        <button className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Amount Input Field with Send Button Inside */}
      <div className="flex items-center justify-center space-x-2 w-full">
        {/* Write Amount Label */}
        <span className="text-gray-500 text-sm font-medium">Write Amount</span>

        {/* Input Field with Send Button Inside */}
        <div className="flex items-center bg-gray-100 px-4 w-64 rounded-full justify-between">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent text-gray-600 text-sm outline-none w-full py-2 text-center"
            readOnly
          />
          {/* Send Button Inside Input */}
          <button
            onClick={handleSendMoney}
            className="bg-black text-white flex items-center px-5 py-2 h-full rounded-full ml-2"
          >
            Send
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-white"
              >
                <path d="M511.6 36.9c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256C5.5 266.3-.7 277.8 .1 290s8.4 22.9 19.6 27.6L160 376l0 93c0 23.8 19.3 43 43 43c13.1 0 25.4-5.9 33.6-16.1l52.8-66 .1 0 114.2 47.6c9.1 3.8 19.4 3.2 28-1.6s14.5-13.3 16-23l64-416zm-253 380.2l-47 58.8c-2.1 2.6-5.3 4.1-8.6 4.1c-6.1 0-11-4.9-11-11l0-79.7 66.6 27.8zm43.1-16.7l-96.6-40.3L474.1 70.5 416 448 301.8 400.4zM450.5 48.8L173.6 347 32 288 450.5 48.8z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransferForm;
