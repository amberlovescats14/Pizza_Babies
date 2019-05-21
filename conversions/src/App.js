import React, { Component } from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './components/Header/Header'


export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h1>App</h1>
        <Header/>
      </BrowserRouter>
    )
  }
}

export default App
