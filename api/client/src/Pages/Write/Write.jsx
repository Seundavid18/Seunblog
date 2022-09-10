import React, { useState } from 'react'
import './write.css'
import { IoMdAdd } from 'react-icons/io'
import { useContext } from 'react'
import { Context } from '../../contextApi/Context'
import { axiosInstance } from '../../utils'

export default function Write() {
  const [title, setTitle] = useState("")
  const [categories, setCategories] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const [showOption, setShowOption] = useState(false)
  const [loading, setLoading] = useState(false)
  const {user} = useContext(Context)

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDesc = (e) => {
    setDesc(e.target.value)
  }

  const handleCat = (e) => {
    setCategories(e.target.value)
    if(e.target.value){
        setShowOption(true)
    }else{
        setShowOption(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {
      username: user.username,
      title,
      desc,
      categories
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename)
      data.append("file", file)
      newPost.postImage = filename;
      try{
        await axiosInstance.post("/upload", data)
      } catch(error) {}
    }
    setLoading(true)
    try{
      const res = await axiosInstance.post('/posts', newPost)
      window.location.replace('/post/' + res.data.data._id)
    } catch(error) {}
    setLoading(false)
  }
  return (
    <div className='writeForm container'>
      {file && 
        <img className='writeImg' src={URL.createObjectURL(file)} alt="" />
      }
      <form className='form-group' onSubmit={handleSubmit}>
        <label htmlFor="fileinput">
          <IoMdAdd className='writeIcon' size={25}/>
        </label>
        <input type="file" id="fileinput" style={{display:'none'}} onChange={handleFile}/>
        <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={handleTitle}/>
        <br />
        <label className='cat text-secondary'> Select Category</label> 
        <br />
        <select name="Categories" className='catInput' onChange={handleCat}>
          <option value="Travel">Travel</option>
          <option value="Sports">Sports</option>
          <option value="Life">Life</option>
          <option value="Games">Games</option>
          <option value="Tech">Tech</option>
          <option value="Music">Music</option>
          <option value="Love">Love</option>
        </select>
        {showOption &&
          <input type="text" className='writeInput' autoFocus={true} disabled value={categories} onChange={handleCat}/>
        }
        <br />
        <div className="writeFormGroup">
          <textarea placeholder='Tell your story...' className='writeInput writeText' onChange={handleDesc} />
        </div>

        <button className="writeSubmit" type='submit' disabled={loading}>
          Publish
        </button>
      </form>
    </div>
  )
}
 