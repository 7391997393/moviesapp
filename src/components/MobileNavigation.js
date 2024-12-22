import React from 'react'
//import { mobileNavigation } from '../contants/navigation'
import { NavLink } from 'react-router-dom'
import navigation from '../constants/navigation';
import { mobileNavigation } from '../constants/navigation';


const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-40'>
        <div className='flex items-center justify-between h-full text-neutral-400'>
            {
                mobileNavigation.map((nav,index)=>{
                    return(
                        <NavLink 
                            key={nav.label+"mobilenavigation"} 
                            to={nav.href}
                        >
                            <div className='text-2xl'>
                                {nav.icon}
                            </div>
                            <p className='text-sm'>{nav.label}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    </section>
  )
}

export default MobileNavigation;
