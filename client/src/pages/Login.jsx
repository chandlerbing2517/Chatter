import React, { useState } from 'react'
import {Avatar, Button, Container,IconButton,Paper, Stack, TextField, Typography} from'@mui/material';
import {CameraAlt as CameraAltIcon} from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp';
import { usernameValidator } from '../utils/validator';
const Login = () => {
  const [isLogin,setIsLogin]= useState(true);
  const toggleLogin=()=>setIsLogin((prev)=> !prev);
  const name = useInputValidation("");
  const password = useStrongPassword();
  const bio = useInputValidation("");
  const username= useInputValidation("",usernameValidator);
  const avatar=useFileHandler("single")
  const handleLogin=(e)=>{
    e.preventDefault();
  };
  const handleSignUp=(e)=>{
    e.preventDefault();
  };

  return (
    <div
    style={{
      backgroundImage:"linear-gradient(rgba(231, 24, 24, 0.5),rgba(236, 134, 134, 0.5))"
    }}
    >
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
      }}
      onSubmit={handleLogin}
      >
        <TextField
        required fullWidth
        label="Username"
        margin="normal"
        varient="outlined"
        value={username.value}
        onChange={username.changeHandler}
        />
        {
          username.error &&(
            <Typography color="error" variant="caption">
              {username.error}
            </Typography>
          )
        }
         <TextField
        required fullWidth
        label="Password"
        type="password"
        margin="normal"
        varient="outlined"
        value={password.value}
        onChange={password.changeHandler}
        />
        {
          password.error &&(
            <Typography color="error" variant="caption">
              {password.error}
            </Typography>
          )
        }
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
      }}
       onSubmit={handleSignUp}jh
      >
        <Stack 
        position={"relative"}
        width={"10rem"}
        margin={"auto"}
        >
          <Avatar sx={{
            width:"10rem",
            height:"10rem",
            objectFit:"contain"
          }}
          src={avatar.preview}
          />
          {
          avatar.error &&(
            <Typography m={"1rem"}color="error" variant="caption">
              {avatar.error}
            </Typography>
          )
        }
          <IconButton sx={{
            position:"absolute",
            bottom:"0",
            right:"0",
            color:"white",
            bgcolor:"rgba(0,0,0,0.5)",
            ":hover":{
            bgcolor:"rgba(0,0,0,0.7)"
            },
          }}
          component="label">
            <>
            <CameraAltIcon/>
            <VisuallyHiddenInput type="file" onChange={avatar.changeHandler }/>
            </>
          </IconButton>

        </Stack>
        <TextField
        required fullWidth
        label="Username"
        margin="normal"
        varient="outlined"
        value={username.value}
        onChange={username.changeHandler}
        />
        <TextField
        required fullWidth
        label="Name"
        margin="normal"
        varient="outlined"
        value={name.value}
        onChange={name.changeHandler}
        />
        <TextField
        required fullWidth
        label="Bio"
        margin="normal"
        varient="outlined"
        value={bio.value}
        onChange={bio.changeHandler}
        />
         <TextField
        required fullWidth
        label="Password"
        type="password"
        margin="normal"
        varient="outlined"
        value={password.value}
        onChange={password.changeHandler}
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
    </div>
  )
}

export default Login
Login