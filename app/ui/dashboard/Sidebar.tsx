import { poppins } from '@/app/lib/font'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { IoSettings } from "react-icons/io5"
import { CiLogout } from "react-icons/ci"
import Image from 'next/image'
import NavLinks from './NavLinks'



function Sidebar() {
    
  return (
    <div className='bg-purple-500 w-full flex flex-col h-screen py-2 p-3'>
        <Link 
            href={'/'}
            className='hidden md:block text-4xl text-purple-50 cursor-pointer'
        >
            <p className={clsx(`${poppins.className} font-bold`)}>
                Tracker
            </p>
        </Link>

        <NavLinks />

        <div className="flex-grow"></div>

        <Link
            href={'/settings'}
            className='h-16 hover:bg-purple-50 hover:pl-2 rounded-md flex items-center gap-3'
        >
            <IoSettings className='text-purple-400 w-6 h-6'/> 
            <p className={clsx(`text-xl text-purple-400 font-bold hidden md:block`)}>
                Settings
            </p>
        </Link>

        <form
            className='h-16 hover:bg-purple-50 hover:pl-2 rounded-md flex items-center gap-3'
        >
            <Button
                variant={'ghost'}
                className='flex items-center justify-start gap-3 pl-0'
            >
                <CiLogout className='text-purple-400 w-6 h-6'/> 
                <p className={clsx(`text-xl text-purple-400 font-bold hidden md:block`)}>
                    Logout
                </p>
            </Button>
        </form>

        <div className="cursor-pointer h-16 flex items-center gap-3">
            <div className='relative w-[30px] h-[30px]'>
                <Image 
                    // src={'/profile01.jpg'}
                    src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                    alt={'profile Image'}
                    fill
                    quality={100}
                    className='rounded-full object-cover '
                />
            </div>
            <p className={clsx(`text-xl text-purple-400 font-bold hidden md:block`)}>
                Profile
            </p>
        </div>
    </div>
  )
}

export default Sidebar