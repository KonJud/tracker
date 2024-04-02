import { users } from '@/app/lib/seed-data'
import Image from 'next/image'
import React from 'react'
import OrderStatus from '../components/OrderStatus'

function DashUsers() {

    const dashUsers = users
  return (
    <div className='w-full h-full bg-purple-200 rounded-md p-2'>
        {/* desktop device*/}
        <div className="hidden md:block w-full">
          <table className='bg-purple-200 w-full'>
            <thead>
              <tr className='border-b-2 border-purple-300'>
                <th className='text-left px-6 py-4'>Name</th>
                <th className='text-left px-6 py-4'>Email</th>
                <th className='text-left px-6 py-4'>Phone number</th>
              </tr>
            </thead>  
            <tbody className='bg-white overflow-hidden rounded-md'>
              {dashUsers.map(user => (
                <tr key={user.id} className='border-b-2 border-purple-300'>
                  <td className='px-6 py-3 whitespace-nowrap'>
                    <div className="flex items-center">
                      <Image
                        src={user.avatar}
                        alt={"product image"}
                        width={30}
                        height={30}
                        className='rounded-full h-8 w-8 mr-3'
                      />
                      {user.userName.slice(0, 25) + "..."}
                    </div>
                  </td>
                  <td className='px-6 py-3 whitespace-nowrap'>
                    {user.email}
                  </td>
                  <td className='px-6 py-3 whitespace-nowrap'>
                    {user.phoneNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* mobile device */}
        <div className="flex flex-col md:hidden gap-3">
          {
            dashUsers.map(user => (
              <div
                className='rounded-md px-3 py-4 flex flex-col gap-2 bg-white'
                key={user.id}
              >
                <div className="flex items-center">
                  <Image
                    src={user.avatar}
                    alt={"product image"}
                    width={30}
                    height={30}
                    className='rounded-full h-8 w-8 mr-3'
                  />
                  <span>{user.userName.slice(0, 25) + "..."}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p>{user.email}</p>
                    <p>{user.phoneNumber}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default DashUsers