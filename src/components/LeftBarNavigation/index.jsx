import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { FaHome } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { SiFiles } from "react-icons/si";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DrawerHeader, LeftDrawer } from './style'
import { useRouter } from 'next/router';
import { Box, Toolbar } from '@mui/material';



export default function PersistentDrawerLeft({currentPage, open}) {
  
  const router = useRouter();


  const navagationItemsTop = [
    {
      name:"Pessoal",
      link:"personal",
      icon:<FaHome />
    },
    {
      name:"Meu drive",
      link:"my-drive",
      icon:<SiFiles/>
    },
    {
      name:"Permissões",
      link:"permissions",
      icon:<FaUsersGear/>
    },
  ]

  const navagationItemsMid = [
    {
      name:"Compartilhado comigo",
      link:"sharing",
      icon:<FaShareAlt/>
    },
    {
      name:"Recentes",
      link:"recents",
      icon:<FaRegClock/>
    },
    {
      name:"Favoritos",
      link:"favorits",
      icon:<FaRegStar/>
    },
  ]

  return (
      <LeftDrawer
        variant="permanent"
        open={open}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <Divider />
        <List sx={{padding:0, color:'black'}}>
          {navagationItemsTop.map((item) => {
            return (
              <ListItem 
              key={item.name} 
              disablePadding
              onClick={()=>router.push(`/drive/${item.link}`)}
              sx={{backgroundColor: item.link === currentPage && "#d2d2d2"}}
              >
                <ListItemButton>
                  <ListItemIcon sx={{minWidth: "36px", color:'black'}}>
                    <>{item.icon}</>
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        <Divider sx={{marginTop:"15px", marginBottom:"15px"}} />
        <List sx={{padding:0, color:'black'}}>
          {navagationItemsMid.map((item) => {
            return (
              <ListItem 
              key={item.name} 
              disablePadding
              onClick={()=>router.push(`/drive/${item.link}`)}
              sx={{backgroundColor: item.link === currentPage && "#d2d2d2"}}
              >
                <ListItemButton>
                  <ListItemIcon sx={{minWidth: "36px", color:'black'}}>
                    <>{item.icon}</>
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      </LeftDrawer>
  );
}