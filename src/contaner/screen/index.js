import React from 'react';
import Head from './head';

export default function Screen() {
    return (
        <>
            <Head />
            <div className='grid grid-cols-4'>
                <div className='grid col-span-3 px-8'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='rounded-xl bg-white px-4 py-2 flex flex-row items-center gap-4'>
                            <div>
                                Icon
                            </div>
                            <div>
                                <p className='text-xl text-[#929090]'>Total Arrived</p>
                                <p className='text-2xl font-bold'>231</p>
                            </div>
                        </div>
                        <div className='rounded-xl bg-white px-4 py-2 flex flex-row items-center gap-4'>
                            <div>
                                Icon
                            </div>
                            <div>
                                <p className='text-xl text-[#909292]'>Total Booked</p>
                                <p className='text-2xl font-bold'>891</p>
                            </div>
                        </div>
                        <div className='rounded-xl bg-white px-4 py-2 flex flex-row items-center gap-4'>
                            <div>
                                Icon
                            </div>
                            <div>
                                <p className='text-xl text-[#929090]'>Total Check In</p>
                                <p className='text-2xl font-bold text-green-950'>192</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <p>DZ</p>
                </div>

            </div>
        </>
    )
}
