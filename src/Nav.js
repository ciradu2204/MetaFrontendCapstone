import logo from "./Img/Logo.svg"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react"
import { Link } from "react-router-dom"
const Nav = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
    const closeSideBar = () => {
         setSidebarOpen(false)
    }

    const openSideBar = () => {
        setSidebarOpen(true)
    }
    const links = [
      {
        name:"Home",
        path: ""
      },
      {
        name:"About",
        path: "about"
      },
      {
        name: "Booking",
        path: "booking"
      }
    ]
    return (
        <nav  id="navbar">
          <img alt="logo" src={logo}/>
          <GiHamburgerMenu id={`hamburgerMenuIcon`} className={`${!sidebarOpen? "active":""}`} onClick={openSideBar}/>
          <ul>
          {links.map((link,index) => (
            <li key={index}><Link data-testid={link.path} to={link.path} >{link.name}</Link></li>
          ))}
          </ul>
          <div id={`sidebar`} className={`${sidebarOpen? "active":""}`}>
            <AiOutlineClose className={`closeIcon`} onClick={closeSideBar}/>
          <ul>
          {links.map((link, index) => (
            <li key={index}><Link to={link.path}>{link.name}</Link></li>
          ))}
          </ul>
          </div>
        </nav>
    )
}

export default Nav