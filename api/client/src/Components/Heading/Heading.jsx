import React from 'react'
import './heading.css'
import headerImg from '../../blogImg.jpg'

export default function Heading() {
  return (
    <div className='header'>
        <div className='headingTitles'>
          <span className='headTitleSm'>React & Node</span>
          <span className='headTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={headerImg} alt="" />
    </div>
  )
}
