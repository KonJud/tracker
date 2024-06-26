import { orders } from '@/app/lib/seed-data'
import Image from 'next/image'
import React from 'react'
import OrderStatus from '../components/OrderStatus'
import {formatDate} from "@/app/lib/utils";
import { getLastFiveOrders } from "@/app/lib/prisma"

async function LatestOrders() {


  const latestOrders = await getLastFiveOrders() // la fonction pour selectionner les 5 dernières commandes dans le tableau de bord

  return (
    <div className='w-full h-full bg-purple-200 rounded-md p-2'>
        {/* desktop device*/}
        <div className="hidden md:block w-full">
          <table className='bg-purple-200 w-full'>
            <thead>
              <tr className='border-b-2 border-purple-300'>
                <th className='text-left px-6 py-4'>Order Id</th>
                <th className='text-left px-6 py-4'>Product</th>
                <th className='text-left px-6 py-4'>Date</th>
                <th className='text-left px-6 py-4'>Status</th>
              </tr>
            </thead>  
            <tbody className='bg-white overflow-hidden rounded-md'>
              {latestOrders.map(order => (
                <tr key={order.id} className='border-b-2 border-purple-300'>
                  <td className='px-6 py-3 whitespace-nowrap'>{order.id}</td>
                  <td className='px-6 py-3 whitespace-nowrap'>
                    <div className="flex items-center">
                      <Image
                        src={order.productImage}
                        alt={"product image"}
                        width={30}
                        height={30}
                        className='rounded-full h-8 w-8 mr-3'
                      />
                      {order.productName.slice(0, 25) + "..."}
                    </div>
                  </td>
                  <td className='px-6 py-3 whitespace-nowrap'>
                    {formatDate(order.createdAt.toISOString(), true)}
                  </td>
                  <td className='px-6 py-3 whitespace-nowrap'>
                    <OrderStatus status={order.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* mobile device */}
        <div className="flex flex-col md:hidden gap-3">
          {
            latestOrders.map(order => (
              <div
                className='rounded-md px-3 py-4 flex flex-col gap-2 bg-white'
                key={order.id}
              >
                <div className="flex items-center">
                  <Image
                    src={order.productImage}
                    alt={"product image"}
                    width={30}
                    height={30}
                    className='rounded-full h-8 w-8 mr-3'
                  />
                  <span>{order.productName.slice(0, 25) + "..."}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p>{order.price}</p>
                    <p>{formatDate(order.createdAt.toISOString())}</p>
                  </div>
                  <OrderStatus status={order.status}/>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default LatestOrders