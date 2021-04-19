import React from 'react'
import './header.css'
import logo from './header-img/logo.png'
import profileIcon from './header-img/profile-icon.png'
import bell from './header-img/bell.png'



const header = () => {
    return (
        <div >
            <div >
                <div className = "nav-bar"> 
                <div className = "logo-title">
                    <a href="#"> <img src={logo} alt="logo"/></a>
                    <a href="#"> ribbon </a> 
                </div>
                <div className="right-icons">
                    <a href="#"> <img src={profileIcon}alt="profile-icon"/> </a>
                    <a href="#"> <img src={bell} alt="bell"/> </a>
                </div>
                </div>
            </div>
            
        </div>
        
    )
}


export default header

