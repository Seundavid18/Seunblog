import React, { useContext, useState } from 'react'
import './profilesettings.css'
import {FaUserCircle} from 'react-icons/fa'
import { Context } from '../../contextApi/Context'
import { axiosInstance } from '../../utils'


export default function ProfileSettings() {

  const { user, dispatch, isFetching} = useContext(Context)
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState("")
  const [about, setAbout] = useState("")
  // const [password, setPassword] = useState("")
  const [success, setSuccess] = useState(false)
  const PF = "https://seunblog.herokuapp.com/images/"

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleAbout = (e) => {
    setAbout(e.target.value)
  }


  // const handlePassword = (e) => {
  //   setPassword(e.target.value)
  // }

  const handleDelete = async () => {
    try{
        await axiosInstance.delete(`/user/${user._id}`, {
          data: {id: user.id}
        })
        window.location.replace('/register')
    }catch(error) {}
}

  const handleSubmit = async (e) => {
    dispatch({type: "UPDATE_START"})
    e.preventDefault()

    const updatedUser = {
      userId: user._id,
      username,
      about,
      // password
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename)
      data.append("file", file)
      updatedUser.profilePicture = filename;
      try{
        await axiosInstance.post("/upload", data)
      } catch(error) {}
    }
    try{
      const res = await axiosInstance.put('/user/' + user._id, updatedUser)
      setSuccess(true)
      dispatch({type: "UPDATE_SUCCESS", payload: res.data})
    } catch(error) {
      dispatch({type: "UPDATE_FAILURE"})
    }
    
  }

  return (
    <div className='col profileSettings mb-5'>
       <div className="settingsTitle mt-5">
        <span className="settingsUpdateTitle">Update your accout</span>
       </div>
       {success && 
        <div className="profileUpdate d-flex mx-auto justify-content-center align-items-center">
          <h4 className='text-center d-flex justify-content-center align-items-center fs-6 mt-1' style={{color: 'green'}}>Profile Updated</h4>
        </div>
       }
       <form className="settingsForm" onSubmit={handleSubmit}>
        <label>Profile Picture</label>
        <div className='settingsDp'>
            <img src={file ? URL.createObjectURL(file) : PF + user.profilePicture} alt="" />
            <label htmlFor="fileInput">
            <FaUserCircle className='settingsDpIcon'/>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}} onChange={handleFile}/>
        </div>
        <label>Username</label>
        <input type="text" placeholder={user.username} onChange={handleUsername} required/>
        <label>About</label>
        <input type="text" placeholder={user.about} onChange={handleAbout}/>
        {/* <label>Change Password</label>
        <input type="password" onChange={handlePassword}/> */}
        <button className="settingsSubmit" type='submit' disabled={isFetching}>Update</button>
       </form>
       <div className="settingsDeleteTitle" onClick={handleDelete} disabled={isFetching}>Delete account</div>
    </div>
  )
}
