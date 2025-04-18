import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Logo from "../assets/Images/Al-Ameen-logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";


const Footer = () => {
  return (
    <div className='Footer'>
       <div className='footer-up'>
      <div className='logo-side'>
        <img className='Logo-footer' src= {Logo} alt="" />
        <p className='Logo-footer-text'>
          Al-Ameen Spark is a dynamic digital
         marketing agency based in Ilorin, Nigeria,
         but offer service in a entire world and that
         why weoperate romotely,dedicated to
         helping businesses of all sizes succeed in
         the digital world. Our team of creative
         experts, strategists, and developers work
         collaboratively to deliver innovative,
         value-driven solutions</p>
         <div className='icon'>
         <FaFacebookSquare />
         <FaTwitterSquare />
         <FaGoogle />
         <FaInstagramSquare />
         <FaLinkedin />
         </div>
      </div>
      <div className='company-div'>
        <h1>Company</h1>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
      <div className='Bussiness-div'>
        <h1>Business</h1>
        <p>Project</p>
        <p>Our Team</p>
        <p>Facts</p>
        <p>Customers</p>
      </div>
      <div className='Get-in-touch-div'>
        <h1>Get In Touch</h1>
        <div className='git-info'>
          <FaHome /> 
          <p>Rt,88 ilorin Kwara state</p>
         </div>
         <div className='git-info'>
          <MdEmail /> 
          <p>infor@example.cpm</p>
         </div>
         <div className='git-info'>
          <FaPhoneVolume />
          <p>+234 917-957-855</p>
         </div>
         <div className='git-info'>
           <MdPhoneIphone />
          <p>+234 9047-957-855</p>
         </div>
       
        
       
      </div>
    </div>
    <div className='copyright'>
      <hr />
      <p className='copyright'> Copyright @ 2025 Al-Ameen-Spark | Powered by The-Techies</p>
    </div>
    </div>
   
  )
}

export default Footer