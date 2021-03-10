import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from './Logo/vaccine.png'

export default function NavBar() {
    const [search, setSearch] = useState('');

    return (
        <div className='NavBar'>
            <Link to='/'><img src={Logo} alt="Logo"/></Link>
            <input type="text" name="searchBar" placeholder='Search...' onChange={e => setSearch(e.target.value)}/>
            <div className="links">
                <Link to='/' className='link-text'>Home</Link>
                <Link to='/about' className='link-text'>About</Link>
            </div>
        </div>
    )
}
