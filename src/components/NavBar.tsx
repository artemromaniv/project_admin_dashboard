import { useStateContext } from "../contexts/ContextProvider";
const NavBar = () => {
  const { collapsed, setCollapsed } = useStateContext();
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <nav className="absolute h-full bg-pink-200 p-5">
      <button onClick={handleCollapse}>X</button>
    </nav>
  );
};

export default NavBar;
