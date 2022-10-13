import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@mui/material"
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [post, setPosts] = useState<Postagem>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    useEffect(() => {
      if (token === '') {
        toast.error ('Você Precisa Estar Logado!', { //definições do alerta
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });

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
        toast.success ('Postagem Deletada Com Sucesso!', { //definições do alerta
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });

        navigate('/posts')
      } catch (error) {
        alert('Erro Ao Deletar A Postagem')
        navigate('/posts')
      }
    }
   
  return (
    <>
      <div className="fundoDelete">
      <Box m={2}>
        <Card variant="outlined" className="cardDelete" >
          <CardContent >
            <Box justifyContent="center">
              <Typography className="tituloDelete" color="textSecondary" gutterBottom>
                TEM CERTEZA QUE QUER DELETAR A POSTAGEM:
              </Typography>
              <Typography className="textDelete" color="textSecondary" >
                {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim}  variant="contained" className="marginLeft botaoSim" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao} className="botaoNao"   variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
      </div>
    </>
  );
}
export default DeletarPostagem;