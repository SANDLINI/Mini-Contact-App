import React from 'react'
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className= {styles.navBox}>
        <NavLink className={styles.NavLink} to='/'>Home</NavLink>
        <NavLink className={styles.NavLink} to = '/contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar;