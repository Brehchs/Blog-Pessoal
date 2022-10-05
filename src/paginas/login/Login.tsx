import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import {login} from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');

  const [userLogin, setUserLogin] = useState <UserLogin>(
    { // valores iniciais do State
      id:0,
      usuario:"",
      senha:"",
      token:""

    }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
      setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value
      })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault(); // impede que o botão atualize a tela
      try{
        await login(`/usuarios/logar`, userLogin, setToken)

        alert("Usuário logado com sucesso!");
      }catch(error){
          alert("Dados do usuário inconsistentes. Erro ao logar!");
      }
    }

    useEffect(() => {
      if(token !== "") {
        navigate("/home")
      }
    }, [token])

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className="corPagina"
    >
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              className="textoslogin"
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
              id="usuario"
              label="usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              
                <Button
                  className="botaologin"
                  type="submit"
                  variant="contained"
                >
                  Logar
                </Button>
             
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                color="#F42B00"
              >
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrousuario" className="textoslogin ">
              <Typography
                variant="subtitle2"
                gutterBottom
                align="center"
                fontSize={18}
                className="textoslogin"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Login;