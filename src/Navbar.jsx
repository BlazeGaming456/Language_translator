import React, { useState } from "react";
import website_icon from './resources/website_icon.png';
import sidebar_static from './resources/sidebar-static.png';
import user_icon from './resources/user_account.png';
import Account_Dropdown from "./Account_Dropdown";

export default function Navbar() {
  const [adrop_down, setAdrop_down] = useState(false);
  const handleLogoClick = ()=>{
    window.location.reload()
  }
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-md">
      <div className="h-16 border-b-2 border-blue-800 flex items-center justify-between px-4">
        <div className='flex items-center space-x-2'>
          <img src={sidebar_static} alt="Sidebar Icon" className="h-8 text-white hover:cursor-pointer hover:opacity-50" />
          <img src={website_icon} alt="Website Icon" className="h-8 text-white hover:cursor-pointer" onClick={()=>handleLogoClick()}/>
        </div>
        <h2 className='text-2xl font-bold text-white'>Translator</h2>
        <div className='flex items-center'>
          <img 
            src={user_icon} 
            alt="User  Icon" 
            onClick={() => setAdrop_down(!adrop_down)} 
            className="h-8 hover:opacity-75 cursor-pointer transition-opacity duration-200" 
          />
        </div>
      </div>
      <div className='absolute right-4 top-16'>
        {adrop_down && <Account_Dropdown />}
      </div>
    </div>
  );
}