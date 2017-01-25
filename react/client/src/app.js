const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./components/Home')
const Projects = require('./components/Projects')
const Skills = require('./components/Skills')
const Main = require('./components/Main')
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory} = ReactRouter

const App = React.createClass({

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/skills' component={Skills} />
        </Route>
      </Router>
    )
  }
})


ReactDOM.render(<App />, document.getElementById('app'))
