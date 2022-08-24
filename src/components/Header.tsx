import { MenuOpen, Menu, NotificationsNone, KeyboardArrowDown } from "@mui/icons-material"
import { Typography } from "antd"
import Satou from '../assets/Satou.jpg'
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
              <img src = {Satou} className = 'avatar' />
            </div>
            <Typography>Hi, Satou!</Typography>
            <KeyboardArrowDown/>
          </div>                  
        </div>
    </div>
  )
}

export default Header