import { MenuOpen, Menu, NotificationsNone, KeyboardArrowDown } from "@mui/icons-material"
import { Typography } from "antd"
import { useStateContext } from "../contexts/ContextProvider"
import Satou from '../assets/Satou.jpg'
const Header = () => {
  const {collapsed,setCollapsed} = useStateContext()

  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="header-container">
        <div className="menu-icon">
          <Menu onClick = {handleCollapse}/>
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