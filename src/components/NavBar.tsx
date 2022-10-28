import { Link,NavLink } from "react-router-dom"
import { links } from "./data/links"
import { Logout, SyncAlt } from "@mui/icons-material";

const NavBar = () => {



  const Logo = () => {
    return (
      <Link to = '/'>
      </Link>
    )
  }

  const nav_links = links.map((item) => (
    <div key={item.title}>
      <span  >{item.title}</span>
      <div>
        {item.content.map((link) => (
          <NavLink 
            to={`/${link.path}`} 
            key = {link.name} 
            className = {({isActive}) => (isActive ? '' : '')}
          >
            {link.icon}
            <span className="link-title">{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  ))


  return (
  <nav>
    
  </nav>
  )
}

export default NavBar
