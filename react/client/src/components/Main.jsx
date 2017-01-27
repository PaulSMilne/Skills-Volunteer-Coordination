import React from 'react'
import Projects from './ProjectsList.jsx'
import Skills from './SkillsList.jsx'
import {Link} from 'react-router'

const Main = (props) => {

  return (

    <section className='container'>

      <h1>Skillz</h1>

      <ul className='navbar'>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='projects'>Projects</Link></li>
        <li><Link to='skills'>Skills</Link></li>

      </ul>

      {props.children}

    </section>

  )
}

export default Main
