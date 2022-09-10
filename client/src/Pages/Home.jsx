import React from 'react'
import {useState, useEffect} from 'react'
import {useLocation} from 'react-router'
import './home.css'
import Post from '../Components/Posts/Post'
import Sidebar from '../Components/Sidebar/Sidebar'
import Heading from '../Components/Heading/Heading'
import { axiosInstance } from '../utils'

export default function Home() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()

  useEffect(() =>{
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts/" + search)
      setPosts(res.data.data)
    } 
    fetchPosts()
  }, [setPosts, search])
  return (
    <>
      <Heading />
      <div className='home-container'>
        <div className='row row-cols-lg'>
          <Post posts={posts}/>
          <Sidebar />
        </div>
      </div>
    </>
  )
}
