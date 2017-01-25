import React from 'react'
import ReactDom from 'react-dom'
import AppRoutes from './components/AppRoutes.js'

window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('app'))
}
