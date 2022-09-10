import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import OnePost from '../../Components/Single/OnePost'
import './singlepost.css'

export default function SinglePost() {
  return (
    <div className='singlePost ms-lg-5 me-lg-5'>
        <div className='row row-cols-lg'>
            <OnePost />
            <Sidebar />
        </div>
    </div>
  )
}
