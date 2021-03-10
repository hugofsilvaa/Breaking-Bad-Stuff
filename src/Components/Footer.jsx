import React from 'react'
import { FaInstagram , FaGithub, FaFacebook} from "react-icons/fa";
import { IconContext } from 'react-icons'
import './Character.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Footer() {
    return (
        <div className='footer'>
            <div className="social-media">
            <IconContext.Provider value={{size:'1.5rem', color: 'black'}}>
            <Link to='#' className='social-icons'><FaInstagram /></Link>
            <Link to='#' className='social-icons'><FaGithub /></Link>
            <Link to='#' className='social-icons'><FaFacebook /></Link>
            </IconContext.Provider>
            </div>
            <div className="websites">
            <Link to='https://www.twilio.com/' className='websites'>Twillo</Link>
            <Link to='https://www.wildcodeschool.com/pt-PT' className='websites'>WCS</Link>
            </div>
            <p>2021 all rigths reserved</p>
        </div>
    )
}
