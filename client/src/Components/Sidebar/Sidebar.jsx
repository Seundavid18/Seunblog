import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import {AiOutlineGithub} from "react-icons/ai";
import {AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import { useContext } from 'react';
import { Context } from '../../contextApi/Context';
import { axiosInstance } from '../../utils'

export default function Sidebar() {
  const [cats, setCats] = useState([])
  const {user} = useContext(Context)
  const PF = "https://seundavidblog.azurewebsites.net/images/"
  //const PF = "http://localhost:9000/images/"

  useEffect(()=>{
    const getCat = async () => {
      const res = await axiosInstance.get('/categories/')
      setCats(res.data.data)
    }
    getCat()
  }, [setCats])
  return (
    <div className='col-lg-3 sidebar pt-2 pb-3'>
      {user &&
        <div className='sidebarItem ms-3 me-3'>
          <span className='sidebarTitle d-flex justify-content-center'>ABOUT ME</span>
            <img className='sidebarImg pt-2' src={PF + user.profilePicture} alt="" />
            <p className='about ps-2 pt-2'>{user.about}</p>
            <Link to="/about" className="link">
              <p className="read-more">Read More</p> 
            </Link>
        </div>
       }
      <div className='sidebarItem'>
        <span className='sidebarTitle d-flex justify-content-center'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className='link'>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle d-flex justify-content-center'>FOLLOW US</span>
        <div className='sidebarSocial d-flex justify-content-center pt-2'>
          <AiOutlineGithub className='me-2' size={22}/>
          <AiFillLinkedin className='me-2' size={22}/>
          <AiOutlineTwitter className='me-2' size={22}/>
          <AiOutlineInstagram size={22}/>
        </div>
      </div>
    </div>
  )
}
