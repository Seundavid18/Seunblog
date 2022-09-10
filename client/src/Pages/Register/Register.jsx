import React from 'react'
import { useState } from 'react'
import './register.css'
import {MdError} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../../utils'

export default function Register() {
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const handleFullname = (e) => {
    setFullName(e.target.value)
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)
  };

  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit =  (e) => {
    e.preventDefault()

    const signin = {
        fullName: `${fullName}`,
        username: `${username}`,
        email: `${email}`,
        password: `${password}`
    }
    axiosInstance.post('/auth/register', signin)
    .then(response => {
      if (response.data.success === true) {
        response.data && window.location.replace("/login") 
      } else {
        setErrorMsg(response.data.message)
      }
    })
  };
  return ( 
    <div className="register">
        <div className='container'>
            <h1 className="text-center fs-2 fw-bold about-header pt-4 pb-2">Register</h1>
            {errorMsg && 
              <div className="d-flex mx-auto justify-content-center align-items-center">
                <div className='errBox'>
                  <h4 className="text-center text-danger d-flex justify-content-center align-items-center fs-6 mt-1"><MdError className="me-3" size={16} color="#ff0000"/>{errorMsg}</h4>
                </div>
              </div> 
            }
                <div className="row mx-auto justify-content-center align-items-center flex-column ">
                    <div className="col-lg-6">
                                <form onSubmit={handleSubmit}>

                                <div className="registerForm">
                                    <label className="mb-2 form-font fs-6">Full Name</label>
                                    <input 
                                    className="formInput mb-3" 
                                    type="text"   
                                    placeholder="Enter your full name" 
                                    required
                                    onChange={handleFullname}
                                    />
                                  </div>

                                <div className="registerForm">
                                    <label className="mb-2 form-font fs-6">Username</label>
                                    <input 
                                    className="formInput mb-3" 
                                    type="text"   
                                    placeholder="Enter your Username" 
                                    required
                                    onChange={handleUsername}
                                    />
                                    </div>

                                    <div className="registerForm">
                                    <label className="mb-2 form-font fs-6">Email</label>
                                    <input 
                                    className="formInput mb-3" 
                                    type="email"   
                                    placeholder="Enter your email address" 
                                    required
                                    onChange={handleEmail}
                                    />
                                    </div>

                                    <div className="registerForm">
                                    <label class="mb-2 form-font fs-6">Password</label>
                                    <input 
                                    className="formInput mb-3" 
                                    type="password"   
                                    placeholder="6+ characters" 
                                    required
                                    onChange={handlePassword}
                                    />
                                    </div>                                   
                                    <button type="submit" className='registerButton'>Register</button>
                                    <p className='text-center'>
                                      Have an account? 
                                      <button className='logBtn'>
                                        <Link className='link' to='/login'>
                                          Login
                                        </Link>
                                      </button>
                                    </p>
                                </form>
                    </div>
                </div>
        </div>      
    </div>
  )
}
