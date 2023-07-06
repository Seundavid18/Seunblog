import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../contextApi/Context';

export default function Navbar() {
    const {user, dispatch} = useContext(Context)
    const PF = "https://seunblogapp.azurewebsites.net/images/"
    //const PF = "http://localhost:9000/images/"

    const handleLogout =() => {
        dispatch({type: "LOGOUT"})
    }
  return (
        <nav className="navbar navbar-expand-lg nav navbar-dark sticky-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand link" to='/'>SEUN-DAVID</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-center" id="navbarNav">
                    <ul className="navbar-nav ms-auto nav-list">
                        <li clasSName="nav-item">
                            <Link className="nav-link active link" aria-current="page" to='/'>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link" to="/about">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link" to="#">CONTACT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link" to="/write">WRITE</Link>
                        </li>
                        <li className="nav-item nav-link" onClick={handleLogout} style={{cursor: 'pointer'}}>
                            {user && "LOGOUT"}
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    
                </div>
                <div>
                    <ul className="navbar-nav ms-auto">
                            {
                                user ? (
                                    <Link to="/settings">
                                        <img className="nav-item nav-dp" src={PF + user.profilePicture} alt=""/>
                                    </Link>
                                ) : (
                                    <div className='d-lg-flex'>
                                        <li className="nav-item">
                                            <Link className="nav-link link" to="/login">LOGIN</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link link" to="/register">REGISTER</Link>
                                        </li>
                                    </div>
                                )
                            }
                            
                        </ul>
                </div>
            </div>
        </nav>
        
  )
}
