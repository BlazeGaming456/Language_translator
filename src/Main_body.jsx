import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Switch from './resources/switch.png';
import Settings from './resources/settings.png';
import TextSection from './TextSection';
import SettingsPage from './Settings_page';

export default function Main_body() {
    const [settingsOpen,setSettingsOpen] = useState(false)
    return (
        <div>
            <div className='h-full flex flex-col w-screen justify-center items-center space-y-4 p-4'>
                <div className='flex overflow-y-visible relative h-12 w-4/6 p-1 border-slate-400 border-2 rounded-lg shadow-md justify-between items-center bg-white'>
                    <Dropdown />
                    <img src={Switch} alt="Switch" className='h-4/6 border-slate-300 border-2 rounded-lg hover:opacity-75 transition-opacity duration-200' />
                    <Dropdown />
                    <img src={Settings} alt="Settings" className='h-4/6 hover:opacity-75 hover:cursor-pointer transition-opacity duration-200' onClick={()=>setSettingsOpen(!settingsOpen)}/>
                </div>
                <TextSection />
            </div>
            {settingsOpen && 
                <SettingsPage isOpen={settingsOpen} onClose={() => setSettingsOpen(!settingsOpen)}/>
            }
        </div>
    )
}