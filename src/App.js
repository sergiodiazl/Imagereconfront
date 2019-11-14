import React from 'react';
import Header from './components/Header/Header'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import styled from 'styled-components';
import './App.css';
import About from './components/About/About';
import Container from './components/Container/Container';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import background from './background.jpg';
const AppStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  background: #aaa;
min-height:100vh;
background-image: url(${background});
`;


function App() {
  return (
    <BrowserRouter>
    <AppStyle>
     
      <Header/>
     
      <Container>
        <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} />
        <Route exact  component={NotFound} />
        </Switch>
      </Container>
      
      <Footer/>
      
    </AppStyle>
    </BrowserRouter>
  );
}

export default App;
