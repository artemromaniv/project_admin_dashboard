import { useStateContext } from '../contexts/ContextProvider'
import { Link, NavLink } from 'react-router-dom'
import { links } from './data/links'
import Satou from '../assets/Satou.jpg'
const NavBar = () => {
    const { collapsed, setCollapsed } = useStateContext()

    const handleCollapse = () => {
        setCollapsed(!collapsed)
    }

    // const nav_links = links.map((item) => (
    //   <section key={item.title} className="flex flex-col">
    //     <span className="mt-4">{item.title}</span>
    //     <nav className="flex flex-col gap-4 mt-2">
    //       {item.content.map((link) => (

    //       ))}
    //     </nav>
    //   </section>
    // ));

    const nav_links = links.map((item) => (
        <NavLink
            to={`/${item.path}`}
            key={item.name}
            className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-xl font-medium text-sm ${
                    isActive ? 'bg-[#EBF3FE] text-[#2F80ED]' : 'text-gray-500'
                }`
            }
            onClick={handleCollapse}
        >
            {item.icon}
            <div className="w-3" />
            <span className="link-title">{item.name}</span>
        </NavLink>
    ))

    return (
        <section
            className={`top-0 left-0 bg-crust  p-5 text-text fixed h-full z-40 rounded-r-3xl drop-shadow-xl  ease-in-out duration-300 ${
                collapsed ? '-translate-x-full ' : 'translate-x-0'
            }`}
        >
            <section className="flex gap-14 justify-between items-center">
                <Link
                    to={'/'}
                    className="font-bold text-3xl"
                    onClick={handleCollapse}
                >
                    Dashboard
                </Link>
                <button onClick={handleCollapse}>X</button>
            </section>
            <div className="h-4" />
            <nav className="flex flex-col gap-4 mt-2">{nav_links}</nav>
        </section>
    )
}

export default NavBar
