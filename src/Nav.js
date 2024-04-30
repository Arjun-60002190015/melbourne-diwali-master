import React from 'react'
import './Nav.css'
import { useState, useEffect } from 'react';
import {Link} from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'

//https://test2.melbournediwali.com.au/wp-content/uploads/2023/11/MD-Logo-Transparent.png

function Nav() {
    const navRef = useRef();
    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    
  const[show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => {
      if (window.scrollY>100){
          handleShow(true);
      }else{
          handleShow(false);
      } 
  }

  useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return() => window.removeEventListener("scroll", transitionNavBar)
      
  }, [])
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <a>
      <img 
      onClick={()=> history("/")}
      className='nav__logo'
      src="https://test2.melbournediwali.com.au/wp-content/uploads/2023/11/MD-Logo-Transparent.png" alt=""
      />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Glimpse of '23
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About us
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Gallery
          </a>
        </li>
        
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  
  
)
}

export default Nav

/* <div className={`nav ${show && 'nav__black'}`}>
      
      <div className='nav__content'>
      <img 
      onClick={()=> history("/")}
      className='nav__logo'
      src="https://test2.melbournediwali.com.au/wp-content/uploads/2023/11/MD-Logo-Transparent.png" alt=""
      />*/
