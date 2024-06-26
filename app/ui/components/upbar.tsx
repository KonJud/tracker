import React, { Children } from 'react'

import { FaBell } from "react-icons/fa6"

function Upbar({
    children
}: {
    children: React.ReactNode
}) {
  return (
    <div className='h-20 px-3 md:px-7 w-full flex items-center bg-purple-500'>
         <div className='flex-1 flex items-center justify-between'>
            {children}
         </div>
         <div className="ml-10 md:ml-28">
            <FaBell className='h-10 w-10 text-white cursor-pointer'/>
         </div>
    </div>
  )
}

export default Upbar