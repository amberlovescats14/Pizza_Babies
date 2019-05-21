import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import Length from '../Length/Length'
import Time from '../Time/Time'

export default function Router() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/length" component={Length}/>
      <Route  path="/time" component={Time}/>
    </Switch>
    </div>
  )
}
