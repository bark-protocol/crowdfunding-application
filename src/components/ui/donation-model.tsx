'use client';

import React, { useState } from 'react';

type DonationModalProps = {
  onClose: () => void;
  onDonate: (amount: number) => void;
};

const DonationModal: React.FC<DonationModalProps> = ({ onClose, onDonate }) => {
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = () => {
    if (amount > 0) {
      onDonate(amount);
      onClose();
    } else {
      alert('Please enter a valid amount');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      role="dialog"
      aria-labelledby="donation-modal-title"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h3 id="donation-modal-title" className="text-lg font-semibold mb-4">
          Donate to Campaign
        </h3>
        <input
          type="number"
          placeholder="Amount (SOL)"
          className="border rounded-md w-full p-2 mb-4 text-gray-800"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          aria-label="Donation amount"
        />
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            onClick={onClose}
            aria-label="Cancel"
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            onClick={handleSubmit}
            aria-label="Donate"
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
