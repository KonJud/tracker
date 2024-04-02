import React from 'react'

import { FaClock } from "react-icons/fa6"
import { IoIosRocket } from "react-icons/io"
import { FaGift } from "react-icons/fa6"
import { BsPencilSquare } from "react-icons/bs"

const iconMap = {
    pending: FaClock,
    "on the way": IoIosRocket,
    delivered: FaGift,
    reviews: BsPencilSquare
} as any

function Cards({
    title,
    value,
    type
}: {
    title: string,
    value: string | number,
    type: string
}) {

    const Icon = iconMap[type]
  return (
    <div className='rounded-xl bg-purple-200 p-2 shadow-sm'>
        <div className="flex p-4">
            {Icon ? <Icon className="h-6 w-6 text-purple-500" /> : null}
            <p className='ml-2 text-xl font-medium'>
                {title}
            </p>
        </div>
        <p className={`truncate rounded-xl bg-white px-4 py-4 text-center text-2xl`}>
            {value}
        </p>
    </div>
  )
}

export default Cards