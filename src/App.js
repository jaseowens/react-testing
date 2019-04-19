import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Game from './Components/Game';

//Example 'Container Component'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
          <Navbar />
          <Route exact path='/' component={ Home } /> 
          <Route path='/about' component={ About } /> 
          <Route path='/contact' component={ Contact } /> 
          <Route path='/game/:game_id' component={ Game } /> 

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
