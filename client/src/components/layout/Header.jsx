import { AppBar, Toolbar, Box, Typography, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { orange } from '../../constants/color'
import {Menu as MenuIcon, Search as SearchIcon, Add as AddIcon} from '@mui/icons-material';
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
  console.log('Open NewGroupe');
}
const Header = () => {
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
            <Tooltip>
            <IconButton color='inherit' onClick={openSearch}>
              <SearchIcon />
            </IconButton>
            </Tooltip>
            <Tooltip name="New Group">
            <IconButton color='inherit' onClick={openNewGroup}>
              <AddIcon />
            </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
  
};

export default Header
