import React , { Component } from 'react';
import './App.css';
import Header from './components/Header'
import {BrowserRouter} from 'react-router-dom'


export default class App extends Component {
    render(){
    return (
      <div>
        <BrowserRouter>
         <Header/>

        </BrowserRouter>


      </div>
    );
    }
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




    

