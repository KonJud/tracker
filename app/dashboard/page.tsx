import React from 'react'
import Upbar from '../ui/components/upbar'
import Cards from '../ui/dashboard/Cards'
import LatestOrders from '../ui/dashboard/LatestOrders'
import DashUsers from "@/app/ui/dashboard/DashUsers";
import OrderChat from '../ui/dashboard/OrderChat';
import {getCardData, getChartData} from "@/app/lib/prisma";

async function Dashboard() {
    const cardData = await getCardData()
    const chartData = await getChartData()
  return (
    <main className={"h-screen w-full overflow-auto"}>
      <Upbar>
        <p className='cursor-pointer text-xl md:text-2xl text-purple-100 font-bold'>
          Dashboard
        </p>
      </Upbar>

      <div className='grid my-5 grid-cols-2 md:grid-cols-4 gap-6 lg:grid-cols-4'>
        <Cards
            title="Pending"
            value={cardData.numberOfOrderPending}
            type="pending"
        />
        <Cards
            title="On the way"
            value={cardData.numberOfOrderDelivered}
            type="delivered"
        />
        <Cards
            title="Delivered"
            value={cardData.numberOfOrderDelivered}
            type='delivered'
        />
        <Cards
            title='Reviews'
            value="20"
            type='reviews'
        />
      </div>

      <div className="grid md:flex-col flex-col-reverse">
        <div className='flex w-full md:overflow-hidden flex-col gap-5 md:flex-row items-start'>
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl mb-1'>
              Latest Orders
            </h1>
            <div className=""><LatestOrders /></div>
          </div>

          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl mb-1'>
              All Users
            </h1>
            <div className="">
              <DashUsers/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 h-[350px]">
        <h1 className={"text-2xl mb-2"}>
          Chart Section
        </h1>
        <OrderChat chartData={chartData}/>
      </div>
    </main>
  )
}

export default Dashboard