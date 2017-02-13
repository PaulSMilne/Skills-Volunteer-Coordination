import React from 'react'
import ProjectSkillset from './ProjectSkillset.jsx'

const Project = (props) => {
  const skillz = props.project.skills.map(
    function(skill, index){
      return(
        <ProjectSkillset projectSkill={skill} key={index} />
      )
    }
  )


  return (
    <div>
    <h4>{props.project.name}</h4>
    <p>Location: {props.project.location}</p>
    <p>Skills required:</p>
    <ul>
    {skillz}
    </ul>

    </div>
  )


}

export default Project
