import { MenuOpen, Menu, NotificationsNone, KeyboardArrowDown } from "@mui/icons-material"
import { Typography } from "antd"
import Miles from '../assets/Miles.jpg'
const Header = () => {
  return (
    <div className="header-container">
        <div className="menu-icon">
          <Menu/>
        </div>
        <div className="header-right-side" >
          <div className="header-items-container">
            <NotificationsNone/>
            <div className="avatar-container">
              <img src = {Miles} className = 'avatar' />
            </div>
            <Typography>Hi, Miles!</Typography>
            <KeyboardArrowDown/>
          </div>                  
        </div>
    </div>
  )
}

export default Header