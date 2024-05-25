import React, { useContext, useRef, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { Context } from '../../contextApi/Context'
import { axiosInstance } from '../../utils'
import {MdError} from 'react-icons/md'



export default function Login() {

  const userRef = useRef()
  const passwordRef = useRef()
  const [errorMsg, setErrorMsg] = useState("")
  const {dispatch, isFetching} = useContext(Context)
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch({type: "LOGIN_START"});
    try{
      const res = await axiosInstance.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      setErrorMsg(res.data.message)
      dispatch({type: "LOGIN_SUCCESS", payload: res.data.data});
    } catch(error){
      dispatch({type: "LOGIN_FAILURE"});
    }
  };

  return (
    <div className="login">
        <div className='container'>
            <h1 className="text-center fs-2 fw-bold about-header pt-4 pb-2">Login</h1>
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
                                    <div className="loginForm">
                                    <label className="mb-2 form-font fs-6">Username</label>
                                    <input 
                                    className="formInput mb-3" 
                                    type="text"   
                                    id='username'
                                    placeholder="Enter your Username" 
                                    required
                                    ref={userRef}
                                    />
                                    </div>

                                    <div className="loginForm">
                                    <label class="mb-2 form-font fs-6">Password</label>
                                    <input 
                                    className="formInput mb-3" 
                                    type="password"   
                                    id='password'
                                    placeholder="Enter your password" 
                                    required
                                    ref={passwordRef}
                                    />
                                    </div>                                   
                                    <button type="submit" className='loginButton' disabled={isFetching}>Login</button>
                                    <p className='text-center'>
                                      Don't have an account? 
                                      <button className='regBtn'>
                                        <Link className='link' to='/register'>
                                          Register
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
