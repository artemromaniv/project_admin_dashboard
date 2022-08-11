import { MenuOpen, Menu, } from "@mui/icons-material"
import { Header } from "antd/lib/layout/layout"
const AppHeader = () => {
  return (
    <Header className="header-container">
        <div className="menu-icon">
          <Menu/>
        </div>
        <div className="header-right-side">
                  
          <span className="header-greeting" >Hi,Luffy!</span>
        </div>
    </Header>
  )
}

export default AppHeader