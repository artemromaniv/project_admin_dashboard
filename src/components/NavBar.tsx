import { useStateContext } from "../contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import { links } from "./data/links";


const NavBar = () => {
  const { collapsed, setCollapsed } = useStateContext();
  
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  
  const nav_links = links.map((item) => (
    <section key={item.title} className="flex flex-col">
      <span className="mt-4">{item.title}</span>
      <nav className="flex flex-col gap-4 mt-2">
        {item.content.map((link) => (
          <NavLink
            to={`/${link.path}`}
            key={link.name}
            className={({ isActive }) =>
              `flex items-center px-5 py-2 rounded-2xl ${
                isActive ? "bg-blue text-crust" : "text-gray-500"
              }`
            }

            onClick = {handleCollapse}
          >
            {link.icon}
            <div className="w-3" />
            <span className="link-title">{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </section>
  ));



  return (
    <section
      className={`top-0 left-0 bg-crust  p-5 text-text fixed h-full z-40 rounded-r-3xl drop-shadow-xl  ease-in-out duration-300 ${
        collapsed ? "-translate-x-full " : "translate-x-0"
      }`}
    >
      <div className="flex gap-14 justify-between items-center">
        <Link to={"/"} className="font-bold text-3xl">
          Dashboard
        </Link>
        <button onClick={handleCollapse}>X</button>
      </div>
      {nav_links}
    </section>
  );
};

export default NavBar;
