import React , { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import Router from '../src/components/Router';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';


export default class App extends Component {
  render(){
  return (

    <BrowserRouter>
    <h1>hello</h1>
    <Header/>
    <Router/>
    
    </BrowserRouter>
  );
=======
import Header from './components/Header'
import Router from './components/Router'
import {BrowserRouter, Route} from 'react-router-dom'

export default class App extends Component {
    render(){
    return (
      <div>
        <BrowserRouter>
         <Header />
         <Router/>

        </BrowserRouter>


      </div>
    );
    }
>>>>>>> 1dfada98da2d540317b560d7be3e312c6586f5d4
  }




// import './App.css';
// import Router from '../src/components/Router'
// import Header from './components/Header'
// import {BrowserRouter} from 'react-router-dom'


// export default class App extends Component {
//   render(){
//   return (
//     <BrowserRouter>
//     <div>
//     <h1>hello</h1>
//     <Header/>
//     <Router/>
//     </div>
    
//   </BrowserRouter>
//   );
//   }
// }




    

