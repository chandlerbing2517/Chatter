import { AppBar, Toolbar, Box, Typography, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { orange } from '../../constants/color'
import {Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon} from '@mui/icons-material';


const Header = () => {
  const handleMobile=()=>
{
  console.log('Handle Mobile');
}
const openSearch=()=>
{
  console.log('Open Search');
}
const openNewGroup=()=>
{
  console.log('Open New Group');
}
const navigate = useNavigate();
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
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
