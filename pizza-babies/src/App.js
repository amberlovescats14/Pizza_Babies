import React , { Component } from 'react';
import './App.css';
import Router from '../src/components/Router'
import Header from './components/Header'
import {BrowserRouter, Route} from 'react-router-dom'


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <Header/>
    <Router/>
    
  </BrowserRouter>
  );
  }
}

export default App;
