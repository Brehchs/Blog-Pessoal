import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className="bar">
          <Tabs className="bar" centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className="post" label="Todas as postagens" value="1"/>
            <Tab className="divisao" label="|" value="1"/>
            <Tab className="sobre" label="Sobre" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography className="titulo" variant="h5" gutterBottom color="textPrimary" component="h5" align="center">Sobre</Typography>
          <Typography className="textosobre" variant="body1" gutterBottom color="textPrimary" align="justify">Olá, eu sou a Brenda, tenho 28 anos e fiz esse blog como meu primeiro projeto no mundo de desenvolvimento web. O intuito dele é que diversas pessoas com diversos pensamentos se expressem e compartilhem de ideias e vivências. Fique à vontade para abrir sua mente e deixar-se levar pela inspiração. Aqui é um ambiente seguro onde desabafos são bem vindos! Lembre-se: seja parceiro do sorriso, portador de abraços e hidrate-se!</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;