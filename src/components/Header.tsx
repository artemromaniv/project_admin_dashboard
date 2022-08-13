import { MenuOpen, Menu, NotificationsNone, KeyboardArrowDown } from "@mui/icons-material"
import { Typography } from "antd"
import { Header as HeaderAntd } from "antd/lib/layout/layout"
import Miles from '../assets/Miles.jpg'
const Header = () => {
  return (
    <HeaderAntd className="header-container">
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
    </HeaderAntd>
  )
}

export default Header