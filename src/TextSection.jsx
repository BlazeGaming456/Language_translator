import React, { useState } from "react";
import microphone from './resources/microphone.png';

export default function TextSection() {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(value)
            .then(() => {
                alert('Text has been copied');
            })
            .catch((err) => {
                console.error('Error Occurred: ', err);
            });
    };

    return (
        <div className='flex flex-col w-full justify-center items-center'>
            <div className='flex flex-col w-5/6 h-72 justify-center items-center space-y-4'>
                <div className='relative w-full h-1/2'>
                    <input 
                        type="text" 
                        value={value} 
                        onChange={handleChange} 
                        placeholder="Let's get translating!" 
                        className='border-slate-400 border-2 w-full h-full px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <img 
                            src={microphone} 
                            alt="Microphone Icon" 
                            className="absolute right-2 top-2 h-8 hover:opacity-75 transition-opacity duration-200 cursor-pointer mb-1" 
                    />
                    <button 
                            type='button' 
                            className='absolute right-2 top-14   border-black border-2 rounded-xl px-2 py-1 hover:opacity-75 bg-green-400 transition-opacity duration-200' 
                            onClick={() => setValue('')}
                        >
                            Clear
                    </button>
                    <p className='absolute right-2 bottom-2 text-gray-600'>{value.length}/2000</p> 
                </div>

                <div className='w-full h-1/2 bg-slate-100 border border-slate-400 rounded-lg p-2 flex justify-between items-center'>
                    <h4 className='text-gray-800 flex-1'>{value}</h4>
                    <button 
                        type='button' 
                        className='border-black border-2 rounded-xl px-4 py-2 hover:opacity-50 bg-green-400 transition-opacity duration-200' 
                        onClick={handleCopy}
                    >Copy</button>
                </div>
            </div>
        </div>
    );
}