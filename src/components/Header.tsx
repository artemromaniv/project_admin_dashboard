import { MenuOpen, Menu, NotificationAddOutlined } from "@mui/icons-material"

const Header = () => {
  return (
    <div className="header-container">
        <div className="menu-icon">
          <Menu/>
        </div>
        <div className="header-right-side">        
          <span className="header-greeting" >Hi,Luffy!</span>
        </div>
    </div>
  )
}

export default Header