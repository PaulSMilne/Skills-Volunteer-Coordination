import React from 'react'
import ProjectSkillset from './ProjectSkillset.jsx'

const Project = (props) => {

  console.log(props.project.name)
  console.log(props.project.skills)

  const skillz = props.project.skills.map(
    function(skill, index){
      return(
        <ProjectSkillset projectSkill={skill} key={index} />
      )
    }
  )

//const skills = props.project.skills

  return (
    <div>
    <h4>{props.project.name}</h4>
    <p>{props.project.location}</p>
    <ul>
    {skillz}
    </ul>

    </div>
  )


}

export default Project
