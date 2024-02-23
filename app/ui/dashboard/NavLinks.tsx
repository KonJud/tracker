'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaMapLocationDot, FaRegCalendarDays } from 'react-icons/fa6'
import { IoCreate } from 'react-icons/io5'

const links = [
    {
        name: 'Dashboart',
        href: '/dashboard',
        icon: FaHome
    },
    {
        name: 'Orders',
        href: '/dashboard/orders',
        icon: FaRegCalendarDays
    },
    {
        name: 'Tracking',
        href: '/dashboard/tracking',
        icon: FaMapLocationDot
    },
    {
        name: 'Create Order',
        href: '/dashboard/orders/create',
        icon: IoCreate
    }
]


function NavLinks() {
    const pathname = usePathname()
  return (
    <div className="flex flex-col gap-3 items-start w-full mt-10">
        {links.map((link) => (
            <Link
                href={link.href}
                className={clsx(`flex h-16 w-full items-center rounded-md hover:bg-purple-50 hover:pl-2 text-purple-400 font-bold justify-start gap-2 cursor-pointer`, {
                    'bg-purple-50 pl-2': pathname === link.href
                }
                )}
            >
                <link.icon className='w-6 h-6 block text-purple-400' />
                <p className={clsx(`text-xl hidden md:block`)}>
                    {link.name}
                </p>
            </Link>
        ))}
    </div>
  )
}

export default NavLinks