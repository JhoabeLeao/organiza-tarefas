import './App.css';
import {useState, useEffect} from 'react';

import React, { Fragment } from 'react';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";
import styled from "styled-components";

function App() {
 
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Fragment>
          <GlobalTheme />
          <Container>
            <Title>
              Title em {theme === "light" ? "light theme" : "dark theme"}!
            </Title>
            <ButtonChange onClick={toggleTheme}>Mudar tema</ButtonChange>
          </Container>
        </Fragment>
      </ThemeProvider>
    );
  
  
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  
  const Title = styled.h1`
    font-size: 30px;
    margin-left: 15px;
  `;
  
  const ButtonChange = styled.button`
    width: 100px;
    height: 40px;
    margin-right: 20px;
    border-radius: 10px;
  `;

}

const [ theme, setTheme ] = useState('light');


  const App = () => {
    return (
    <div />
   )
  }

  const [tarefas, setarTarefas] = useState([
    
  ]);
  const [modal,setModal] = useState(false);

  const salvarTarefa = () => {
    //TODO: Salvar a tarefa.
    var tarefa = document.getElementById('content-tarefa');
    
    setarTarefas([
      ...tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada:false
      }
    ]);

    setModal(false);

  }

  const marcarConcluida = (id) =>{
    let novasTarefas = tarefas.filter(function(val){
      if(val.id == id){
        val.finalizada = true;
      }
      return val;
    })

    setarTarefas(novasTarefas);

  }  

  const abrirModal = () => {
    setModal(!modal);
  }

  useEffect(() =>{
    //Fazer uma chamada para API e preencher o estado tarefas.
  },[])

  return (
    <div className="App">
      {
        modal?
        <div className="modal">
            <div className="modalContent">
              <h3>Adicionar sua tarefa</h3>
              <input id="content-tarefa" type="text" />
              <button onClick={() => salvarTarefa()}>Salvar!</button>            
            </div>
            
        </div>
        :
        <div></div>
      }
      <div onClick={()=>abrirModal()} className="addTarefa">+</div>
      
      <input id="night-mode" class="lamp" type="checkbox" aria-label="night-mode" />

      <div className="boxTarefas">

        <h2>Minhas Tarefas do Dia!</h2>
        
        {
          tarefas.map((val)=>{
            if(!val.finalizada){
              return(
               <p onClick={()=>marcarConcluida(val.id)}>{val.tarefa}</p>
              );
            }else{
              return(
                <p onClick={()=>marcarConcluida(val.id)}style={{textDecoration:'line-through'}}>{val.tarefa}</p>
              );
            }
          })
        }

        

      </div>
    </div>
  );}
      
export default App;