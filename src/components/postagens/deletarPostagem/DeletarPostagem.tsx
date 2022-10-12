import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@mui/material"
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarPostagem() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [post, setPosts] = useState<Postagem>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    useEffect(() => {
      if (token === '') {
        alert("Você precisa estar logado!");
        navigate('/login');
      }
    }, [token]);
  
  
    async function temaById(id: string) {
      await buscaId(`/postagens/${id}`, setPosts, {
        headers: { Authorization: token },
      });
    }
  
    useEffect(() => {
      if (id !== undefined) {
        temaById(id);
      }
    }, [id]);
  
    function nao() {
      navigate('/posts'); // rota do Front-end
    }
  
    async function sim() {
      try {
        await deleteId(`/postagens/${id}`, { //rota do api, back-end
          headers: { Authorization: token },
        })
        alert('Postagem deletada com sucesso.')
        navigate('/posts')
      } catch (error) {
        alert('Erro ao deletar a postagem')
        navigate('/posts')
      }
    }
  
   
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
                {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button  variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button   variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;