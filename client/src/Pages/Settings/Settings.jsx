import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './setting.css'
import ProfileSettings from '../../Components/ProfileSettings/ProfileSettings'

export default function Settings() {
  return (
   <div className='home-container'>
        <div className='row row-cols-lg'>
            <ProfileSettings />
            <Sidebar />
        </div>
    </div>
  )
}
