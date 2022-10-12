
import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
  import { busca, buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
  
  function CadastroPost() {
    let navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
  
    const [temas, setTemas] = useState<Tema[]>([]);
  
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
  
    const [tema, setTema] = useState<Tema>({
      id: 0,
      descricao: '',
    });
  
    const [postagem, setPostagens] = useState<Postagem>({
      id: 0,
      titulo: '',
      texto: '',
      tema: null,
    });
  
    useEffect(() => {
      if (token === '') {
        alert('Você precisa estar Logado!');
        navigate('/login');
      }
    }, [token]);
  
    useEffect(() => {
      setPostagens({
        ...postagem,
        tema: tema,
      });
    }, [tema]);
  
    async function findByIdPostagem(id: string) {
      await buscaId(`postagens/${id}`, setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    useEffect(() => {
      getTemas();
      if (id !== undefined) {
        findByIdPostagem(id);
      }
    }, [id]);
  
    async function getTemas() {
      await busca('/temas', setTemas, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    function updatedPostagens(event: ChangeEvent<HTMLInputElement>) {
      setPostagens({
        ...postagem,
        [event.target.name]: event.target.value,
        tema: tema,
      });
    }
  
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
  
      if (id !== undefined) {
        try {
          await put(`/postagens`, postagem, setPostagens, {
            headers: {
              Authorization: token,
            },
          });
          alert('Postagem atualizada com sucesso');
        } catch (error) {
          alert('Erro ao atualizar, verifique os campos');
        }
      } else {
        try {
          await post(`/postagens`, postagem, setPostagens, {
            headers: {
              Authorization: token,
            },
          });
          alert('Postagem cadastrada com sucesso');
        } catch (error) {
          alert('Erro ao cadastrar, verifique os campos');
        }
      }
      navigate('/posts');
    }
  
    return (
      <>
        <Container>
          <form onSubmit={onSubmit}>
            <Typography 
              variant="h3"
              color="#D25B06"
              component="h1"
              align="center"
              fontFamily="Inconsolata"
            >
              Nova Postagem
            </Typography>
  
            <TextField
              value={postagem.titulo}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagens(e)}
              id="titulo"
              label="titulo"
              variant="outlined"
              name="titulo"
              margin="normal"
              fullWidth
            />
  
            <TextField
              value={postagem.texto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagens(e)}
              id="texto"
              label="texto"
              name="texto"
              variant="outlined"
              margin="normal"
              fullWidth
            />
  
            <FormControl variant='outlined'>
              <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
  
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                fullWidth
                
                onChange={(e) =>
                  buscaId(`/temas/${e.target.value}`, setTema, {
                    headers: {
                      Authorization: token,
                    },
                  })
                }
              >
                {temas.map((item) => (
                  <MenuItem value={item.id} style={{display: 'block'}}>{item.descricao}</MenuItem>
                ))}
              </Select>
              <FormHelperText>Escolha um tema para a postagem</FormHelperText>
              <Button type="submit" variant="contained" color="primary">
                Finalizar
              </Button>
            </FormControl>
          </form>
        </Container>
      </>
    );
  }
  
  export default CadastroPost;