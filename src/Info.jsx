import React from "react";
import info_instant from './resources/info_magic.png';
import info_language from './resources/info_multi_lingual.png';
import info_free from './resources/info_free.png';

export default function Info() {
    return (
        <div className="w-full flex flex-col items-center p-6 bg-gray-50">
            <h2 className="font-semibold text-3xl text-center mb-4">
                Translate Text Instantly With<br />Our Online Language<br />Translator
            </h2>
            <p className="text-center text-lg mb-6">
                Use the latest tools to translate text quickly, efficiently, and powerfully!
            </p>
            <div className="flex space-x-6 w-full max-w-4xl">
                <div className='h-40 flex flex-col items-start p-4 bg-white shadow-lg rounded-lg border-l-4 border-yellow-300 transition-transform transform hover:scale-105'>
                    <img src={info_instant} className="h-12 mb-2" alt="Instant logo" />
                    <h3 className="font-bold text-xl">Instant</h3>
                    <p className="text-sm">Get accurate translations in just a few seconds</p>
                </div>
                <div className='h-40 flex flex-col items-start p-4 bg-white shadow-lg rounded-lg border-l-4 border-red-300 transition-transform transform hover:scale-105'>
                    <img src={info_language} className="h-12 mb-2" alt="Multilingual logo" />
                    <h3 className="font-bold text-xl">Multilingual</h3>
                    <p className="text-sm">Try it in 40+ different languages and dialects</p>
                </div>
                <div className='h-40 flex flex-col items-start p-4 bg-white shadow-lg rounded-lg border-l-4 border-green-300 transition-transform transform hover:scale-105'>
                    <img src={info_free} className="h-12 mb-2" alt="Free logo" />
                    <h3 className="font-bold text-xl">Free of Cost</h3>
                    <p className="text-sm">Translate for free and get your work done</p>
                </div>
            </div>
        </div>
    );
}