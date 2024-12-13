import React, { useCallback, useState } from "react";
import items from "./items";
import down_arrow from './resources/down_arrow.png';
import tick from './resources/tick.png';

export default function Dropdown() {
    const [selected_value, setSelected_value] = useState({ value: 'Select a Language' });
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleOnClick = useCallback((item) => {
        setSelected_value(item);
        setOpen(false);
        setSearchTerm('');
    }, []);

    const filteredItems = items.filter(item =>
        item.value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='relative flex flex-col w-48 m-2'>
            <div className='flex items-center border-slate-400 border-2 rounded-sm justify-between pl-1 cursor-pointer' onClick={() => setOpen(!open)}>
                <div className='flex items-center'>
                    <h2 className=''>{selected_value.value}</h2>
                    {selected_value.img && <img src={selected_value.img} alt="Flag" className="ml-2 h-5" />}
                </div>
                <img src={down_arrow} alt="Down Arrow" className={`h-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </div>
            {open && (
                <div className='absolute left-0 z-10 border border-slate-400 rounded-sm mt-1 bg-white'>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='border-b border-slate-400 p-2 w-full rounded-t-sm focus:outline-none'
                    />
                    <ul className='max-h-60 overflow-y-auto'>
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <li key={item.id} className="flex h-10 border-t border-slate-400">
                                    <button type='button' className='flex items-center justify-between w-full hover:bg-slate-200' onClick={() => handleOnClick(item)}>
                                        <div className="flex pl-1">
                                            <span>{item.value}</span>
                                            <img src={item.img} alt="Flag" className="ml-2 h-5" />
                                        </div>
                                        {selected_value.value === item.value && <img src={tick} alt="Tick" className="h-5" />}
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="flex h-10 items-center justify-center text-gray-500">No results found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}