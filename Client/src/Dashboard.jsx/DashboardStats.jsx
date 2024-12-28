import React from 'react';
import { formatNumber } from '../utils/formateHelper';

export default function DashboardStats() {
    return (
        <div className='md:w-3/4 mx-auto text-center dashboard-stats-box py-10' >
            <h1 className='text-5xl md:text-7xl pb-7 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-indigo-500 drop-shadow-lg'>SOUL SPEAK</h1>
            <div className='grid md:grid-cols-3 gap-10'>
                <div>
                    <h1 className='text-5xl md:text-6xl pb-2 font-semibold text-sky-800 ' >Users</h1>
                    <span className='text-5xl md:text-6xl font-bold text-gray-400' >{formatNumber(454554)}</span>
                </div>
                <div>
                    <h1 className='text-5xl md:text-6xl pb-2 font-semibold text-sky-700' >Stories Published</h1>
                    <span className='text-5xl md:text-6xl font-bold text-gray-400' >{formatNumber(450)}</span>
                </div>
                <div>
                    <h1 className='text-5xl md:text-6xl pb-2 font-semibold text-sky-600' >Total Comments</h1>
                    <span className='text-5xl md:text-6xl font-bold text-gray-400' >{formatNumber(454554)}</span>
                </div>
            </div>
        </div>
    )
}