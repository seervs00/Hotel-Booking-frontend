import React, { useState } from 'react'
import Title from '../../Componants/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const DashBoard = () => {
  
    const [dashboardData, setDashboardData] = useState(dashboardDummyData)
  return (
    <div>
        <Title align='left' font='outfit' 
        title='Dashboard' 
        subTitle='Monitor your room listings,track bookings and analyze revenue-all in one place. Stay update eith real-time insights to ensure smooth operations.'/>
         
         <div className='flex gap-4 my-8'> 
            {/* Total Booking */}
            <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
                <img src={assets.totalBookingIcon} alt="booking-icon" 
                className='max-sm:hidden h-10'/>
                <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-neutral-400 text-base'>Total Bookings</p>
                    <p>{dashboardData.totalBookings}</p>
                </div>
            </div>
            {/* Total Revenue */}
            <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
                <img src={assets.totalRevenueIcon} alt="revenue-icon" 
                className='max-sm:hidden h-10'/>
                <div className='flex flex-col sm:ml-4 font-medium'>
                    <p className='text-neutral-400 text-base'>Total Revenue</p>
                    <p>{dashboardData.totalRevenue}</p>
                </div>
            </div>
         </div>

    </div>

  )
}

export default DashBoard