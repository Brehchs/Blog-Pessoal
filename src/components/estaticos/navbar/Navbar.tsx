import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Grid, getToggleButtonGroupUtilityClass } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/action";
import {toast} from 'react-toastify';
function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useNavigate();
  const dispatch = useDispatch();


  function goLogout(){
    dispatch (addToken (""));
    
    toast.info ('Você Saiu!', { //definições do alerta
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    history("/login")
}

var navbarComponent;

if(token != "") {
  navbarComponent =  <AppBar position="static">
  <Toolbar className="corBar" variant="dense">
    <Box className="cursor">
      <Typography className="corBar" variant="h5" color="inherit">
        Blog
      </Typography>
    </Box>

  <Grid container justifyContent="flex-end"> 
    <Box  display="flex" justifyContent="start">
      <Link to="/home" className="text-decorator-none"> 
      <Box  mx={1} className="cursor">
        <Typography className="text" variant="h6" color="inherit">
          Home |
        </Typography>
      </Box>
      </Link>
      <Link to="/posts"  className="text-decorator-none">
      <Box mx={1} className="cursor text">
        <Typography className="text" variant="h6" color="inherit">
          Postagens |
        </Typography>
      </Box>
      </Link>
      <Link to="/temas"  className="text-decorator-none">
      <Box mx={1} className="cursor text">
        <Typography className="text" variant="h6" color="inherit">
          Temas |
        </Typography>
      </Box>
      </Link>
      <Link to="/formularioTema"  className="text-decorator-none">
      <Box mx={1} className="cursor text">
        <Typography className="text" variant="h6" color="inherit">
          Cadastrar Tema |
        </Typography>
      </Box>
      </Link>
      
        <Box mx={1} className="cursor text" onClick={goLogout}>
          <Typography className="text" variant="h6" color="inherit">
            Logout
          </Typography>
        </Box>
    </Box>
    </Grid>
  </Toolbar>
</AppBar>
}
  
    
  return (
    <>
     {navbarComponent}
    </>
  )
  }

export default Navbar;
