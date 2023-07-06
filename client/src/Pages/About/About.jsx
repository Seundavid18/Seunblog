import React, { useContext } from 'react'
import './about.css'
import { Context } from '../../contextApi/Context'

export default function About() {
    const {user} = useContext(Context)
    const PF = "https://seunblogapp.azurewebsites.net/images/"
    //const PF = "http://localhost:9000/images/"
  return (
    <div className='container'>
        <div className='mt-3'>
            <img src={PF + user.profilePicture} alt="" className='imgBox'/>
        </div>
        <div>
            <h4 className='fullname mt-5'>Name: {user.fullName}</h4> 
        </div>
        <div>
            <p className='mt-4 fs-6'>{user.about}</p>
        </div>
    </div>
  )
}
