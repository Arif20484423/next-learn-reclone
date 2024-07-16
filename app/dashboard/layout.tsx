import React, { ReactNode } from 'react'
import SideNav from '../ui/dashboard/sidenav'
export default function layout ({children}:{children:ReactNode}){
  return (
    <div className='flex'> 
        <div className='w-[250px]'>
        <SideNav></SideNav>
        </div>
        <div className='m-5'>{children}</div>
    </div>
  )
}

