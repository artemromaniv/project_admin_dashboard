import { Link,NavLink } from "react-router-dom"
import { links } from "./data/links"


const NavBar = () => {
  return (
    <div className="navbar">
        <div className="logo-container">
          <Link to='/'  className="logo-link">
            <span>Dashboard</span>
          </Link>
        </div>
        <div >
            {links.map((item) => (
                <div key={item.title}>
                  <p className="nav-title">{item.title}</p>
                  <div className="nav-links" >
                    {item.content.map((link) => (
                      <NavLink 
                        to={`/${link.path}`} 
                        key = {link.name} 
                        className = {({isActive}) => (isActive ? 'active-link' : 'normal-link')}
                      >
                        {link.icon}
                        <span className="link-title">{link.name}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default NavBar
