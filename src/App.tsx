import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import ListaTema from './components/temas/listatema/ListaTema';
import { CacheProvider } from '@emotion/react';
import store from './store/store';
import {Provider} from "react-redux";
import {ToastContainer} from 'react-toastify'; // permite notificações personalizadas e visualment bonitas. 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <Provider store={store}>
    <ToastContainer />
     <BrowserRouter>
      
      <Navbar />

      <div style={{minHeight: '80vh'}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />

          <Route path="/home" element={<Home />} />

          <Route path="/temas" element={<ListaTema />} />
            <Route path="/formularioTema" element={<CadastroTema />} />
            <Route path="/atualizarTema/:id" element={<CadastroTema />} />
            <Route path="/deletarTema/:id" element={<DeletarTema />} />
          
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
        </Routes>
      </div>
      
      <Footer />
    
  </BrowserRouter>
  </Provider>
);

}

export default App;