import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <p>Navbar</p>
        <NavLink to="/" className={(arg) => (arg.isActive ? classes.active : undefined)}>
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        <NavLink to="/create" className={(arg) => (arg.isActive ? classes.active : undefined)}>
          Create
        </NavLink>
      </div>
      <div className={classes.menu}>
        <NavLink to="/profile" className={(arg) => (arg.isActive ? classes.active : undefined)}>
          Profile
        </NavLink>
        <button className={classes.login}>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
