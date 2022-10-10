import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid, getToggleButtonGroupUtilityClass } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import "./Navbar.css";

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  let history = useNavigate();

  function goLogout(){
    setToken("")
    alert("Você Saiu!")
    history("/login")
}
  
    
  return (
    <>
      <AppBar position="static">
        <Toolbar className="cor" variant="dense">
          <Box className="cursor">
            <Typography className="cor" variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

        <Grid container justifyContent="flex-end"> 
          <Box  display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none"> 
            <Box  mx={1} className="cursor text">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            </Link>
            <Link to="/posts"  className="text-decorator-none">
            <Box mx={1} className="cursor text">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            </Link>
            <Link to="/temas"  className="text-decorator-none">
            <Box mx={1} className="cursor text">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            </Link>
            <Link to="/formularioTema"  className="text-decorator-none">
            <Box mx={1} className="cursor text">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            </Link>
            
              <Box mx={1} className="cursor text" onClick={goLogout}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
          </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
  }

export default Navbar;
