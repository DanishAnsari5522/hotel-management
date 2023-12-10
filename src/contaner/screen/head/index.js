import React from 'react';
import { Bell,CaretDown } from '@phosphor-icons/react'

export default function Head() {
    return (
        <>
            <div className='grid grid-cols-2 py-10 px-8'>
                <div>
                    <p className='text-2xl'>Welcome <span className='text-4xl'>Ashutosh!</span></p>
                    <p className='text-xl text-[#929090]'>Don't Forget to Check your activity</p>

                </div>
                <div className='justify-end flex'>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='bg-white p-2 rounded-full'>
                            <Bell size={32} />
                        </span>
                        <div className='flex flex-row gap-2 items-center'>
                            <div>
                                <p className='text-2xl'>Tiware Jii</p>
                                <p className='text-xl'>Disc</p>
                            </div>
                            <div className="flex -space-x-1 overflow-hidden">
                                <img
                                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            <CaretDown size={32} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
