import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='header'>
            <span className='logo'>Your Local Pizza Place</span>
            <span className='header-right'>
                <span className='login'>Sign in</span>
                <span className='basket'>Basket</span>
            </span>
        </div>
        <nav className='page-nav'> 
            <ul>
                <Link className='link nav-item' to="/pizza"><li>PIZZA</li></Link>
                <Link className='link nav-item' to="/salads"><li>SALADS</li></Link>
                <Link className='link nav-item' to="/beverages"><li>BEVERAGES</li></Link>
                <Link className='link nav-item' to="/desserts"><li>DESSERTS</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar