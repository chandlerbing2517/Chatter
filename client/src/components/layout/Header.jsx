import { AppBar, Toolbar, Box, Typography, IconButton, Tooltip } from '@mui/material'
import React, { Suspense, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { orange } from '../../constants/color'
import {Menu as MenuIcon, Notifications as NotificationsIcon ,Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon} from '@mui/icons-material';
import { lazy } from 'react';
const SearchDialog =lazy(()=> import('../specific/Search'));
const Notification =lazy(()=> import ('../specific/Notifications'));
const NewGroupDialog=lazy(()=> import('../specific/NewGroups'));
const Header = () => {
  const navigate = useNavigate();
  const[isMobile,setIsMobile]=useState(false);
  const[isSearch,setIsSearch]=useState(false);
  const[isNewGroup,setIsNewGroup]=useState(false);
  const[isNotification,setIsNotification]=useState(false);
  const handleMobile=()=>
{
  setIsMobile((prev)=>(!prev));
}
const openSearch=()=>
{
  setIsSearch((prev)=>(!prev));
}
const openNewGroup=()=>
{
  setIsNewGroup((prev)=>(!prev));
}
const logoutHandler=()=>
{
  console.log('Logout Handler');
}
const openNotification=()=>
{
  setIsNotification((prev)=>(!prev));
}

const navigateToGroup = () => navigate("/groups"); 
    
  return (
    
    <>
    <Box sx={{flexGrow: 1}} height={"4rem"}>
      <AppBar
      position='static'
      sx={{
      bgcolor: orange
      }}>
        <Toolbar>
          <Typography variant='h6'
          sx={{
            display:{xs:'none', sm:'block'},
          }}>
            Chatter
          </Typography>
          <Box           
          sx={{
            display:{xs:'block', sm:'none'},
          }}>
            <IconButton color='inherit' onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{flexGrow:1}} />
          <Box>
            <Iconbtn
            title={"Search"}
            icon={<SearchIcon />}
            onClick={openSearch} />
            <Iconbtn
            title={"New Group"}
            icon={<AddIcon />}
            onClick={openNewGroup} />
            <Iconbtn
            title={"Manage Group"}
            icon={<GroupIcon />}
            onClick={navigateToGroup} />
            <Iconbtn
            title={"Notifications"}
            icon={<NotificationsIcon />}
            onClick={logoutHandler} />
            <Iconbtn
            title={"Logout"}
            icon={<LogoutIcon />}
            onClick={openNotification} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    {isSearch && 
    (<Suspense fallback={<div>Loading...</div>}>
      <SearchDialog />
      </Suspense>)}
        {isNotification && 
    (<Suspense fallback={<div>Loading...</div>}>
      <NotificationDialog />
      </Suspense>)}
          {isNewGroup && 
    (<Suspense fallback={<div>Loading...</div>}>
      <NewGroupDialog />
      </Suspense>)}
    </>
  );
};
const Iconbtn =({title,icon,onClick})=>{
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header
