import React, { useState } from 'react';
import items from './items';

const Settings = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [sourceLanguage, setSourceLanguage] = useState('Select a Language');
  const [targetLanguage, setTargetLanguage] = useState('Select a Language');
  const [fontSize, setFontSize] = useState('medium');
  const [theme, setTheme] = useState('light');

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    document.documentElement.style.fontSize = e.target.value === 'small' ? '12px' : e.target.value === 'large' ? '18px' : '16px';
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">User  Preferences</h2>

        <div className="mb-4">
          <label className="block mb-2">Source Language:</label>
          <select value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)} className="border rounded p-2">
            {items.map(item => (
              <option key={item.id} value={item.value}>{item.value}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Target Language:</label>
          <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} className="border rounded p-2">
            {items.map(item => (
              <option key={item.id} value={item.value}>{item.value}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="block mb-2">Font Size:</label>
          <div>
            <label>
              <input type="radio" value="small" checked={fontSize === 'small'} onChange={handleFontSizeChange} />
              Small
            </label>
            <label className="ml-4">
              <input type="radio" value="medium" checked={fontSize === 'medium'} onChange={handleFontSizeChange} />
              Medium
            </label>
            <label className="ml-4">
              <input type="radio" value="large" checked={fontSize === 'large'} onChange={handleFontSizeChange} />
              Large
            </label>
          </div>
        </div>

        <button onClick={onClose} className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default Settings;