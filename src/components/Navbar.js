import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className='navbar bg-primary navbar-dark navbar-expand-lg p-sm-2'>
        <div className='navbar-brand'>
            Github Search
        </div>
        <ul className='navbar-nav'>
            <li className='nav-link'>
                <NavLink exact to='/' className='nav-link'>Home</NavLink>
            </li>
            <li className='nav-link'>
                <NavLink to='/about' className='nav-link'>Info</NavLink>
            </li>

        </ul>
    </nav>
)