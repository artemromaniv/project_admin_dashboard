import { useStateContext } from "../contexts/ContextProvider";
const NavBar = () => {
  const { collapsed, setCollapsed } = useStateContext();
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <nav  className={`top-0 left-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
      collapsed ? "translate-x-0 " : "-translate-x-full"
    }`}>
      <button onClick={handleCollapse}>X</button>
      <span>{collapsed ? '1' : '0'}</span>
    </nav>
  );
};

export default NavBar;
