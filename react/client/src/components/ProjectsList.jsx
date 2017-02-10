import React from 'react'
import Project from './Project.jsx'

const ProjectsList = (props) => {

  const list = props.allProjects.map(
    function(proj, index){
      return(
        <Project project={proj} key={index} />
      )
    }
  )

  return (
    <section className="projList">
      {list}
    </section>
  )


}

export default ProjectsList
