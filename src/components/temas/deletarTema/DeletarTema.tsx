import {Box, Button, Card, CardActions, CardContent, Container, Typography} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tema from '../../../models/Tema';
import { buscaId, deleteId } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
  
  function DeletarTema() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>()
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>();
  
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
      await buscaId(`/temas/${id}`, setTema, {
        headers: { Authorization: token },
      });
    }
  
    useEffect(() => {
      if (id !== undefined) {
        temaById(id);
      }
    }, [id]);
  
    function nao() {
      navigate('/temas');
    }
  
    async function sim() {
      try {
        await deleteId(`/temas/${id}`, {
          headers: { Authorization: token },
        })
        toast.success ('Tema Deletado Com Sucesso!', { //definições do alerta
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
        navigate('/temas')
      } catch (error) {
        alert('Erro ao deletar o tema')
        navigate('/temas')
      }
    }
  
    return (
      <Container> 
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Box justifyContent="center">
                <Typography color="textSecondary" gutterBottom>
                  Deseja deletar o Tema:
                </Typography>
                <Typography color="textSecondary">{tema?.descricao}</Typography>
              </Box>
            </CardContent>
  
            <CardActions>
              <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
                <Box mx={2}>
                  <Button
                    onClick={sim}
                    variant="contained"
                    className="marginLeft"
                    size="large"
                    color="primary"
                  >
                    Sim
                  </Button>
                </Box>
                <Box mx={2}>
                  <Button
                    onClick={nao}
                    variant="contained"
                    size="large"
                    color="secondary"
                  >
                    Não
                  </Button>
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Box>
        </Container>
    );
  }
  
  export default DeletarTema;