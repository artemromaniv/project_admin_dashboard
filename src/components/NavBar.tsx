import { Link,NavLink } from "react-router-dom"
import { links } from "./data/links"
import { createStyles, Navbar, Group, Code, Title,Text} from '@mantine/core';
import { ClassNames } from "@emotion/react";

const useStyles = createStyles((theme, _param, getRef)=> {
  return {
    wrapper:{
      padding:'1rem'
    },
    logo_link:{
      textDecoration:'none',
      color:'#1D1C25'
    },
    nav_title:{
      marginTop:'1rem'
    },
    nav_link_container:{
      marginTop:'30px',
      display:'flex',
      flexDirection:'column'
    },
    active_link:{
      display:'flex',
      alignItems:'center',
      color:'white',
      fontWeight:'bold',
      textDecoration:"none",
      padding:'1rem',
      borderRadius:"20px",
      background:'#352FC5'
    },
    normal_link:{
      display:'flex',
      alignItems:'center',
      color:'#A7A1AF',
      fontWeight:'bold',
      textDecoration:"none",
      padding:'1rem',
    }
  }
})

const NavBar = () => {

  const {classes} = useStyles()

  const Logo = () => {
    return (
      <Link to = '/' className= {classes.logo_link}>
        <Title>Dashboard</Title>
      </Link>
    )
  }

  const nav_links = links.map((item) => (
    <div key={item.title}>
      <Text className={classes.nav_title} >{item.title}</Text>
      <div className={classes.nav_link_container}>
        {item.content.map((link) => (
              <NavLink 
                to={`/${link.path}`} 
                key = {link.name} 
                className = {({isActive}) => (isActive ? classes.active_link : classes.normal_link)}
              >
                {link.icon}
                <Text className="link-title">{link.name}</Text>
              </NavLink>
            ))}
      </div>
    </div>
  ))


  return (
    <Navbar className={classes.wrapper} >
      <Logo/>
      {nav_links}
    </Navbar>
  )
}

export default NavBar