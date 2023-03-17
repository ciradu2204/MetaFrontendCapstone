import logo from "./Img/Logo.svg"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from "react"
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
        path: "/home"
      },
      {
        name:"About",
        path: "/about"
      },
      {
        name: "Specials",
        path: "/specials"
      },
      {
        name: "Testimonials",
        path: "/testimonials"
      },
      {
        name: "Booking",
        path: "/booking"
      }
    ]
    return (
        <nav  id="navbar">
          <img alt="logo" src={logo}/>
          <GiHamburgerMenu id={`hamburgerMenuIcon`} className={`${!sidebarOpen? "active":""}`} onClick={openSideBar}/>
          <ul>
          {links.map((link) => (
            <li><a href={link.path}>{link.name}</a></li>
          ))}
          </ul>
          <div id={`sidebar`} className={`${sidebarOpen? "active":""}`}>
            <AiOutlineClose className={`closeIcon`} onClick={closeSideBar}/>
          <ul>
          {links.map((link) => (
            <li><a href={link.path}>{link.name}</a></li>
          ))}
          </ul>
          </div>
        </nav>
    )
}

export default Nav