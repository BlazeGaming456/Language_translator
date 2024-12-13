import React from "react";
import settings_icon from './resources/settings.png';
import user_account_icon from './resources/user_account.png';

export default function Account_Dropdown() {
    function DropdownItem(props) {
        return (
            <li className='flex items-center h-12 p-2 hover:bg-gray-200 transition-colors duration-200'>
                <img src={props.img} alt="Image" className='h-6 w-6 mr-2' />
                <span className='text-gray-800'>{props.text}</span>
            </li>
        );
    }
    return (
        <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-300 z-10'>
            <div className='p-4 border-b border-gray-300'>
                <h3 className='text-lg font-semibold text-gray-800'>Ajin</h3>
                <span className='text-sm text-gray-600'>A Website Designer</span>
            </div>
            <ul className='divide-y divide-gray-200'>
                <DropdownItem img={user_account_icon} text='My Profile' />
                <DropdownItem img={settings_icon} text='Settings' />
            </ul>
        </div>
    );
}