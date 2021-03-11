import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Character.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social-media'>
        <IconContext.Provider value={{ size: "1.5rem", color: "black" }}>
          <Link to='#' className='social-icons'>
            <FaInstagram />
          </Link>
          <Link to='#' className='social-icons'>
            <FaGithub />
          </Link>
          <Link to='#' className='social-icons'>
            <FaFacebook />
          </Link>
          <Link to='#' className='social-icons'>
            <FaLinkedin />
          </Link>
          <Link to='#' className='social-icons'>
            <FaYoutube />
          </Link>
        </IconContext.Provider>
      </div>
      <div className='websites'>
        <p className='sponsers'>Hackathon sponsered by:</p>
        <Link
          to={{ pathname: "https://www.wildcodeschool.com/pt-PT" }}
          target='_blank'
          className='websites'>
          WCS
        </Link>
        <Link
          to={{ pathname: "https://www.twilio.com" }}
          target='_blank'
          className='websites'>
          Twilio
        </Link>
      </div>
      <div className='credits'>
        <p>&copy; 2021 all rigths reserved</p>
        <p>Logo credit to: mavadee @flaticon</p>
      </div>
    </div>
  );
}
