import { Grid,Skeleton } from '@mui/material';
import React from 'react'

export const LayoutLoader = () => {
  return (
      <Grid container height={"calc(100vh - 4rem)"}>
        <Grid item sm={4} md ={3} sx={{display:{xs:"none", sm:"block"},}} height={"100%"}><Skeleton /></Grid>
        <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"} ><Skeleton /></Grid>
        <Grid item md={4} lg={3} height={"100%"} sx={{display:{xs:"none",md:"block"},padding:"2rem",bgcolor:"rgb(0,0,0,0.85)"
        }}><Skeleton /></Grid>
      </Grid>
  )
}

export default LayoutLoader;
