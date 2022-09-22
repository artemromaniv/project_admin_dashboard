import { Link,NavLink } from "react-router-dom"
import { links } from "./data/links"
import { createStyles, Navbar, Group, Code, Title,Text} from '@mantine/core';
import { Logout, SyncAlt } from "@mui/icons-material";

const useStyles = createStyles((theme, _param, getRef)=> {
  return {
    wrapper:{
      padding:theme.spacing.sm
    },
    logo_link:{
      textDecoration:'none',
      color:theme.black
    },
    nav_title:{
      marginTop:theme.spacing.sm
    },
    nav_link_container:{
      marginTop:theme.spacing.md,
      display:'flex',
      flexDirection:'column'
    },
    active_link:{
      display:'flex',
      alignItems:'center',
      color:'white',
      fontWeight:'bold',
      textDecoration:"none",
      padding:theme.spacing.sm,
      borderRadius:"20px",
      background:'#352FC5'
    },
    normal_link:{
      display:'flex',
      alignItems:'center',
      color:'#A7A1AF',
      fontWeight:'bold',
      textDecoration:"none",
      padding:theme.spacing.sm,
    },
    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
      display:'flex',
      flexDirection:'column'
    },
    link:{
      textDecoration:'none'
    },
    link_icon:{
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
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
            <span className="link-title">{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  ))


  return (
    <Navbar className={classes.wrapper} width ={{sm:300}} >
      <Navbar.Section grow>
        <Logo/>
        {nav_links}
      </Navbar.Section>
      <Navbar.Section className={classes.footer}>
        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()} >
          <SyncAlt className={classes.link_icon} />
          <span>Change account</span>
        </a>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()} >
          <Logout className={classes.link_icon} />
          <span>Log Out</span>
        </a>
      </Navbar.Section>
    </Navbar>
  )
}

export default NavBar