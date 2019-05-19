import React from 'react'
import {Switch, Route} from 'react-router-dom'
import App from '../App'
import Length from './Length'
import Time from './Time'
import Volume from './Volume'





export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={App}/>
      <Route  path="/Length" component={Length}/>
      <Route  path="/Time" component={Time}/>
      <Route  path="/Volume" component={Volume}/>


    </Switch>
  )
}
