import React, { useState } from 'react'
import {Avatar, Button, Container,IconButton,Paper, Stack, TextField, Typography} from'@mui/material';
import {CameraAltIcon} from '@mui/icons-material';
const Login = () => {
  const [isLogin,setIsLogin]= useState(true);
  const toggleLogin=()=>setIsLogin((prev)=> !prev);
  return (
    <Container component={"main"} maxWidth="xs" sx={{
      height:"100vh",
      display:"flex",
      justifyContent: "column",
      alignItems: "center",
    }}>
      <Paper
      elevation={3}
      sx={{
      padding: 4,
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      }}
      >

      {isLogin? (<>
      <Typography variant='5'>Login</Typography>
      <form style={{
        width:"100%",
        marginTop: "1rem"
      }}>
        <Stack 
        position={"relative"}
        width={"10rem"}
        margin={"auto"}
        >
          <Avatar sx={{
            width:"10rem",
            height:"10rem",
            objectFit:"contain"
          }}/>
          <IconButton>
            <>
            <CameraAltIcon/>
            <VisuallyHidden>Upload Avatar</VisuallyHidden>
            </>
          </IconButton>

        </Stack>
        <TextField
        required fullWidth
        label="Username"
        margin="normal"
        varient="outlined"
        />
         <TextField
        required fullWidth
        label="Password"
        type="password"
        margin="normal"
        varient="outlined"
        />
        <Button sx={{
          marginTop: "1rem"
        }}
        variant='contained' color='primary' type='submit' fullWidth>
          Login
        </Button>
        <Typography textAlign={"center"} marginTop={"1rem"}>OR</Typography>
        <Button sx={{
          marginTop: "1rem"
        }}
          onClick={toggleLogin} fullWidth>
          Sign Up
        </Button>
      </form>
      </>
      ): (
      <>
      <Typography variant='5'>SignUp</Typography>
      <form style={{
        width:"100%",
        marginTop: "1rem"
      }}>
        <TextField
        required fullWidth
        label="Username"
        margin="normal"
        varient="outlined"
        />
        <TextField
        required fullWidth
        label="Name"
        margin="normal"
        varient="outlined"
        />
        <TextField
        required fullWidth
        label="Bio"
        margin="normal"
        varient="outlined"
        />
         <TextField
        required fullWidth
        label="Password"
        type="password"
        margin="normal"
        varient="outlined"
        />
        <Button sx={{
          marginTop: "1rem"
        }}
        variant='contained' color='primary' type='submit' fullWidth>
          Sign Up
        </Button>
        <Typography textAlign={"center"} marginTop={"1rem"}>OR</Typography>
        <Button sx={{
          marginTop: "1rem"
        }}
          onClick={toggleLogin} fullWidth>
          Login
        </Button>
      </form>
      </>
  )}
      </Paper>
    </Container>
  )
}

export default Login
Login