import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import {Grid} from '@mui/material'
const appLayout = () => (WrappedComponent)=> {
    return(props)=>{
      return (
    <>
      <Title />
      <Header />
      <Grid container height={"calc(100vh-4rem)"}>
        <Grid item xs={4} height={"100%"}>First</Grid>
        <Grid item xs={4} height={"100%"}><WrappedComponent {...props} /></Grid>
        <Grid item xs={4} height={"100%"}>Third</Grid>
      </Grid>
    </>
  )
}
}

export default appLayout
