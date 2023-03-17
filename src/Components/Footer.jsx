import React from "react";
import { Navbar } from "react-bootstrap";
import './Footer.css';
import { Link } from "react-router-dom";


export default function Footer() {
  
  return (
    
    <Navbar className="footer" bg="dark" variant="dark">
      <Navbar.Text className='Light-Font'>© GamingPalace E-Commerce, 2023. All rights reserved.</Navbar.Text>
      
      <Navbar className="footer_buttons">
      <Navbar.Text >
        <Link to='/inconstruction'>
          <button className="btn btn-danger text-decoration-none">About us</button>
        </Link>
      </Navbar.Text >

      <Navbar.Text>
        <Link to='/inconstruction'>
          <button className="btn btn-danger text-decoration-none">Contact us</button>
        </Link>
      </Navbar.Text>
    </Navbar>


    </Navbar>
  )
}