import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Main from './components/Main.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

const routes = (

<Route path='/' component={Main}>
  <IndexRoute component={Home} />
  <Route path='/projects' component={Projects} />
  <Route path='/skills' component={Skills} />
</Route>
)

export default routes
