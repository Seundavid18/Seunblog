import React from 'react'
import './blogPost.css'
import { Link } from 'react-router-dom'




export default function BlogPost({ post }) {

    const PF = "http://localhost:9000/images/"
  return (
    <div className='blogpost'>
            <div className="flex-box">
                {post.postImage && (
                    <img className="postImg pb-3" src={PF + post.postImage} alt=""/>
                )}
                <hr />
                <div className='d-flex justify-content-center'>
                    {/* {post.categories.map((cat)=>(
                        <Link to={`/?cat=${cat.name}`} className='link'>
                            <span className="postcat">{post.categories}</span>
                        </Link>
                    ))} */}
                    {post.categories && 
                        <span className="postcat">{post.categories}</span>
                    }
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <h6 className="text-center fs-4 fw-bold pb-3 postTitle">{post.title}</h6>   
                </Link>
                <h6 className="postBody pb-2">{post.desc}</h6>
                <Link to={`/post/${post._id}`} className="link">
                    <p className="read-more float-end">Read More</p> 
                </Link>
                <p className='timeStamp text-secondary'>{new Date(post.createdAt).toDateString()}</p>
                <hr />
            </div>
    </div>
  )
}
