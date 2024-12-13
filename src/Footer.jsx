import React from "react";
import instagram from './resources/instagram.png'
import twitter from './resources/twitter.png'
import whatsapp from './resources/whatsapp.png'
import facebook from './resources/facebook.png'

export default function Footer() {
    return(
        <footer className='bg-slate-800 flex flex-col justify-center items-center h-40 space-y-1'>
            <div className='flex h-3/12 space-x-5'>
                <img src={instagram} alt="Logo 1" className='h-6 rounded-sm invert hover:opacity-50'/>
                <img src={twitter} alt="Logo 2" className='h-6 rounded-sm invert hover:opacity-50'/>
                <img src={whatsapp} alt="Logo 3" className='h-6 rounded-sm invert hover:opacity-50'/>
                <img src={facebook} alt="Logo 4" className='h-6 rounded-sm invert hover:opacity-50'/>
            </div>
            <div className="flex space-x-3 h-3/12 p-1">
                <a href="" className='text-lg text-slate-400 hover:text-red-500'>Home</a>
                <a href="" className='text-lg text-slate-400 hover:text-red-500'>Services</a>
                <a href="" className='text-lg text-slate-400 hover:text-red-500'>About</a>
                <a href="" className='text-lg text-slate-400 hover:text-red-500'>Terms</a>
                <a href="" className='text-lg text-slate-400 hover:text-red-500'>Privacy Policy</a>
            </div>
            <p className="text-slate-500 font-bold text-opacity-60 h-2/12">Ajin Chundakkattu Raju @2024</p>
        </footer>
    )
}