import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import './onepost.css'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { axiosInstance } from '../../utils'
import { Context } from '../../contextApi/Context'


export default function OnePost() {
    const location = useLocation()
    const path = (location.pathname.split("/")[2])
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [update, setUpdate] = useState(false)
    const [loading, setLoading] = useState(false)
    const { user } = useContext(Context)
    const PF = "https://seunblog.herokuapp.com/images/"

    useEffect(() => {
        const getPost = async () => {
            const res = await axiosInstance.get('/posts/' + path)
            setPost(res.data.data)
            setTitle(res.data.data.title)
            setDesc(res.data.data.desc)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        setLoading(true)
        try{
            await axiosInstance.delete(`/posts/${post._id}`, {
                data: {username: user.username}
            })
            window.location.replace('/')
        }catch(error) {}
        setLoading(false)
    }

    const handleUpdate = async () => {
        try{
            await axiosInstance.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc
            })
            setUpdate(false)
        }catch(error) {}
    }
  return (
    <div className='col onePost home-container'>
        <div className="onePostWrapper">
            {post.postImage && (
                <img className='onePostImg' src={PF + post.postImage} alt="" />
            )} 
            {update ? (
                <input type="text" value={title} className="onePostTitleInput" onChange={(e)=> setTitle(e.target.value)} autoFocus/>
                ) : (
                    <h1 className="onePostTitle">{title}
                        {post.username === user?.username && (
                            <span className='onePostEdit'>
                                <FiEdit className='onePostIcon' color='teal' onClick={()=>setUpdate(true)}/>
                                <RiDeleteBin5Line className='onePostIcon' color='red' onClick={handleDelete} disabled={loading}/>
                            </span>
                        )}
                    </h1>
                )}
            <div className='onePostInfo'>
                <span className='onePostAuthor text-secondary'>Author :
                    <Link to={`/?user=${post.username}`} className="link">
                        <b> {post.username}</b>
                    </Link>
                </span>
                <span className='onePostDate text-secondary'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            {update? ( 
                <textarea className='onePostDescInput' value={desc} onChange={(e)=> setDesc(e.target.value)}/>
            ): (
                <p className='onePostDesc'>
                    {desc}
                </p>
            )}
            {update && 
                <button className='updateButton' onClick={handleUpdate}>Update Post</button>
            }
        </div>
    </div>
  )
}
