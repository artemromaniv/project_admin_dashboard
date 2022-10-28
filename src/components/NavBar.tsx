import { useStateContext } from "../contexts/ContextProvider";
import { NavLink } from "react-router-dom";
import { links } from "./data/links"

const nav_links = links.map((item) => (
  <div key={item.title}>
    <span >{item.title}</span>
    <div >
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

const NavBar = () => {

  const { collapsed, setCollapsed } = useStateContext();

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav
      className={`top-0 left-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
        collapsed ? "-translate-x-full " : "translate-x-0"
      }`}
    >
      {nav_links}
      <button onClick={handleCollapse}>X</button>
      <span>{collapsed ? "1" : "0"}</span>
    </nav>
  );
};

export default NavBar;
