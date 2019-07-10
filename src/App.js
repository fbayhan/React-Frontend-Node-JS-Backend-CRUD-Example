import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import MoviesPage from './components/pages/MoviesPage';
import NewMoviePage from './components/pages/NewMoviePage';
import HomePage from './components/pages/HomePage'
import { Route } from 'react-router-dom';


import {
  Container,
} from 'semantic-ui-react'

import Footer from './components/Footer';
import Header from './components/Header';



class App extends Component {



  render() {

    return (
      <div className="App">

        <Header></Header>

        <Container text>

          <Route exact path='/' component={HomePage}></Route>
          <Route path='/movies' exact component={MoviesPage}></Route>
          <Route path='/movies/new' exact component={NewMoviePage}></Route>
          <Route path='/movie/:_id' exact component={NewMoviePage}></Route>
        </Container>



        <Footer></Footer>




      </div>
    );
  }
}

export default App;
