import React from 'react'
import './post.css'
import BlogPost from '../Post/BlogPost'

export default function Post({ posts }) {
  return (
    <div className='post col'>
      <div className='flex'>
        {posts.map((p) => {
          return(
            <div >
              <BlogPost post={p}/>
            </div>
          )
          })}
      </div>
    </div>
  )
}
