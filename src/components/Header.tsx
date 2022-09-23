import { useState } from 'react';
import { createStyles, Header as HeaderMantine, Container, Group, Burger, useMantineColorScheme,ActionIcon } from '@mantine/core';

import { NotificationsNone, KeyboardArrowDown } from "@mui/icons-material"
import { useStateContext } from "../contexts/ContextProvider"
import Satou from '../assets/Satou.jpg'
import ColorThemeToggle from './ColorSchemeToggle';


const useStyles = createStyles((theme) => ({
  header: {
    padding:theme.spacing.sm,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}



const Header = () =>  {
  const {collapsed,setCollapsed} = useStateContext()


  const handleCollapse = () => {
    setCollapsed(!collapsed)
  }
  const { classes, cx } = useStyles();



  return (
    <HeaderMantine height={60} className = {classes.header} mb = {60} >
      <Burger opened={!collapsed} onClick={handleCollapse} size="sm" />
      <ColorThemeToggle/>
    </HeaderMantine>
  );
}

export default Header